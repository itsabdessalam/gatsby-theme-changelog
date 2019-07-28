# Simple blog - Gatsby Theme

> Ready to be used blogging theme

## ✨ Features

-   Theme UI for styling
-   PrismJS highlighting
-   Gatsby Image
-   Posts in MDX
-   Tags
-   Static pages for non post types
-   SEO friendly
-   Fully customizable through `gatsby-config.js`, `gatsby-plugin-theme-ui` and **shadow components**
-   Linting with ESLint and Stylelint
-   Code formatting with Prettier

## 🚀 Installation

To use this theme in your Gatsby sites, follow these instructions:

1. Install the theme

    ```sh
    # npm
    npm install --save gatsby-theme-simple-blog
    # yarn
    yarn add gatsby-theme-simple-blog
    ```

2. Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
    	plugins: ["gatsby-theme-simple-blog"]
    };
    ```

3. Start your site

    ```sh
    gatsby develop
    ```

## ⚙ Configuration

```javascript
module.exports = {
	plugins: [
		{
			resolve: "gatsby-theme-simple-blog",
			options: {
				basePath: "", // base url "/"
				tagsPath: "", // tags url "/tags"
				contentPath: "", // content url for posts"/content/posts"
				assetPath: "" //  assets url "/content/assets"
			}
		}
	],
	siteMetadata: {
		url: "https://abdessalam.dev",
		title: "Simple blog",
		author: "Abdessalam",
		description: "Simple blog theme starter",
		locale: "en",
		socialLinks: [
			// links displayed in footer
			{
				text: "Twitter",
				link: "https://twitter.com/gatsbyjs"
			},
			{
				text: "GitHub",
				link: "https://github.com/gatsbyjs"
			}
		],
		navLinks: [
			// links display in navbar
			{
				text: "Home",
				link: "/"
			},
			{
				text: "About",
				link: "/about"
			},
			{
				text: "Contact",
				link: "/contact"
			}
		],
		themeConfig: {
			themeSwitcher: true, // enable theme switcher
			showNavLinks: true, // show links from navLinks array in navbar
			loadMorePosts: false, // enable load more posts
			postsPerPage: 10, // posts to display per page
			postsIncrementBy: 5 // posts increment value
		}
	}
};
```

## 💅 Customization

You can override theme components using [Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

1. Create a folder with theme name `gatsby-theme-simple-blog`

2. Override any component you want by creating a new one and its css file, for example `Nav.js` and `Nav.css`

3. You can also override [theme-ui](https://theme-ui.com/getting-started) theme style by creating `gatsby-plugin-theme-ui` folder and new object style or components

4. You can also override or add new global css styles in assets as they are imported in `globalStyle.js`

## 🧐 What's inside?

```
.
├── node_modules
├── src
|   ├── assets
|   ├── components
|   |   ├── Layout.js
|   |   ├── Layout.css
|   |   ├── ...
|   |   └── SEO.js
|   ├── gatsby-plugin-theme-ui
|   ├──templates
|   |   ├── page.js
|   |   ├── posts.js
|   |   ├── post.js
|   |   └── tag.js
|   └── utils
|        ├── globalStyle.js
|        └── helpers.js
├── .gitignore
├── .prettierrc.js
├── .eslintrc.js
├── .stylelintrc.config.js
├── package.json
├── README.md
└── LICENSE
```

## 👨🏻‍💻👩‍💻 Contributing

Contributions, issues and feature requests are welcome !

## Demo

[Live demo](https://gatsby-demo-simple-blog.netlify.com/)

**Hompage**
![preview](../preview/homepage.png)

**Single post**
![preview](../preview/post.png)

**Single page**
![preview](../preview/page.png)

## Author

[Abdessalam BENHARIRA](https://abdessalam.dev)
