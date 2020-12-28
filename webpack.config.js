const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

	 module: {
	 rules: [
	 	// css loader 
	   {
	     test: /\.css$/,
	     use: [
	       'style-loader',
	       'css-loader',
	     ],
	   },
	   // file loader
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
       //  font loader
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
       },
       //  loader data
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader',
         ],
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader',
         ],
       },
	 ],
	},
};