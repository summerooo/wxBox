import axios from '../index'
const { api } = require('@/dev')

// 用户可用积分
export const shopPoint = data => {
  return axios.post(`${api}/shopPoint`, data)
}

// 盒子首页积分商城商品列表
export const shopList = data => {
  return axios.post(`${api}/shopList`, data)
}

// 商品详情（兑换）
export const shoppingDesc = data => {
  return axios.post(`${api}/shoppingDesc`, data)
}

// 兑换记录
export const shopExchangeRecords = data => {
  return axios.post(`${api}/shopExchangeRecords`, data)
}

// 填写兑换信息（兑换商品
export const shopInformation = data => {
  return axios.post(`${api}/shopInformation`, data)
}

// 获取积分信息
export const integral = data => {
  return axios.post(`${api}/integral`, data)
}

