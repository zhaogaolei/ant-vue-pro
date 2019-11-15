import Vue from 'vue'
import Router from 'vue-router'
import { BlankLayout, TabLayout } from '../layouts'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'mLogin',
      meta: { title: '登录' },
      component: () => import('../views/login/Index.vue')
    },
    {
      path: '/',
      name: 'm',
      redirect: '/home',
      component: TabLayout,
      children: [
        {
          path: '/home',
          name: 'mHome',
          meta: {
            title: '主页'
          },
          component: () => import('../views/home/Index.vue')
        },
        {
          path: '/my',
          name: 'mMy',
          meta: {
            title: '我的'
          },
          component: () => import('../views/my/Index.vue')
        }
      ]
    },
    {
      path: '/product',
      name: 'mProduct',
      meta: {
        title: '商品管理'
      },
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/supply',
      name: 'mSupply',
      meta: {
        title: '供应商管理'
      },
      component: () => import('../views/supply/Index.vue')
    },
    {
      path: '/my/about',
      name: 'mAbout',
      meta: { title: '关于我们' },
      component: () => import('../views/my/about/Index.vue')
    }
  ]
})
