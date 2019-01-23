import axios from '../index'
const { api } = require('@/dev')

export const checkCode = data => {
  return axios.post(`${api}/checkCode`, data)
}

export const sevaPassword = data => {
  return axios.post(`${api}/sevaPassword`, data)
}

export const forgetPasswordCode = data => {
  return axios.post(`${api}/forgetPasswordCode`, data)
}
