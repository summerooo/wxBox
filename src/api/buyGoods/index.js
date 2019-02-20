import axios from '../index'
const { api } = require('../../dev')

// 分类列表
export const WeixinOrderScan = data => {
  return axios.post(`${api}/WeixinOrderScan`, data)
}

// 分类商品
export const WeixinOrderScanList = data => {
  return axios.post(`${api}/WeixinOrderScanList`, data)
}

// getBoxHandlingFee  盒子补货页tips金额
export const getBoxHandlingFee = data => {
  return axios.post(`${api}/getBoxHandlingFee`, data)
}


// orderSearchGoodsLog 搜索页历史记录
export const orderWeixinSearchGoodsLog = data => {
  return axios.post(`${api}/orderWeixinSearchGoodsLog`, data)
}

// 搜索 热搜
export const orderWeixinSearchGoodsHot = data => {
  return axios.post(`${api}/orderWeixinSearchGoodsHot`, data)
}

// 删除搜索历史记录
export const orderWeixinSearchLogDelete = data => {
  return axios.post(`${api}/orderWeixinSearchLogDelete`, data)
}

// 搜索
export const weixinOrderSerach = data => {
  return axios.post(`${api}/weixinOrderSerach`, data)
}