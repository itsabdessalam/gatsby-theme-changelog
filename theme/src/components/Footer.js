/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, Container } from "theme-ui";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<Container className="footer-inner">
				<div
					className="copyright"
					sx={{
						color: "gray"
					}}
				>
					© {new Date().getFullYear()}, Built with{" "}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
