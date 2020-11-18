// const env = process.env.NODE_ENV
const path = require('path')

module.exports = {
  assetsDir: 'assets/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/css/vaiables.scss')]
    }
  },
  devServer: {
    port: 8090, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  }

}
