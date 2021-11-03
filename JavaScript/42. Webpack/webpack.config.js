'use strict';

let path = require('path');

module.exports = {            //! Обєкт настройки
  mode: 'development',        //! http://prntscr.com/1xlq3k5
  entry: './src/js/script.js', //! файл де прописані "завісімості"
  output: {
    filename: 'bundle.js',    //! назва кінцевого результат. файлу
    path: __dirname + 'dist/js'   //! адрес кінцевого файлу
  },
  watch: true,

  devtool: "source-map",      //! Зберігає вихідні файли

  module: {}
};
