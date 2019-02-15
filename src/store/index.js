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
    }
  },
  actions: {

  }
})
