/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, useColorMode, useThemeUI } from "theme-ui";
import { hexToRgba } from "../utils/helpers";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
	const [colorMode, setColorMode] = useColorMode();
	const isActive = colorMode === "dark" ? "active" : "";
	const context = useThemeUI();
	const theme = context.theme;

	return (
		<button
			sx={{
				background: hexToRgba(theme.colors.primary, 0.2),
				"::after": {
					background: theme.colors.primary
				}
			}}
			aria-label="switch theme button"
			className={`${"button-switcher " + isActive}`}
			onClick={() => {
				setColorMode(colorMode === "light" ? "dark" : "light");
			}}
		></button>
	);
};

export default ThemeSwitcher;
