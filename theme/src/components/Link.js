import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
	const internal = /^\/(?!\/)/.test(to);
	if (internal) {
		return (
			<GatsbyLink
				to={to}
				activeClassName={activeClassName}
				partiallyActive={partiallyActive}
				{...props}
			>
				{children}
			</GatsbyLink>
		);
	}
	return (
		<a href={to} {...props}>
			{children}
		</a>
	);
};
export default Link;
