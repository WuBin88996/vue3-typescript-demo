const path = require('path')

module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/css/vaiables.scss')]
    }
  }
}
