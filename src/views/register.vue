<template>
  <div class="all">
    <span>手机号: {{registerData.phoneNum}}</span>
    <div class="getCode">
      <cube-input v-model="registerData.code" class="code" placeholder="验证码" type="number"></cube-input>
      <cube-button light @click="getCode">{{time ? `${time} s` : '获取验证码'}}</cube-button>
    </div>
    <cube-input v-model="registerData.pwd" class="code" type="password" placeholder="密码"></cube-input>
    <cube-input v-model="registerData.confirmPwd" class="code" type="password" placeholder="确认密码"></cube-input>
    <cube-button style="margin-top: 16px;" primary @click="sumbit">确认</cube-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      registerData: {
        phoneNum: '',
        code: '',
        pwd: '',
        confirmPwd: ''
      },
      contrast: {
        phoneNum: '手机号',
        code: '验证码',
        pwd: '密码',
        confirmPwd: '确认密码'
      },
      time: 0
    }
  },
  computed: {
    ...mapState([
      'phone'
    ])
  },
  created () {
    if (!this.phone) this.$createToast({ txt: `手机号未获取`, type: 'txt' }).show()
    this.registerData.phoneNum = this.phone
  },
  methods: {
    getCode () {
      if (this.time) return
      if (!this.phoneNum) return this.$createToast({ txt: `手机号未知`, type: 'txt' }).show()
      this.time = 60
      let timer = setInterval(() => {
        this.time--
        if (!this.time) {
          clearInterval(timer)
        }
      }, 1000)
      this.$createToast({ txt: 'getting Code', type: 'txt' }).show()
    },
    sumbit () {
      for (let i in this.registerData) {
        if (!this.registerData[i]) return this.$createToast({ txt: `${this.contrast[i]}不能为空`, type: 'txt' }).show()
      }
      if (this.registerData['pwd'] !== this.registerData['confirmPwd']) return this.$createToast({ txt: `两次密码不相同`, type: 'txt' }).show()
      if (this.registerData['pwd'].length < 6) return this.$createToast({ txt: `密码至少6位`, type: 'txt' }).show()
      this.$createToast({ txt: 'register sumbit', type: 'txt' }).show()
      this.$router.push({ name: 'info'})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.all {
  padding: 30px;
  // height: 66%;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & span {
    padding-left: $mini;
    font-size: $medium;
  }
  .getCode {
    display: flex;
    border-bottom: 1px solid $lightgray;
    .code {
      flex: 1;
    }
    .cube-input {
      border-bottom: none;
      background: transparent;
    }
    .cube-btn {
      width: 100px;
      padding: 0;
      color: $lightblack;
      height: $small;
      align-self: center;
      font-size: $small;
      text-align: center;
      background: transparent;
      border: none;
      border-left:1px solid $lightgray;
      box-shadow: none;
      border-radius: 0;
    }
  }
  .cube-input {
    border-bottom: 1px solid $lightgray;
    background: transparent;
  }
  // /deep/ .cube-input-field {
  //   padding-left: 0 !important;
  // }
  .cube-input::after {
    border: none;
  }
  /deep/ .cube-input_active::after {
    border-bottom-color: $primary !important;
  }
}

</style>
