# vue-cmd

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


本项目用了2套ui库  mint-ui   mui
`cnpm i mint-ui -S`

mui不能用npm下载，只在githup上拷贝
存储到本地


本项目做法步骤
1.搭建整体框架，匹配路由
  main.js  项目的入口文件，外部引入的插件放在此处
  app.vue  项目视图的入口文件，在此处搭建的是页面的公共区域。固定头部，固定底端
  components 项目的组件部分，由4个部分组成
  router.js  项目的路由文件，所有页面中用到的路由在此处搭建
  pages   项目的二级页面内容区域

2.ajax请求的数据
  这里采用的是axios获取数据，用法与jquery一致，
  this.$axios.get()  获取数据即可
  这是采用的是easy mock模拟的数据
  网址： https://www.easy-mock.com