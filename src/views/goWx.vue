<template>
  <div class="all">
    <i class="cubeic-warn icon"></i>
    <!-- <p>请在微信中打开链接</p> -->
    <a href="weixin://">
      <cube-button @click="copyUrl" light>请在微信中打开链接, 点击前往微信</cube-button>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'box_no'
    ]),
  },
  created () {},
  mounted () {},
  methods: {
    copyUrl () {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', `http://192.168.0.113:8088`)
      if (this.box_no) input.setAttribute('value', `http://192.168.0.113:8088/wxinbox/product_list.html?box_no=${this.box_no}`)
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
        console.log('复制成功')
        // this.$createToast({txt: '链接已复制到剪切板', type: 'txt'}).show()
      }
      document.body.removeChild(input)
    }
  }
}
</script>

<style lang="scss" scoped>
.all {
  padding: $large;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: 135px;
    padding: $large;
    color: #5eaffd;
  }
  a {
    width: 90vw;
    display: flex;
  }
}
</style>
