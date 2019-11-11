// 移动路由配置
const mRouterMap = {
  // path: '/m',
  // component: MobileView,
  // redirect: '/m/product',
  // children: [
  // {
  path: '/m/index',
  name: 'mIndex',
  redirect: '/m/product',
  component: () => import('@/viewsm/home/Index'),
  children: [
    {
      path: '/m/product',
      name: 'mProduct',
      component: () => import('@/viewsm/product/Index')
    },
    {
      path: '/m/supply',
      name: 'mSupply',
      component: () => import('@/viewsm/supply/Index')
    }
    // ]
    // }
    // {
    //   path: '/m/product',
    //   name: 'mProduct',
    //   component: () => import('@/viewsm/product/Index')
    // }
  ]
}

export default mRouterMap
