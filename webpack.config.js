const path = require("path");

module.exports = {
  mode: 'development',
	entry: "./src/index.js",
	output: {
    library: 'IHE',
    libraryTarget: 'umd',
		path: path.resolve(__dirname, "dist"),
		filename: "import-html-entry.js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
