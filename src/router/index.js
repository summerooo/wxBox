import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'details',
      component: () => import('../views/details.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue')
    },
    {
      path: '/cc',
      name: 'customGoods',
      component: () => import('../views/customGoods.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/goods.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/About.vue')
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('../components/cloud.vue')
    },
    {
      path: '/scrollTest',
      name: 'scrollTest',
      component: () => import('../components/scrollTest.vue')
    }
  ]
})
