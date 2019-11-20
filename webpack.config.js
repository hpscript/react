var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context:path.join(__dirname, "src"),
	entry: "./js/client.js",
	output: {
		path: __dirname + "/src/",
		filename: "client.min.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
	        	use: ['style-loader', 'css-loader'],
			},
			{
			test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}]
		}]
	},
	
	devServer: {
	        contentBase: __dirname + '/src',
	        host: "0.0.0.0"
	},
	plugins: debug ? [] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
	]
};
