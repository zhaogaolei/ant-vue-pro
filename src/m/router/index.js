import Vue from 'vue'
import Router from 'vue-router'
import { BlankLayout, TabLayout } from '../layouts'
import zmDevice from '../utils/native'

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
      component: zmDevice.isZmApp ? TabLayout : TabLayout, // 如果是app环境不显示tab
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
      path: '/productadd',
      name: 'mProductAdd',
      meta: {
        title: '添加商品'
      },
      component: () => import('../views/product/ProductAdd.vue')
    },
    {
      path: '/productbasic',
      name: 'mProductBasic',
      meta: {
        title: '选择或新增商品'
      },
      component: () => import('../views/product/BasicProduct.vue')
    },
    {
      path: '/productpic',
      name: 'mProductPic',
      meta: {
        title: '编辑图片'
      },
      component: () => import('../views/product/ProductPicture.vue')
    },
    {
      path: '/productaddress',
      name: 'mProductAddress',
      meta: {
        title: '添加地址'
      },
      component: () => import('../views/product/ProductAddress.vue')
    },
    {
      path: '/supply',
      name: 'mSupply',
      meta: {
        title: '供应商'
      },
      component: () => import('../views/supply/List.vue')
    },
    {
      path: '/supplyedit',
      name: 'mSupplyEdit',
      meta: {
        title: '编辑供应商'
      },
      component: () => import('../views/supply/Edit.vue')
    },
    {
      path: '/supplyview',
      name: 'mSupplyView',
      meta: {
        title: '查看供应商'
      },
      component: () => import('../views/supply/View.vue')
    },
    {
      path: '/productsku',
      name: 'mProductSku',
      meta: {
        title: '编辑规格'
      },
      component: () => import('../views/product/sku/Index.vue')
    },
    {
      path: '/my/about',
      name: 'mAbout',
      meta: { title: '关于我们' },
      component: () => import('../views/my/about/Index.vue')
    }
  ]
})
