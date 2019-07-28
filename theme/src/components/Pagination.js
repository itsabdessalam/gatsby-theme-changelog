/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import Link from "../components/Link";
import "./Pagination.css";

const Pagination = ({ previous, next }) => {
	return (
		<div className="pagination">
			{previous && (
				<div className="previous">
					<Styled.a
						sx={{ variant: "links.gray" }}
						as={Link}
						className="link"
						to={`${previous.node.slug}`}
					>
						<span className="pagination-title">
							← {previous.node.title}
						</span>
					</Styled.a>
				</div>
			)}
			{next && (
				<div className="next">
					<Styled.a
						sx={{ variant: "links.gray" }}
						as={Link}
						className="link"
						to={`${next.node.slug}`}
					>
						<span className="pagination-title">
							{next.node.title} →
						</span>
					</Styled.a>
				</div>
			)}
		</div>
	);
};

Pagination.propTypes = {
	previous: PropTypes.object,
	next: PropTypes.object
};

export default Pagination;
