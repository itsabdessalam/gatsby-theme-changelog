const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const crypto = require("crypto");
const { urlResolve } = require("gatsby-core-utils");
const { slugify } = require("./src/utils/helpers");

let basePath;
let tagsPath;
let contentPath;
let assetPath;

const PostTemplate = require.resolve("./src/templates/post");
const PostsTemplate = require.resolve("./src/templates/posts");
const TagTemplate = require.resolve("./src/templates/tag");
const PageTemplate = require.resolve("./src/templates/page");

exports.onPreBootstrap = ({ store }, themeOptions) => {
	const { program } = store.getState();

	basePath = themeOptions.basePath || "/";
	tagsPath = themeOptions.tagsPath || "/tags";
	contentPath = themeOptions.contentPath || "content/posts";
	assetPath = themeOptions.assetPath || "content/assets";

	const dirs = [
		path.join(program.directory, contentPath),
		path.join(program.directory, assetPath)
	];

	dirs.forEach(dir => {
		if (!fs.existsSync(dir)) {
			mkdirp.sync(dir);
		}
	});
};

const mdxResolverPassthrough = fieldName => {
	return async (source, args, context, info) => {
		const type = info.schema.getType("Mdx");
		const mdxNode = context.nodeModel.getNodeById({
			id: source.parent
		});
		const resolver = type.getFields()[fieldName].resolve;
		const result = await resolver(mdxNode, args, context, {
			fieldName
		});
		return result;
	};
};
exports.sourceNodes = ({ actions, schema }) => {
	const { createTypes } = actions;
	createTypes(
		schema.buildObjectType({
			name: "BlogPost",
			fields: {
				id: { type: "ID!" },
				title: {
					type: "String!"
				},
				slug: {
					type: "String!"
				},
				author: {
					type: "String!"
				},
				draft: {
					type: "Boolean!"
				},
				date: { type: "Date", extensions: { dateformat: {} } },
				tags: { type: "[String]!" },
				keywords: { type: "[String]!" },
				postType: {
					type: "String!"
				},
				excerpt: {
					type: "String!",
					args: {
						pruneLength: {
							type: "Int",
							defaultValue: 140
						}
					},
					resolve: mdxResolverPassthrough("excerpt")
				},
				body: {
					type: "String!",
					resolve: mdxResolverPassthrough("body")
				}
			},
			interfaces: ["Node"]
		})
	);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			site {
				siteMetadata {
					url
					title
					locale
					themeConfig {
						loadMorePosts
						postsPerPage
						postsIncrementBy
					}
				}
			}
			mdxPosts: allBlogPost(
				filter: { postType: { eq: "post" } }
				sort: { fields: [date, title], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						id
						excerpt
						author
						slug
						title
						tags
						body
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
			mdxPostTags: allBlogPost {
				distinct(field: tags)
			}
			mdxPages: allBlogPost(
				filter: { postType: { eq: "page" } }
				sort: { fields: [date, title], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						id
						excerpt
						author
						slug
						title
						tags
						body
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panic(result.errors);
	}

	const {
		mdxPosts,
		mdxPostTags,
		mdxPages,
		site: { siteMetadata }
	} = result.data;

	const posts = mdxPosts.edges;
	const tags = mdxPostTags.distinct;
	const pages = mdxPages.edges;
	const {
		title: siteTitle,
		url: siteURL,
		themeConfig,
		locale
	} = siteMetadata;

	// Single pages
	if (posts && posts.length > 0) {
		posts.forEach(({ node: post }, index) => {
			const previous =
				index === posts.length - 1 ? null : posts[index + 1];
			const next = index === 0 ? null : posts[index - 1];
			const { slug } = post;
			createPage({
				path: slug,
				component: PostTemplate,
				context: {
					...post,
					siteURL,
					previous,
					next,
					themeConfig,
					locale,
					tagsPath
				}
			});
		});
	}

	// Tags
	if (tags && tags.length > 0) {
		tags.forEach(tag => {
			createPage({
				path: `${tagsPath}/${slugify(tag)}`,
				component: TagTemplate,
				context: {
					tag,
					themeConfig,
					locale,
					tagsPath
				}
			});
		});
	}

	// Single pages
	if (pages && pages.length > 0) {
		pages.forEach(({ node: page }) => {
			const { slug } = page;
			createPage({
				path: slug,
				component: PageTemplate,
				context: {
					...page,
					siteTitle,
					siteURL,
					themeConfig,
					locale,
					tagsPath
				}
			});
		});
	}

	// Posts page
	createPage({
		path: basePath,
		component: PostsTemplate,
		context: {
			posts,
			siteTitle,
			siteURL,
			themeConfig,
			locale,
			tagsPath
		}
	});
};

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
	const { createNode, createParentChildLink } = actions;

	const toPostPath = node => {
		const { dir } = path.parse(node.relativePath);
		return urlResolve(basePath, dir, node.name);
	};

	if (node.internal.type !== "Mdx") {
		return;
	}
	const fileNode = getNode(node.parent);
	const source = fileNode.sourceInstanceName;

	if (node.internal.type === "Mdx" && source === contentPath) {
		const slug = toPostPath(fileNode).replace("index", "");
		const fieldData = {
			title: node.frontmatter.title,
			tags: node.frontmatter.tags || [],
			slug,
			date: node.frontmatter.date,
			author: node.frontmatter.author,
			draft: node.frontmatter.draft,
			postType: node.frontmatter.type,
			media: node.frontmatter.media
		};
		createNode({
			...fieldData,
			id: createNodeId(`${node.id} >>> BlogPost`),
			parent: node.id,
			children: [],
			internal: {
				type: "BlogPost",
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(fieldData))
					.digest("hex"),
				content: JSON.stringify(fieldData),
				description: "Blog Posts"
			}
		});
		createParentChildLink({ parent: fileNode, child: node });
	}
};
