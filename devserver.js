var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true
})
server.listen(3000)
