import Vue from 'vue'
import Router from 'vue-router'

// 导入的组件页面
import home from '@/components/home'
import member from '@/components/member'
import shopcar from '@/components/shopcar'
import search from '@/components/search'

import newlist from '@/pages/homepage/newlist'
import newDetail from '@/pages/homepage/newDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    {
      path: '/member',
      component: member
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/home/newlist',
      component: newlist
    },
    {
      path: '/home/newDetail/:id',
      component: newDetail
    }
  ],
  linkActiveClass: 'mui-active'
})
