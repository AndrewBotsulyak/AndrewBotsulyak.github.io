let webpack = require('webpack');

module.exports = {
	entry:"./src/main.js",
	output:{
		path:__dirname + "/dist/build/",
		publicPath: "dist/build",
		filename: "bundle.js"
	},

	watch:true,
    plugins: [
            new webpack.ProvidePlugin({
                "window.$": "jquery",
                "window.jQuery": "jquery",
            })
        ],
	module:{
		rules:[
			{
                test: /\.(js|jsx)$/,
			    exclude: [/node_modules/, /dist/],
			    loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use:["style-loader","css-loader","sass-loader"],
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ,'autoprefixer-loader'],
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                 test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?limit=10000&mimetype=image/png&name=/images/[hash].[ext]"
            },
            {
              test: /\.html$/,
              loader: 'html-loader?attrs[]=video:src'
            }, {
              test: /\.mp4$/,
              loader: 'url?limit=10000&mimetype=video/mp4'
            }
		]
	}
}