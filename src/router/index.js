import Vue from 'vue'
import Router from 'vue-router'
// import Count from '@/components/count'
// import List from '@/components/list'
import HhwyHome from '@/components/HhwyHome'
import C1818Home from '@/components/C1818Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HhwyHome,
      meta: {
        title: '海桦物业'
      }
    },
    {
      path: '/hhwy',
      name: 'hhwyHome',
      component: HhwyHome,
      meta: {
        title: '海桦物业'
      }
    },
    {
      path: '/C1818',
      name: 'C1818Home',
      component: C1818Home,
      meta: {
        title: '1818中心'
      }
    }
    /*,
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/list',
      name: 'List',
      component: List
    } */
  ]
})
