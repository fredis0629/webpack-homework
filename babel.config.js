module.exports = {
	"plugins": ["@babel/syntax-dynamic-import"],
	"presets": [
		["@babel/preset-env", {
			"useBuiltIns": "usage",
			"targets": { "esmodules": true },
			"modules": false
		}],
		"@babel/preset-react",
	]
}
