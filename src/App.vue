<template>
  <div id="app">
    <router-view/>
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
  },
  data () {
    return {
      device: null,
      kernel: null
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app, html, body{
  min-height: 550px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  * {
    // font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
}
</style>
