// 用户模块
const user = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info'
}
// 商品模块
const product = {
  getProductList: '/api/coupon/simple/all', // 获取商品列表
  getProductType: '/api/product/category/all', // 获取商品品类列表
  getSkuType: '/api/product/category/playtag', // 获取商品规格类型列表
  getBasicProductList: '/api/product/commodity', // 获取基础商品列表
  getBasicProductById: '/api/product/commodity/{id}', // 获取基础商品信息
  getProductById: '/api/coupon/simple/{id}', // 获取商品信息
  updateProduct: '/api/coupon/simple/{id}', // 更新商品
  addProduct: '/api/coupon/simple', // 创建商品
  deleteProduct: '/api/coupon/simple', // 创建商品
  getProductSkuList: '/api/coupon/simple/sku/copylist', // 获取商品的规格列表
  arraignedProduct: '/api/coupon/simple/arraigned', // 提审商品
  withdrawProduct: '/api/coupon/simple/withdraw' // 撤回商品
}
// 日志模块
const log = {
  getOpLog: '/api/log/bizoplog/all' // 获取操作日志列表
}
export default {
  ...user,
  ...product,
  ...log
}
