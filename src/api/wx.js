import axios from './index'
const { api } = require('@/dev')

// 获取各种协议
export const authority = data => {
  return axios.post(`${api}/authority`, data)
}

// options
export const options = data => {
  return axios.post(`${api}/options`, data)
}

// getLocation
export const getLocation = data => {
  return axios.post(`${api}/getLocation`, data)
}

// 生成预订单
export const prepayWeixinOrder = data => {
  return axios.post(`${api}/prepayWeixinOrder`, data)
}

// weixinPaySaleOrder
export const weixinPaySaleOrder = data => {
  return axios.post(`${api}/weixinPaySaleOrder`, data)
}
