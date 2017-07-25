module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
}
