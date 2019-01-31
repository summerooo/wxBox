import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/goodsDetails',
      name: 'goodsDetails',
      component: () => import('../views/goodsDetails'),
      children: [
        // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)  searching
        // {
        //   path: '/goodsDetails0',
        //   name: 'goodsDetails0'
        // },
        {
          path: '/goodsDetails1',
          name: 'goodsDetails1'
        },
        {
          path: '/goodsDetails2',
          name: 'goodsDetails2'
        },
        {
          path: '/goodsDetails3',
          name: 'goodsDetails3'
        },
        {
          path: '/goodsDetails4',
          name: 'goodsDetails4'
        },
        {
          path: '/goodsDetails5',
          name: 'goodsDetails5'
        }
      ]
    },
    {
      path: '/goodsBox',
      name: 'goodsBox',
      component: () => import('../views/goodsBox'),
      children: [
        // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)  searching
        // {
        //   path: '/goodsDetails0',
        //   name: 'goodsDetails0'
        // },
        {
          path: '/goodsBox1',
          name: 'goodsBox1'
        },
        {
          path: '/goodsBox2',
          name: 'goodsBox2'
        },
        {
          path: '/goodsBox3',
          name: 'goodsBox3'
        },
        {
          path: '/goodsBox4',
          name: 'goodsBox4'
        },
        {
          path: '/goodsBox5',
          name: 'goodsBox5'
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'details',
    //   component: () => import('../views/details')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/forget')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/info'),
      children: [
        {
          path: '/chooseSchool0/:id?',
          props: true,
          name: 'chooseSchool0',
          component: () => import('../views/info/chooseSchool'),
          children: [
            { path: '/chooseSchool1', name: 'chooseSchool1' },
            { path: '/chooseSchool2', name: 'chooseSchool2' },
            { path: '/chooseSchool3', name: 'chooseSchool3' }
          ]
        },
        {
          path: '/chooseDormitory',
          name: 'chooseDormitory',
          redirect: '/chooseDormitory0',
          component: () => import('../views/info/chooseDormitory'),
          children: [
            { path: '/chooseDormitory0', name: 'chooseDormitory0' },
            { path: '/chooseDormitory1', name: 'chooseDormitory1' }
          ]
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test')
    },
    {
      path: '/cc',
      name: 'customGoods',
      component: () => import('../views/customGoods')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/goods')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/About')
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('../components/cloud')
    },
    {
      path: '/scrollTest',
      name: 'scrollTest',
      component: () => import('../components/scrollTest')
    },
    { path:'*', redirect: '/' }
  ]
})
