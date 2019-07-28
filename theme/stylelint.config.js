module.exports = {
	extends: "stylelint-config-recommended",
	ignoreFiles: ["**/*.js", "**/*.html"],
	rules: {
		indentation: "tab",
		"string-quotes": "double",
		"no-duplicate-selectors": true,
		"color-hex-case": "lower",
		"color-hex-length": "long",
		"color-named": "never",
		"selector-combinator-space-after": "always",
		"selector-attribute-quotes": "always",
		"selector-attribute-brackets-space-inside": "never",
		"declaration-colon-space-before": "never",
		"declaration-colon-space-after": "always",
		"number-leading-zero": "always",
		"function-url-quotes": "always",
		"font-family-name-quotes": "always-unless-keyword",
		"comment-whitespace-inside": "always",
		"comment-empty-line-before": "always",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-class-parentheses-space-inside": "never",
		"media-feature-range-operator-space-before": "always",
		"media-feature-range-operator-space-after": "always",
		"media-feature-parentheses-space-inside": "never",
		"media-feature-colon-space-before": "never",
		"media-feature-colon-space-after": "always"
	}
};
