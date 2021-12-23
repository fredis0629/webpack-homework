const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  "plugins": ["@babel/syntax-dynamic-import"],
  "presets": [
		["@babel/preset-env", {
			"useBuiltIns": "usage",
			"targets": { "esmodules": isProduction },
			"modules": false
		}],
		"@babel/preset-react",
  ]
}
