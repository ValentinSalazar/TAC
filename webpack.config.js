const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // Configuracion del Loader de CSS
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // Configuracion del Loader de SASS
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },
              {
                  // Configuracion del Loader de HTML.
                test: /\.html$/i,
                loader: "html-loader",
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [ { loader: 'file-loader'}]
              }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    
    
}