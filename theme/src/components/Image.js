import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const renderImage = value => {
	if (value) {
		const { node } = value;
		const { childImageSharp } = node;
		return <Img fluid={childImageSharp.fluid} />;
	}
	return <></>;
};

const Image = props => {
	const { file } = props;
	const { images } = useStaticQuery(
		graphql`
			query {
				images: allFile(
					filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
				) {
					edges {
						node {
							extension
							relativePath
							childImageSharp {
								fluid(maxWidth: 1000) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`
	);
	return renderImage(
		images.edges.find(image => image.node.relativePath === file)
	);
};
export default Image;
