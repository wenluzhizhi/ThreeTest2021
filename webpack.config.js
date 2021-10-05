const path = require('path');
const {resolve} = require('path');

module.exports = {
    entry: './src/index.ts',
    output:{
       filename:'[name].js',
       path: path.resolve(__dirname, './dist')
    },
    mode: "development",
    module :{
      unknownContextCritical : false,
    rules:[
        {
          test:/\.tsx?$/,
          use:'ts-loader',
          exclude:/node_modules/ //表示node_modules中的tsx文件不做处理
        }
      ]
    },
    devServer:{
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port:3000,              
    },
    resolve: {
      extensions: ['.ts', '.js'],
    }

}