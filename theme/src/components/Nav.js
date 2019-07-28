/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import Link from "../components/Link";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "../components/Image";

import "./Nav.css";

const Nav = ({ title, url, logo, themeConfig }) => {
	const { themeSwitcher } = themeConfig;
	return (
		<nav className="navbar">
			<div className="logo">
				<div className="logo-inner">
					<Link className="logo-img-link" to={"/"}>
						<Image className="logo-image" file={logo} />
					</Link>
					<Styled.h1>
						<span sx={{ color: "text" }} className="site-title">
							{title}
							<span className="site-subtitle">changelog</span>
						</span>
						<Link to={url} className="site-url">
							<small sx={{ color: "#c6cacc" }}>{url}</small>
						</Link>
					</Styled.h1>
				</div>
			</div>
			{themeSwitcher && <ThemeSwitcher></ThemeSwitcher>}
		</nav>
	);
};

Nav.propTypes = {
	links: PropTypes.array,
	title: PropTypes.string,
	themeConfig: PropTypes.object
};

Nav.defaultProps = { links: [], title: "Blog title" };

export default Nav;
