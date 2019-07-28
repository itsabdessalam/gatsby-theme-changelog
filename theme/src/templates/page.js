import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Page from "../components/Page";

const PageTemplate = ({ data, pageContext: { siteURL, locale, tagsPath } }) => {
	return (
		<Page
			data={data}
			locale={locale}
			siteURL={siteURL}
			tagsPath={tagsPath}
		/>
	);
};

PageTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired
};

export default PageTemplate;

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
		}
	}
`;
