const { resolve } = require("path");
const merge = require("webpack-merge")
const _args = require("yargs-parser")(process.argv.slice(2));
const _mode = _args.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.config`);

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
		],
	},
};

module.exports = merge.default(baseConfig);
