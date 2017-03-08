var path = require('path');
module.exports = {
  // 这是一个主文件包括其他模块
  entry: './src/eleme.js',
  // 编译的文件路径
  output: {
      //`dist`文件夹
    path: path.join(__dirname, './dist'),
    // 文件 `build.js` 即 dist/build.js
    filename: 'build.js',
    //[name]这里是webpack提供的根据路口文件自动生成的名字
  },
  module: {
    // 一些特定的编译规则
    loaders: [
      {
        // 让webpack去验证文件是否是.js结尾将其转换
        test: /\.js$/,
        // 通过babel转换
        loader: 'babel-loader',
        // 不用转换的node_modules文件夹
        exclude: /node_modules/
      },
      {  
        test: /\.vue$/,   
        exclude: /node_modules/,  
        loader: 'vue-loader'  
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
    
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}