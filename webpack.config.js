module.exports = {
	entry:"./src/enter.js",
	output:{
		path:__dirname,
		filename:"./bin/bundle.js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style-loader!css-loader"}
			// { test: /\.css$/, loader: "style-loader!css-loader" }
		]
	}
};