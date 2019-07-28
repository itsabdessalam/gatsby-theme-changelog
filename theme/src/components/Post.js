import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "../components/Link";
import Pagination from "../components/Pagination";
import { slugify, formatDate } from "../utils/helpers";
import "./Post.css";

const Post = ({ data, siteURL, locale, tagsPath, next, previous }) => {
	const post = data.blogPost;

	return (
		<Layout cssClass="single-post blog-style">
			<SEO
				lang={locale}
				title={post.title}
				description={post.excerpt.substring(0, 250)}
			/>
			<div className="main-content">
				<div className="post-container">
					<Styled.h1
						className="post-title"
						dangerouslySetInnerHTML={{ __html: post.title }}
					/>
					<div className="post-meta">
						<div className="post-meta-inner">
							<div>
								<span className="post-date">
									{formatDate(post.date, locale)}
								</span>
							</div>
						</div>
					</div>
					<div className="post-tags">
						{post.tags.map((tag, index) => {
							return (
								<Link
									to={`${tagsPath}/${slugify(tag)}`}
									key={index.toString()}
								>
									{tag}
								</Link>
							);
						})}
					</div>
					<div className="post-content">
						<MDXRenderer>{post.body}</MDXRenderer>
					</div>
					<Pagination next={next} previous={previous} />
				</div>
			</div>
		</Layout>
	);
};

Post.propTypes = {
	data: PropTypes.object.isRequired,
	siteURL: PropTypes.string.isRequired,
	locale: PropTypes.string,
	tagsPath: PropTypes.string.isRequired,
	previous: PropTypes.object,
	next: PropTypes.object
};

export default Post;
