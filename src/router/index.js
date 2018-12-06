import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/count'
import List from '@/components/list'
import HhwyHome from '@/components/HhwyHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HhwyHome
    },
    {
      path: '/hhwy',
      name: 'hhwyHome',
      component: HhwyHome
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
