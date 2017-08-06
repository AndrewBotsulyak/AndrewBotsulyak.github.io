const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
	entry:{
        main: "./src/main.ts"
    },
	output:{
		path: __dirname + "/dist/",
        filename: "[name].js"
        //chunkFilename: '[name].js'
	},

    devtool: 'inline-source-map',
    
    plugins: [
            new ExtractTextPlugin('bundle.css'),
            new CleanWebpackPlugin(['dist'], {    // вегда актуальные файлы в папке dist(неиспользуемые файлы удаляются)
               
            }),
            // new HtmlWebpackPlugin({
            //     template: 'index.html',
            //     chunk: ['main', 'bundle']
		    // }),
        ],

    resolve: {
		extensions: [".tsx", ".ts", ".js"]
    },

	module:{
		rules:[
            {
		        test: /\.tsx?$/,
		        use: 'ts-loader',
		        exclude: /node_modules/
		    },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({fallback: "style-loader", use:["css-loader", "sass-loader"]}),
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({fallback:"style-loader" , use:["css-loader" ,'autoprefixer-loader'] }),
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(jpe?g|png|gif|svg|jpg)$/i,
                //loader: 'file-loader?name=/images/[name].[ext]'
                loader: "url-loader?limit=1&name=./images/[name].[ext]"
            }
		]
	}
}