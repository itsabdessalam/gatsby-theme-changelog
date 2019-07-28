module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended"
	],
	parserOptions: {
		ecmaVersion: 7,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		mocha: true,
		node: true
	},
	rules: {
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"arrow-body-style": ["error", "always"],
		radix: 0,
		"object-curly-spacing": ["error", "always", { arraysInObjects: true }],
		"no-shadow": [
			2,
			{
				hoist: "all",
				allow: [
					"resolve",
					"reject",
					"done",
					"next",
					"state",
					"dispatch",
					"^err"
				]
			}
		],
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}
		],
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "all",
				argsIgnorePattern:
					"res|^err|state|dispatch|reject|event|context"
			}
		],
		"no-param-reassign": [
			"error",
			{
				props: false
			}
		],
		"one-var-declaration-per-line": ["error", "initializations"],
		"prefer-const": [
			"error",
			{
				destructuring: "all"
			}
		],
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				printWidth: 80,
				useTabs: true,
				tabWidth: 4,
				bracketSpacing: true
			}
		],
		plugins: ["react"]
	}
};
