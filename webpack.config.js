// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const targets = [
	{
		target: 'browserslist:modern',
		output: {
			path: path.resolve(__dirname, 'dist/new'),
			filename: '[hash]-index.js',
		},
	},
	{
		target: 'browserslist:old',
		output: {
			path: path.resolve(__dirname, 'dist/old'),
			filename: '[hash]-index.js',
		},
	}
]

const config = {
    entry: './src/index.js',
	// entry: {
	// 	"brousers/new/index": ,
	// 	"brousers/old/index": './src/index.js',
	// },
	// output: {
	// 	path: path.resolve(__dirname, 'dist'),
	// 	filename: "[name].js"
	// },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());


        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
		// config.module.rules.push({
		// 	test: /\.(js|jsx)$/i,
		// 	exclude: /(node_modules|bower_components)/,
		// 	use: {
		// 		loader: 'babel-loader',
		// 		options: {
		// 			plugins: ["@babel/syntax-dynamic-import"],
		// 			presets: [
		// 				["@babel/preset-env", {
		// 					"useBuiltIns": "usage",
		// 					"targets": { "esmodules": true },
		// 					"modules": false
		// 				}],
		// 				"@babel/preset-react",
		// 			]
		// 		}
		// 	}
		// })
    return targets.map(target => ({...target, ...config}));
};
