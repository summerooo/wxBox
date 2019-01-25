import axios from '../index'
const { api } = require('../../dev')

// get info
export const receiveInfo = data => {
  return axios.post(`${api}/receiveInfo`, data)
}

// 省市区
export const area = data => {
  return axios.post(`${api}/area`, data)
}
// 学校列表
export const schoolList = data => {
  return axios.post(`${api}/schoolList`, data)
}
// 宿舍楼号
export const hostelList = data => {
  return axios.post(`${api}/hostelList`, data)
}

// 宿舍楼号 floorList
export const floorList = data => {
  return axios.post(`${api}/floorList`, data)
}

// 判断学校是否绑定运营商
export const isExistOperator = data => {
  return axios.post(`${api}/isExistOperator`, data)
}

// applyEnter  加入我们
export const applyEnter = data => {
  return axios.post(`${api}/applyEnter`, data)
}