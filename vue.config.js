//配置在此处修改。
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: "./",
  configureWebpack:config => { //gizp压缩
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
          test:/\.js$|\.html$|.css/,   //匹配文件名
          threshold:10240,  //超出10KB才进行压缩
          deleteOriginalAssets:false //不删除源文件
          })
        ]
      }
    }
  }
}
