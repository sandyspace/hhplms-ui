import Vue from 'vue'
import Router from 'vue-router'
// import Count from '@/components/count'
// import List from '@/components/list'
import HhwyHome from '@/components/HhwyHome'
import C1818Home from '@/components/C1818Home'
import CbgjHome from '@/components/CbgjHome'
import XmgkHome from '@/components/XmgkHome'

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
      path: '/1818',
      name: 'C1818Home',
      component: C1818Home,
      meta: {
        title: '1818中心'
      }
    },
    {
      path: '/cbgj',
      name: 'CbgjHome',
      component: CbgjHome,
      meta: {
        title: '船舶广场'
      }
    },
    {
      path: '/xmgk',
      name: 'XmgkHome',
      component: XmgkHome,
      meta: {
        title: '项目概况'
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
