/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, Container } from "theme-ui";
import "./Footer.css";

const Footer = ({ socialLinks }) => {
	return (
		<footer className="footer">
			<Container className="footer-inner">
				<div
					className="copyright"
					sx={{
						color: "gray"
					}}
				>
					© 2019, Built with Gatsby
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
