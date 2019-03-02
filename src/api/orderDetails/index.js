import axios from '../index'
const { api } = require('@/dev')

export const saleOrderDetail = data => {
  return axios.post(`${api}/saleOrderDetail`, data)
}
