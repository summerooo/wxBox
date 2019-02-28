import axios from '../index'
const { api } = require('@/dev')

// 问题标题
export const questionList = data => {
  return axios.post(`${api}/questionList`, data)
}
// 问题答案
export const questionAnswer = data => {
  return axios.post(`${api}/questionAnswer`, data)
}
