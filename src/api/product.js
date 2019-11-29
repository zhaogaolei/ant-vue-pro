import { axios } from '@/utils/request'
import api from './index'

export function getProductList (parameter) {
  return axios({
    url: api.getProductList,
    method: 'get',
    params: parameter
  })
}

export function getProductType (parameter) {
  return axios({
    url: api.getProductType,
    method: 'get',
    params: parameter
  })
}

export function getSkuType (parameter) {
  return axios({
    url: api.getSkuType,
    method: 'get',
    params: parameter
  })
}

export function getBasicProductList (parameter) {
  return axios({
    url: api.getBasicProductList,
    method: 'get',
    params: parameter
  })
}

export function getBasicProductById (parameter) {
  return axios({
    url: api.getBasicProductById,
    method: 'get',
    params: parameter
  })
}

export function getProductById (parameter) {
  return axios({
    url: api.getProductById,
    method: 'get',
    params: parameter
  })
}

export function getProductSkuList (parameter) {
  return axios({
    url: api.getProductSkuList,
    method: 'get',
    params: parameter
  })
}
/**
 * id == 0 add     post
 * id != 0 update  put
 * @param {*} parameter
 */
export function updateProduct (parameter) {
  return axios({
    url: api.updateProduct,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function deleteProduct (parameter) {
  return axios({
    url: api.deleteProduct,
    method: 'delete',
    data: parameter
  })
}

export function arraignedProduct (parameter) {
  return axios({
    url: api.arraignedProduct,
    method: 'put',
    data: parameter
  })
}

export function withdrawProduct (parameter) {
  return axios({
    url: api.withdrawProduct,
    method: 'put',
    data: parameter
  })
}
