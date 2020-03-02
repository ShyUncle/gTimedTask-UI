import request from '@/utils/request'

export function getList (params) {
  return request({
    url: '/job/query',
    method: 'get',
    params
  })
}
