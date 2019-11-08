// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/newpage',
    children: [
      // 新增页面
      {
        path: '/newpage',
        name: 'newpage',
        component: () => import('@/views/newPage/NewPage'),
        meta: { title: '新增页面', icon: 'profile' }
      },
      // 订单管理
      {
        path: '/order',
        name: 'order',
        redirect: '/order/manage',
        component: RouteView,
        meta: { title: '订单管理', keepAlive: true, icon: 'profile' },
        children: [
          {
            path: '/order/manage',
            name: 'OrderManage',
            component: () => import('../views/order/OrderManage.vue'),
            meta: { title: '订单列表', keepAlive: false }
          }
        ]
      },

      // address
      {
        path: '/address',
        name: 'address',
        component: PageView,
        redirect: '/address/table-list',
        meta: { title: '地址管理', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/address/table-list/:pageNo([1-9]\\d*)?',
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/address/TableList'),
            meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/address/basic-list',
            name: 'BasicList',
            component: () => import('@/views/address/StandardList'),
            meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/address/card',
            name: 'CardList',
            component: () => import('@/views/address/CardList'),
            meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
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
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
