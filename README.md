# react-calendarの環境構築
React.jsの環境構築

###  webpack, babel, reactのインストール
$ npm init<br>
$ npm install --save-dev webpack webpack-cli webpack-dev-server<br>
$ sudo npm install -g webpack webpack-cli<br>
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader<br>
$ npm install --save-dev react react-dom

### View(HTML)の編集
/src/index.html

### Componentの編集
/src/js/client.js

### @babel/plugin-proposal-class-properties追加
$ npm install --save-dev @babel/plugin-proposal-class-properties<br>
$ npm install --save-dev css-loader<br>
$ npm install --save-dev style-loader

### webpack-dev-server起動
$ npm start
