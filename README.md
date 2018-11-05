# hhplms-ui

> Frontend project for HaiHua Property Leasing Management System

## Build Setup

``` bash
## install dependencies
npm install

## serve with hot reload at localhost:8080
npm run dev

## build for production with minification
npm run build

## build for production and view the bundle analyzer report
npm run build --report

## run unit tests
npm run unit

## run all tests
npm test
```

## 使用 JSON Server 搭建 Mock 服务器
1. npm install -g json-server
2. 项目目录下创建 mock 文件夹，并在改文件夹下添加 db.json 文件
3. 在package.json中添加命令 "mock": "json-server --watch mock/db.json"
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
