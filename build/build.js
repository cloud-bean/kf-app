// https://github.com/shelljs/shelljs
require('shelljs/global')
require('dotenv').config()
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var client = require('scp2')

var clientOption = {
  host: process.env.TINY_SERVER_HOST,
  path: process.env.TINY_SERVER_PATH,
};

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n');
    // client.scp('./dist/', clientOption, function(err) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('Finished, deploy complete!')
    //     }
    // });
})
