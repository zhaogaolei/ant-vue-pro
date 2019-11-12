import Vue from 'vue'
import Router from 'vue-router'
import { BlankLayout, TabLayout } from '../layouts'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          component: () => import('../views/product/Index.vue')
        },
        {
          path: '/m/supply',
          name: 'mSupply',
          component: () => import('../views/supply/Index.vue')
        }
      ]
    }
  ]
})
