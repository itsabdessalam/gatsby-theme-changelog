import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PostList from "../components/PostList";

const TagTemplate = ({
	data,
	pageContext: { locale, themeConfig, tagsPath }
}) => {
	return (
		<PostList
			posts={data.allBlogPost.edges}
			locale={locale}
			themeConfig={themeConfig}
			tagsPath={tagsPath}
		/>
	);
};

TagTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired
};

export default TagTemplate;

export const pageQuery = graphql`
	query($tag: String!) {
		allBlogPost(
			sort: { fields: [date], order: DESC }
			filter: { tags: { in: [$tag] }, draft: { eq: false } }
		) {
			edges {
				node {
					id
					excerpt
					author
					slug
					title
					tags
					date(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`;
