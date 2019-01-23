import axios from '../index'
const { api } = require('@/dev')

export const userLogin = data => {
  return axios.post(`${api}/userLogin`, data)
}
