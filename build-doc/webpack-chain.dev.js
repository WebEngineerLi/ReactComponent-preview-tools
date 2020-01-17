var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const createCoreConfig = require('./webpack-chain.core').createCoreConfig

module.exports.createConfig = ({ entryFile }) =>
  createCoreConfig({
    entryFile,
    entryJS: path.resolve(__dirname, 'dev-index.jsx'),
	})
	.mode('development') // 模式
	.end()
	.end()
	// add HtmlWebpackPlugin
	.plugin('HtmlWebpackPlugin')
	.use(HtmlWebpackPlugin, [
		{
			template: path.resolve(__dirname, 'index.html'),
		},
	])
	.end()
