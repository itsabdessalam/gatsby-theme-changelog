/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, Styled, Container } from "theme-ui";
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
					© {new Date().getFullYear()}, Built with
					<Styled.a
						sx={{ variant: "links.primary", marginLeft: "5px" }}
						href="https://www.gatsbyjs.org"
					>
						Gatsby
					</Styled.a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
