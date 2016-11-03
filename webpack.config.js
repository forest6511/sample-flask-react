var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    devtool: 'inline-source-map',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './static/build.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
};