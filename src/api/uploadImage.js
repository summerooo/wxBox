import axios from './index'
const onprogressConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
  onUploadProgress: progressEvent => console.log(progressEvent.loaded / progressEvent.total, progressEvent, 'cc')
}
export const saveFile = data => {
  return axios.post('/api/saveFile', data, onprogressConfig)
}
