const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join, resolve } = require("path");
module.exports = {
	devServer: {
		static: {
			directory: join(__dirname, "../dist"),
		},
		hot: true,
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			favicon: "./public/logo.png",
			template: resolve(__dirname, "../public/index-dev.html"),
		}),
	],
};
