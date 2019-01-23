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
    dormitory: ''
  },
  mutations: {
    setPhone (state, data) {
      state.phone = data
    },
    setUser (state, data) {
      state.user = data
      sessionStorage.setItem('user', data)
    },
    getUser (state) {
      state.user = sessionStorage.getItem('user')
    },
    setUpload (state, data) {
      state.upload = data
    },
    setSchool (state, data) {
      state.school = data
    },
    setDormitory (state, data) {
      state.dormitory = data
    }
  },
  actions: {

  }
})
