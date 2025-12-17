const { resolve } = require("path");
const merge = require("webpack-merge");
const _args = require("yargs-parser")(process.argv.slice(2));
const _mode = _args.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);

const baseConfig = {
	entry: {
		main: resolve("src/index.tsx"),
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "swc-loader",
				},
			},
			{
				test: /\.css$/i,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "postcss-loader" },
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
};

module.exports = merge.default(baseConfig, _mergeConfig);
