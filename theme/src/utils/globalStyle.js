import { importAll } from "./helpers";

importAll(require.context("../assets/", true, /\.css$/));

export const setGlobalStyle = style => {
	return `
    ::selection {
        background: ${style.colors.primary};
        color: #ffffff;
    }
    .gatsby-highlight-code-line {
        background-color: #ffffff;
        display: block;
        margin-right: -1.4125em;
        margin-left: -1.4125em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.5em solid ${style.colors.primary};
    }
    :not(pre) > code[class*="language-"] {
        color: ${style.colors.primary};
    }
    a.anchor-header{
        color: ${style.colors.primary};
    }`;
};
