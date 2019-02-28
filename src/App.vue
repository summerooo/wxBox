<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
// import wx from 'weixin-js-sdk'

export default {
  created() {
    const nu = navigator.userAgent
    const models = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod' ]
    // 设备
    if (!sessionStorage.getItem('device')) {
      for (let d of models) {
        if (nu.includes(d)) {
          sessionStorage.setItem('device', d)
          this.device = d
          break
        }
      }
    }
    // 内核
    for (let i of ['chrome', 'firefox', 'webkit']) {
      if (nu.toLowerCase().includes(i)) {
        this.kernel = i
        break
      }
    }
    this.$store.commit('getUser')
    // console.log(wx)
    // var host = location.hostname;
    // var prot = location.protocol;
    // var redirect_uri1 =encodeURIComponent(prot+"//"+host+"/wxinbox/product_list.html");
    // location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15d558c01d3cab99&redirect_uri="+redirect_uri1+"&response_type=code&scope=snsapi_userinfo#wechat_redirect";
  },
  data() {
    return {
      device: null,
      kernel: null
    }
  },
  // watch: {
  //   '$route' () {
  //     this.isWx()
  //   }
  // },
  methods: {
    ...mapMutations(['getUser']),
    // isWx() {
    //   let nu = navigator.userAgent
    //   if (nu.toLowerCase().match(/MicroMessenger/i)) {
    //     alert('在微信')
    //   } else {
    //     if ('box_no' in this.$route.query) {
    //       this.setBoxNo(this.$route.query['box_no'])
    //     }
    //     this.$router.replace({ name: 'goWx' })
    //   }
    // }
  },
  mounted() {
    this.getUser()
    console.log(this.$md5('123456'))
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app,
html,
body {
  min-height: 550px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: white;
  * {
    // font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>
