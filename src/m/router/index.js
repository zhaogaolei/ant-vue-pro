import Vue from 'vue'
import Router from 'vue-router'
import { BlankLayout, TabLayout } from '../layouts'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/m',
      name: 'm',
      redirect: '/m/login',
      component: BlankLayout,
      children: [
        {
          path: '/m/login',
          name: 'mLogin',
          meta: { title: '登录' },
          component: () => import('../views/login/Index.vue')
        }
      ]
    },
    {
      path: '/m',
      name: 'm',
      component: TabLayout,
      children: [
        {
          path: '/m/product',
          name: 'mProduct',
          meta: {
            title: '商品管理'
          },
          component: () => import('../views/product/Index.vue')
        },
        {
          path: '/m/supply',
          name: 'mSupply',
          meta: {
            title: '供应商管理'
          },
          component: () => import('../views/supply/Index.vue')
        }
      ]
    }
  ]
})
