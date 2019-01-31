let host = 'http://api.heliyou.com/userapi/v1/'

let nginx = false
nginx = true

// ----------------------------------------------------
let proxy = {
  '/api': {
    target: host,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }
}
// nginx 相对的配置

// location /api {
//   proxy_pass http://www.udao56.com/thinkphp5/index.php/tms;
// }

let proxyApi = {}
// Is your service nginx  和 npm run dev 都是代理方式
// 封装一个对象，如 {'api': '/api’}
for (let i in proxy) {
  proxyApi[i.replace(/\//, '')] = i
}
// build 后 无代理 放到指定服务目录下 无代理 所以不能用 /hot...
if (process.env.NODE_ENV === 'production') {
  if (!nginx) {
    for (let i in proxy) {
      proxyApi[i.replace(/\//, '')] = proxy[i].target
    }
  }
}
console.log(proxyApi, process.env.NODE_ENV)
module.exports = {
  proxy,
  ...proxyApi
}

// export default () => {
//   return {...proxyApi, proxy}
// }

