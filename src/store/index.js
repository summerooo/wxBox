import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: '',
    APP_ID: '4q4gptfjxmgg3y9h',
    ENCSTR: 'y77nzwrmhj2in9xm',
    user: {},
    upload: '',
    school: '',
    dormitory: '',
    // 选商品前的数据
    beforeInfo: null,
    box_no: ''
  },
  mutations: {
    setPhone (state, data) {
      state.phone = data
    },
    setUser (state, data) {
      state.user = data
      sessionStorage.setItem('user', JSON.stringify(data))
    },
    setBoxNo (state, data) {
      console.log('!!!!!!!!', 'data', data)
      state.box_no = data
    },
    getUser (state) {
      state.user = JSON.parse(sessionStorage.getItem('user'))
    },
    setUpload (state, data) {
      state.upload = data
    },
    setSchool (state, data) {
      state.school = data
    },
    setDormitory (state, data) {
      state.dormitory = data
    },
    setBeforeInfo (state, data) {
      state.beforeInfo = data
      sessionStorage.setItem('beforeInfo', JSON.stringify(data))
    },
    getBeforeInfo (state) {
      state.beforeInfo = JSON.parse(sessionStorage.getItem('beforeInfo'))
    },
    wxAuthority (state, data = '') {
      console.log(state, data)
      // let host = location.hostname
      // let prot = location.protocol
      // let redirectUrl = `${prot}//${host}/${data}`
      let redirectUrl = location.href
      location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15d558c01d3cab99&redirect_uri=' + redirectUrl + '&response_type=code&scope=snsapi_userinfo#wechat_redirect'
    },
    closeWindow () {
      // eslint-disable-next-line
      if(typeof(WeixinJSBridge) != 'undefined'){
      // eslint-disable-next-line
        WeixinJSBridge.call('closeWindow')
      } else {
        if (navigator.userAgent.indexOf('MSIE') > 0) {
          if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
            window.opener = null; window.close()
          } else {
            window.open('', '_top'); window.top.close()
          }  
        } else if (navigator.userAgent.indexOf('Firefox') > 0) {  
          window.location.href = 'about:blank '
        } else {  
          window.opener = null
          window.open('', '_self', '')
          window.close()
        }
      }
    },
    stopDrop() {
      var overscroll = el => {
        el.addEventListener('touchstart', () => {
          var top = el.scrollTop
          var totalScroll = el.scrollHeight
          var currentScroll = top + el.offsetHeight
          if (top === 0) {
            el.scrollTop = 1
          } else if (currentScroll === totalScroll) {
            el.scrollTop = top - 1
          }
        })
        el.addEventListener('touchmove', evt => {
          if (el.offsetHeight < el.scrollHeight) {
            evt._isScroller = true
          }
        })
      }
      overscroll(document.querySelector('.isNotScroll'))
      document.body.addEventListener('touchmove', evt => {
        if (!evt._isScroller) {
          evt.preventDefault()
        }
      })
    }
  },
  actions: {

  }
})
