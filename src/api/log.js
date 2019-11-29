import { axios } from '@/utils/request'
import api from './index'

export function getOpLog (parameter) {
  return axios({
    url: api.getOpLog,
    method: 'get',
    params: parameter
  })
}
