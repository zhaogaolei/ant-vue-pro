import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/mobile',
      name: 'mobile',
      redirect: '/mobile/product',
      component: () => import('../views/home/Index.vue'),
      children: [
        {
          path: '/mobile/product',
          name: 'mobileProduct',
          component: () => import('../views/product/Index.vue')
        },
        {
          path: '/mobile/supply',
          name: 'mobileSupply',
          component: () => import('../views/supply/Index.vue')
        }
      ]
    }
  ]
})
