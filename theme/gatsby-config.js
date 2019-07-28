const readingTime = require("gatsby-remark-reading-time");

module.exports = options => {
	const { mdx = true } = options;

	return {
		siteMetadata: {
			url: "https://abdessalam.dev",
			title: "Blog Title Placeholder",
			logo: "logo-placeholder.png",
			author: "Name Placeholder",
			description: "Description placeholder",
			locale: "en",
			themeConfig: {
				themeSwitcher: true,
				loadMorePosts: false,
				postsPerPage: 10,
				postsIncrementBy: 5
			}
		},
		plugins: [
			mdx && {
				resolve: "gatsby-plugin-mdx",
				options: {
					extensions: [".mdx", ".md"],
					gatsbyRemarkPlugins: [
						{
							resolve: "gatsby-remark-autolink-headers",
							options: {
								offsetY: "100",
								icon:
									'<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill="currentColor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
								className: "anchor-header",
								maintainCase: false,
								removeAccents: true
							}
						},
						{
							resolve: "gatsby-remark-images",
							options: {}
						},
						{
							resolve: "gatsby-remark-prismjs",
							options: {
								inlineCodeMarker: "÷"
							}
						},
						{ resolve: "gatsby-remark-copy-linked-files" },
						{ resolve: "gatsby-remark-numbered-footnotes" },
						{ resolve: "gatsby-remark-smartypants" },
						{
							resolve: "gatsby-remark-reading-time"
						}
					],
					remarkPlugins: [require("remark-slug"), readingTime]
				}
			},
			{
				resolve: "gatsby-source-filesystem",
				options: {
					path: options.contentPath || "content/posts",
					name: options.contentPath || "content/posts"
				}
			},
			{
				resolve: "gatsby-source-filesystem",
				options: {
					path: options.assetPath || "content/assets",
					name: options.assetPath || "content/assets"
				}
			},
			"gatsby-transformer-sharp",
			"gatsby-plugin-sharp",
			"gatsby-plugin-react-helmet",
			"gatsby-plugin-emotion",
			"gatsby-plugin-theme-ui"
		].filter(Boolean)
	};
};
