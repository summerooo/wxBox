import axios from '../index'
const { api } = require('../../dev')

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
