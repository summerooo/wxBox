<template>
  <div class="all">
    <img src="../../assets/images/paySuccess.png" alt="">
    <p>恭喜你兑换成功</p>
    兑换订单提交至后台处理 我们将很快通知您
    <br><br>
    <cube-button primary @click="gogo('points')">返回首页</cube-button>
    <br>
    <cube-button primary outline @click="gogo('record')">查看兑换记录</cube-button>
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
      'user'
    ])
  },
  methods: {
    gogo (where) {
      this.$router.replace({name: where, query: JSON.parse(this.$route.query)})
    }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
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
