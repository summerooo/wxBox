<template>
  <div class="loginAll">
    <cube-input class="phoneNum" placeholder="请输入手机号" v-model="phoneNum" type="number"></cube-input>
    <cube-button :primary="true" @click="validatePhone">获取验证码</cube-button>
    <div>
      获取验证码，表示已经同意<span @click="openAgreement">《注册协议》</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      phoneNum: ''
    }
  },
  computed: {
    ...mapState([
      'phone'
    ])
  },
  methods: {
    ...mapMutations([
      'setPhone'
    ]),
    validatePhone () {
      if (!this.phoneNum) return this.$createToast({ txt: '请输入手机号', type: 'txt' }).show()
      if (!/(?:^1[3456789]|^9[28])\d{9}$/.test(this.phoneNum)) return this.$createToast({ txt: '请输入正确手机号', type: 'txt' }).show()
      console.log('success' ,this.phoneNum)
      let that = this
      if (this.phoneNum === '15733133384') {
        this.$createDialog({
          type: 'confirm',
          // icon: 'cubeic-alert',
          title: '提示',
          content: '尚无注册信息，是否前往注册？',
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm () {
            that.$store.commit('setPhone', that.phoneNum)
            that.$router.push({ name: 'register'})
          },
          onCancel () {}
        }).show()
      }
    },
    openAgreement () {
      this.$createToast({ txt: 'opening agreement', type: 'txt' }).show()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.loginAll {
  padding: 30px;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .phoneNum {
    background: transparent;
    margin-bottom: 15px;
  }
  div {
    text-align: center;
    font-size: $small;
    span {
      color: $primary;
    }
  }
  
  /deep/ .cube-input::after {
    // border: 0px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom-color: $lightgray;
    
  }
 /deep/ .cube-input_active::after {
    border-bottom-color: $primary !important;
  }
}

</style>
