import axios from './index'
const { api } = require('@/dev')

export const orderReplenishment = data => {
  return axios.post(`${api}/orderReplenishment`, data)
}
