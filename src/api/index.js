import axios from 'axios'
// import Qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 100000

axios.interceptors.request.use(
  config => {
    // if (config.method === 'post') {
    //   config.data = Qs.stringify(config.data)
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    console.log(response)
    // 返回码200请求成功 201签名错误 202签名不存在 400 接口访问错误
    let res = null
    if (response.data) {
      switch (response.data.return_code) {
        case 200:
          res = response
          console.log('200')
          break
        default:
          res = false
          console.log('201签名错误 202签名不存在 400 接口访问错误')
          break
      }
    }
    return res
  },
  err => {
    if (err.response) {
      switch (err.response.status) {
        case 500:
          console.log('怎么又500了')
          break
        case 404:
          console.log('啥玩意又找不到了')
          break
        default:
          console.log('服务器开小差了')
          break
      }
    }
    return false
  }
)
export default axios
