import Vue from 'vue'
import Router from 'vue-router'
// import Count from '@/components/count'
// import List from '@/components/list'
import Index from '@/components/Index'
import HhwyHome from '@/components/HhwyHome'
import C1818Home from '@/components/C1818Home'
import CbgjHome from '@/components/CbgjHome'
import XmgkHome from '@/components/XmgkHome'
import Login from '@/components/Login'
import UserHome from '@/components/UserHome'
import Register from '@/components/Register'
import Modify from '@/components/Modify'
import ContactUs from '@/components/ContactUs'
import Feedback from '@/components/Feedback'
import ActivityList from '@/components/ActivityList'
import JoinCompany from '@/components/JoinCompany'
import UploadCompanyInfo from '@/components/UploadCompanyInfo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '索引页'
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
        title: '船舶国际广场'
      }
    },
    {
      path: '/xmgk',
      name: 'XmgkHome',
      component: XmgkHome,
      meta: {
        title: '项目概况'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '账号注册'
      }
    },
    {
      path: '/modify',
      name: 'Modify',
      component: Modify,
      meta: {
        title: '密码修改'
      }
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
      meta: {
        title: '问题留言'
      }
    },
    {
      path: '/activitys',
      name: 'ActivityList',
      component: ActivityList,
      meta: {
        title: '商户资讯'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '账号登录'
      }
    },
    {
      path: '/user',
      name: 'UserHome',
      component: UserHome,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/joinCompany',
      name: 'JoinCompany',
      component: JoinCompany,
      meta: {
        title: '加入企业'
      }
    },
    {
      path: '/uploadCompanyInfo',
      name: 'UploadCompanyInfo',
      component: UploadCompanyInfo,
      meta: {
        title: '上传企业信息'
      }
    },
    {
      path: '/binding',
      name: 'Binding',
      component: () => import('@/components/Binding'),
      meta: {
        title: '绑定手机号'
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
