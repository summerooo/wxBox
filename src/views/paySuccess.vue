<template>
  <div class="all">
    <img src="../assets/images/paySuccess.png" alt="">
    <p>恭喜你支付成功</p>
    <!-- <cube-button primary @click="downloadApp">下载APP 更多优惠等你来拿！</cube-button> -->
    <br>
    <cube-button primary outline @click="back">继续购买</cube-button>
  </div>
</template>
<script>

export default {
  created() {},
  data() {
    return {}
  },
  methods: {
    downloadApp () {
      let device = sessionStorage.getItem('device')
      if (device != 'Android') window.open('https://itunes.apple.com/cn/app/%E7%9B%92%E9%87%8C%E6%9C%89/id1273970293?mt=8')
      else window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.zk.intelligentlock')
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.all {
  padding: 30px;
  // height: 500px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  img {
    width: 55%;
  }
  p {
    font-size: 26px;
    color: $red;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 26px;
  }
}
</style>
