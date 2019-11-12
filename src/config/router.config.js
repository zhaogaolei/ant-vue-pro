// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [
  // pc 路由配置
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/index',
    children: [
      // 主页
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home/index'),
        meta: { title: '主页', icon: 'home' }
      },
      // 订单管理
      {
        path: '/product',
        name: 'product',
        redirect: '/product/index',
        component: RouteView,
        meta: { title: '商品管理', keepAlive: true, icon: 'profile' },
        children: [
          {
            path: '/product/index',
            name: 'ProductManage',
            component: () => import('../views/product/Index.vue'),
            meta: { title: '商品列表', keepAlive: false }
          }
        ]
      },
      // 系统设置
      {
        path: '/system',
        component: RouteView,
        redirect: '/system/basesetting',
        name: 'system',
        meta: { title: '系统设置', icon: 'setting', keepAlive: true },
        children: [
          {
            path: '/system/basesetting',
            name: 'basesetting',
            component: () => import('@/views/system/BaseSetting'),
            meta: { title: '基础设置', hideHeader: true }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
