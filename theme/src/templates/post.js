import React from "react";
import { graphql } from "gatsby";
import Post from "../components/Post";

const PostTemplate = ({
	data,
	pageContext: { siteURL, locale, tagsPath, previous, next }
}) => {
	return (
		<Post
			data={data}
			siteURL={siteURL}
			locale={locale}
			previous={previous}
			next={next}
			tagsPath={tagsPath}
		/>
	);
};

export default PostTemplate;

export const pageQuery = graphql`
	query($id: String!) {
		blogPost(id: { eq: $id }) {
			id
			title
			date(formatString: "MMMM DD, YYYY")
			author
			slug
			excerpt
			body
			tags
		}
	}
`;
