import PropTypes from "prop-types";
import React from "react";
import { Container } from "theme-ui";
import Nav from "./Nav";

const Header = ({ siteTitle, siteURL, siteLogo, themeConfig }) => {
	return (
		<header>
			<Container>
				<Nav
					themeConfig={themeConfig}
					title={siteTitle}
					url={siteURL}
					logo={siteLogo}
				/>
			</Container>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	siteURL: PropTypes.string,
	themeConfig: PropTypes.object
};

export default Header;
