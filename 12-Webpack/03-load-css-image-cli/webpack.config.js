// 导出配置
const path = require('path');

module.exports = {
	// 通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
	mode:'development',
	// 指定文件入口
	entry:'./src/index.js',
	// 指定出口
	output:{
		// 出口文件名称
		// filename:'main.js',
		filename:'bundle.js',
		// 出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},

	// 配置
	module:{
		rules:[
		//处理css文件文档的loader
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},

			// 处理图片loader
			{
		        test:/\.(png|jpg|gif)$/,
		        use:[
		          'url-loader'
		        ]
		    }
		]
	}
}