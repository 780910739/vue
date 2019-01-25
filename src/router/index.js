import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
/* 登陆注册模块 */
import login from '@/pages/login'
import loginByPassword from '@/pages/loginByPassword'
import wechatLogin from '@/pages/wechatLogin'
import register from '@/pages/register'
import forgetPasswordOne from '@/pages/forgetPasswordOne'
import forgetPasswordTwo from '@/pages/forgetPasswordTwo'
/* 新闻模块 */
import newsDetail from '@/pages/newsDetail'
import labelPage from '@/pages/labelPage'
/* 搜索模块 */
import search from '@/pages/search'
/* 我的模块 */
import changeUserInfor from '@/pages/changeUserInfor'
import noticeSetUp from '@/pages/noticeSetUp'
import userFriends from '@/pages/userFriends'
import userNoticeList from '@/pages/userNoticeList'
import userNews from '@/pages/userNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        module:'index'
      }
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        module:'login'
      }
    },
    {
      path: '/loginByPassword',
      name: 'loginByPassword',
      component: loginByPassword,
      meta:{
        module:'login'
      }
    },
    {
      path: '/wechatLogin',
      name: 'wechatLogin',
      component: wechatLogin,
      meta:{
        module:'login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        module:'login'
      }
    },
    {
      path: '/forgetPasswordOne',
      name: 'forgetPasswordOne',
      component: forgetPasswordOne,
      meta:{
        module:'login'
      }
    },
    {
      path: '/forgetPasswordTwo',
      name: 'forgetPasswordTwo',
      component: forgetPasswordTwo,
      meta:{
        module:'login'
      }
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
      meta:{
        module:'newsDetail'
      }
    },
    {
      path: '/labelPage',
      name: 'labelPage',
      component: labelPage,
      meta:{
        module:'index'
      }
    },
    {
      path: '/changeUserInfor',
      name: 'changeUserInfor',
      component: changeUserInfor,
      meta:{
        module:'user'
      }
    },
    {
      path: '/noticeSetUp',
      name: 'noticeSetUp',
      component: noticeSetUp,
      meta:{
        module:'user'
      }
    },
    {
      path: '/userFriends',
      name: 'userFriends',
      component: userFriends,
      meta:{
        module:'user'
      }
    },
    {
      path: '/userNoticeList',
      name: 'userNoticeList',
      component: userNoticeList,
      meta:{
        module:'user'
      }
    },
    {
      path: '/userNews',
      name: 'userNews',
      component: userNews,
      meta:{
        module:'user'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        module:''
      }
    },
    {
      path: '*',
      name: 'index',
      component: index,
    },
  ]
})
