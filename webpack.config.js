const { resolve } = require("path");
module.exports = {
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
