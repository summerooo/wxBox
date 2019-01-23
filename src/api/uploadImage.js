import axios from './index'
import store from '../store'

const api = require('../dev').api

const onprogressConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
  onUploadProgress: progressEvent => {
    store.state.upload = (progressEvent.loaded / progressEvent.total).toFixed(2)*100
    // console.log(store.state.upload)
    console.log(progressEvent.loaded / progressEvent.total, progressEvent, 'cc')
  }
}
export const saveFile = data => {
  return axios.post(`${api}/saveFile`, data, onprogressConfig)
}
