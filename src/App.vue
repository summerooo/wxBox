<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  created() {
    // 设备
    if (!sessionStorage.getItem('device')) {
      for (let d of ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']) {
        if (navigator.userAgent.includes(d)) {
          sessionStorage.setItem('device', d)
          this.device = d
          break
        }
      }
    }
    // 内核
    for (let i of ['chrome', 'firefox', 'webkit']) {
      if (navigator.userAgent.toLowerCase().includes(i)) {
        this.kernel = i
        break
      }
    }
    this.$store.commit('getUser')
  },
  data () {
    return {
      device: null,
      kernel: null
    }
  },
  mounted() {
    console.log(this.$md5('123456'))
  }
}
</script>

<style lang="scss">

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#app, html, body{
  min-height: 550px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: white;
  * {
    // font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>
