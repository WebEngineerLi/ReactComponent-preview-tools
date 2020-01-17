const Config = require('webpack-chain');
const babelConfig = require('./babel-config');

module.exports.createCoreConfig = ({ entryFile, entryJS }) => {
	const config = new Config();
	config
		// 定义入口文件
		.entry('doc')
		.clear()
		.add(entryJS)
		.end()
		.resolve.extensions // config resolve.extensions
    .add('.tsx')
    .add('.ts')
    .add('.jsx')
    .add('.js')
    .add('.json')
    .end()
    .end()
		// 创建一个具名规则, 下面使用
		.module.rule('js') // config rule
		.test(/\.jsx?$/)
		.exclude
			.add(/node_modules/)
			.end()
		.loader('babel-loader')
		.options(babelConfig)
		.end()
		.resolve.alias.set('@entryFile', entryFile)
		.end()
	return config;
}