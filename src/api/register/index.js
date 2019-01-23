import axios from '../index'
const { api } = require('@/dev')

export const getRegisterCode = data => {
  return axios.post(`${api}/getRegisterCode`, data)
}
export const userRegister = data => {
  return axios.post(`${api}/userRegister`, data)
}
