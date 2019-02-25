<template>
  <div class="all">
    <!-- <div class="top">
      <i class="cubeic-back" @click="back"></i>
      <span style="text-align:center">注册</span>
    </div> -->
    <img src="../assets/images/logo.jpg" alt="">
    <cube-input class="telephone" placeholder="请输入手机号" v-model="registerData.telephone" type="number"></cube-input>
    <div class="getCode">
      <cube-input v-model="registerData.code" class="code" placeholder="验证码" type="number"></cube-input>
      <cube-button light @click="getCode">{{time ? `${time} s` : '获取验证码'}}</cube-button>
    </div>
    <cube-input v-model="registerData.password" class="code" type="password" placeholder="密码"></cube-input>
    <!-- <cube-input v-model="registerData.confirmpassword" class="code" type="password" placeholder="确认密码"></cube-input> -->
    <cube-button style="margin-top: 16px;" primary @click="sumbit">确认</cube-button>
    <p class="agreement">获取验证码，表示已同意<span @click="viewAgreement">《注册协议》</span></p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getRegisterCode, userRegister } from '../api/register'
export default {
  data() {
    return {
      registerData: {
        telephone: '',
        code: '',
        code_id: '',
        password: ''
        // confirmpassword: ''
      },
      contrast: {
        telephone: '手机号',
        code: '验证码',
        password: '密码'
        // confirmpassword: '确认密码'
      },
      time: 0
    }
  },
  computed: {
    ...mapState([
      'phone',
      'APP_ID',
      'ENCSTR'
    ])
  },
  created () {
    // if (!this.phone) this.$createToast({ txt: `手机号未获取`, type: 'txt' }).show()
    // this.registerData.telephone = this.phone
  },
  methods: {
    async getCode () {
      if (this.time) return
      if (!this.registerData.telephone) return this.$createToast({ txt: `手机号未知`, type: 'txt' }).show()
      let grc = await getRegisterCode({telephone: this.registerData.telephone})
      this.$createToast({ txt: grc.data.return_msg, type: 'txt' }).show()
      if (grc.data.return_code === 200) {
        this.time = 60
        let timer = setInterval(() => {
          this.time--
          if (!this.time) {
            clearInterval(timer)
          }
        }, 1000)
        this.registerData.code_id = grc.data.return_data.code_id
      }
    },
    async sumbit () {
      for (let i in this.contrast) {
        if (!this.registerData[i]) return this.$createToast({ txt: `${this.contrast[i]}不能为空`, type: 'txt' }).show()
      }
      // if (this.registerData['password'] !== this.registerData['confirmpassword']) return this.$createToast({ txt: `两次密码不相同`, type: 'txt' }).show()
      if (this.registerData['password'].length < 6) return this.$createToast({ txt: `密码至少6位`, type: 'txt' }).show()
      // this.$md5(this.ENCSTR + this.APP_ID + 'APP_ID' + this.APP_ID + 'telephone' + this.registerData.telephone).toUpperCase()
      let toast = this.$createToast({
        txt: '验证中',
        mask: true,
        time: 0
      })
      toast.show()
      let ur = await userRegister(Object.assign({}, this.registerData, {password: this.$md5(this.registerData.password)}))
      if (ur.data.return_code === 200) {
        this.$router.push({ name: 'login'})
      }
      toast.hide()
      this.$createToast({
        txt: ur.data.return_msg,
        type: 'txt'
      }).show()
      // this.$createToast({ txt: 'register sumbit', type: 'txt' }).show()
    },
    back () {
      this.$router.replace({name: 'login'})
    },
    viewAgreement () {
      this.$router.push({name: 'agreement'})
    }
  },
  mounted() {
    document.title = '注册'
  }
}
</script>
<style lang="scss" scoped>

.all {
  padding: 30px;
  // height: 66%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 55%;
    align-self: center;
  }
  & span {
    padding-left: $mini;
    font-size: $medium;
  }
  .top {
    display: flex;
    align-items: center;
    span {
      color: $drakblack;
      font-size: $default;
    }
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
  .agreement {
    font-size: $small;
    color: $lightblack;
    align-self: center;
    padding-top: $mini;
    span {
      color: $primary;
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
