import { hexToRgba } from "../utils/helpers";

const colors = {
	heading: "#3a3f46",
	text: "#3a3f46",
	background: "#ffffff",
	primary: "#663399",
	secondary: "#c4a5d8",
	lightGray: "#f8f9fb",
	gray: "#636d78"
};

export default {
	initialColorMode: "light",
	useCustomProperties: true,
	colors: {
		...colors,
		modes: {
			dark: {
				heading: "#ffffff",
				text: "#d3d4d4",
				background: "#130621",
				primary: colors.primary,
				secondary: "#f8f9fb",
				lightGray: hexToRgba(colors.lightGray, 0.1),
				gray: "#ffffff"
			}
		}
	},
	buttons: {
		primary: {
			color: "#ffffff",
			bg: "primary",
			fontSize: 0,
			borderRadius: "3px",
			border: "none",
			padding: "14px 24px 12px",
			margin: "10px auto",
			display: "block",
			cursor: "pointer"
		},
		secondary: {
			color: "primary",
			bg: hexToRgba(colors.primary, 0.2),
			fontSize: 0,
			borderRadius: "3px",
			border: "none",
			padding: "14px 24px 12px",
			margin: "10px auto",
			display: "block",
			cursor: "pointer"
		}
	},
	links: {
		primary: {
			color: "primary",
			"&:hover, &:focus": {
				color: "secondary"
			}
		},
		underlined: {
			color: "primary",
			"&:hover, &:focus": {
				textDecoration: "underline"
			}
		},
		gray: {
			color: "gray",
			"&:hover, &:focus": {
				color: "secondary"
			}
		}
	},
	fonts: {
		default:
			// eslint-disable-next-line prettier/prettier
			"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
	},
	fontSizes: [16, 18, 20, 24, 32, 40],
	fontWeights: {
		text: "400",
		heading: "600"
	},
	lineHeights: {
		text: "1.45",
		heading: "1.1"
	},
	sizes: {
		container: 800
	},
	styles: {
		Layout: {
			backgroundColor: "background",
			color: "text",
			fontFamily: "default",
			fontSize: 1,
			lineHeight: "text"
		},
		Main: {
			margin: "0 auto",
			width: "100%",
			maxWidth: "container",
			fontFamily: "default"
		},
		Container: {
			maxWidth: "container",
			fontFamily: "default",
			padding: 10
		},
		ul: {
			padding: "0 15px"
		},
		ol: {
			padding: "0 15px"
		},
		a: {
			textDecoration: "none",
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s",
			variant: "links.primary"
		},
		table: {
			width: "100%",
			color: "text",
			fontWeight: "text",
			"*, :after, :before": {
				border: "0 solid #e2e8f0"
			}
		},
		th: {
			fontWeight: "heading",
			backgroundColor: hexToRgba(colors.primary, 0.2),
			textAlign: "left",
			margin: 0,
			padding: "6px 13px"
		},
		tr: {
			backgroundColor: "background",
			margin: "0",
			padding: "0",
			"&:first-of-type": {
				marginTop: 0
			},
			"&:nth-of-type(2n)": {
				backgroundColor: "lightGray"
			},
			"&:last-child": {
				marginBottom: 0
			}
		},
		td: {
			textAlign: "left",
			margin: 0,
			padding: "6px 13px",
			"&:first-of-type": {
				marginTop: 0
			},
			"&:last-child": {
				marginBottom: 0
			}
		},
		em: {
			color: "gray",
			textAlign: "center",
			margin: "auto",
			display: "block"
		},
		h1: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 5,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		},
		h2: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 4,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		},
		h3: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 3,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		},
		h4: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 2,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		},
		h5: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 1,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		},
		h6: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 0,
			transition: "all 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s"
		}
	}
};
