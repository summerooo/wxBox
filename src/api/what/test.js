import axios from '../index'
const onprogressConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
  onUploadProgress: progressEvent => console.log(progressEvent.loaded / progressEvent.total, progressEvent, 'cc')
}
export const test = data => {
  return axios.get('/app/7lxb0', data, onprogressConfig)
}
