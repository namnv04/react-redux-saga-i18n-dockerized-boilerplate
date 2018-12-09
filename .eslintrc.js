module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jest": true,
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"space-in-parens": ["error", "never"],
		"template-curly-spacing": ["error", "never"],
		"array-bracket-spacing": [ "error", "never" ],
		"object-curly-spacing": [ "error", "always" ],
		"eol-last": ["error", "always"],
		"computed-property-spacing": [ "error", "never" ],
		"no-trailing-spaces": "error",
		"no-multiple-empty-lines": "error",
		"no-console": "warn",
		"no-const-assign": "error",
		"no-this-before-super": "error",
		"no-undef": "warn",
		"no-unreachable": "warn",
		"no-unused-vars": "warn",
		"no-use-before-define": "error",
		"no-extra-semi": "error",
		"prefer-const": "error",
		"no-return-assign": "error",
		"no-param-reassign": "error",
		"constructor-super": "warn",
		"valid-typeof": "warn",
		"indent": ["error",2],
		"linebreak-style": ["error","unix"],
		"quotes": ["error","single"],
		"semi": ["error", "always"]
	}
};