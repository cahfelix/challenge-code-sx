const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: './app.js'
	},
	devServer: {
		port: 8080,
		open: true,
		contentBase: './public'
	},
	resolve: { // Quando for exportar, deve reconhecer todas as extensões abaixo
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules' // comando modules para acessar a pasta node_modules
        }
    },
	module: {
		loaders: [{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		},
		{
			test: /\.s(a|c)ss$/,
			include: [path.resolve(__dirname, 'src/scss')],
			loader: 'style-loader!css-loader!sass-loader'
		}
		],
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				  	{
				    	loader: 'file-loader',
				    	options: {}  
				  	}
				]
			}
		]
	}
}