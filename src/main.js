// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import 'mint-ui/lib/style.css'

// 引入全部mint-ui组件
Vue.use(Mint)
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

let currentHost = window.location.host

let currentRootUrl = 'https://whhczy.cn'
if (currentHost === 'test.whhczy.cn') {
  currentRootUrl = 'http://test.whhczy.cn'
}

// todo 暂时使用的是服务器
currentRootUrl = 'http://test.whhczy.cn'

console.log(currentRootUrl)
Vue.prototype.G = {
  baseURL: currentRootUrl,
  tokenKey: 'access_token'
}
// 为了让所有的子组件可以使用axios, 将vue的原型属性$http设置为axios
Vue.prototype.$http = axios.create({
  baseURL: currentRootUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 全局注册通用基础自定义组件
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  './components',
  // Do not look in subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 创建根Vue实例
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
