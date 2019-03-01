<template>
  <div class="all">
    <div class="detailsContent">
      <header class="header">
        <div class="img">
          <img :src="row.goods_img" alt="">
        </div>
        <div class="content">
          <header class="goodsName">{{row.goods_name}}</header>
          <footer class="payPoints">{{row.pay_points}}积分</footer>
        </div>
      </header>
      <br><br>
      <div class="container">
        收货信息
        <label v-for="(row, index) in formModel" :key="index">
          <p>{{formStruct[index].label}}</p>
          <cube-input :disabled="disabled" v-model="formModel[index]" :placeholder="formStruct[index].placeholder" :type="index === 'telephone' ? 'number' : ''"></cube-input>
        </label>
        <label>
          <p>{{formStruct['exchange_num']}}</p>
          <sx-input-number v-model="exchange_num" :max="99"></sx-input-number>
        </label>
      </div>
    </div>
    <footer class="footer">
      <cube-button primary @click="exchangeNow">立即兑换</cube-button>
    </footer>
  </div>
</template>

<script>
import sxInputNumber from '@/components/inputNumber'
import { shopInformation } from '@/api/points'
import { mapState } from 'vuex'

export default {
  components: {
    sxInputNumber
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  data () {
    return {
      row: {},
      formStruct: {
        user_name: {
          label: '姓名',
          placeholder: '请输入姓名'
        },
        telephone: {
          label: '电话',
          placeholder: '请输入手机号'
        },
        address: {
          label: '地址',
          placeholder: '请输入地址'
        },
        exchange_num: '数量'
      },
      formModel: {
        user_name: '',
        telephone: '',
        address: ''
      },
      exchange_num: 1,
      disabled: false
    }
  },
  methods: {
    async exchangeNow () {
      console.log(this.formModel)
      if (!this.formModel.user_name) return this.$createToast({ txt: '请输入姓名', type: 'txt', time: 1000 }).show()
      if (!this.formModel.telephone) return this.$createToast({ txt: '请输入手机号', type: 'txt', time: 1000 }).show()
      if (!this.formModel.address) return this.$createToast({ txt: '请输入地址', type: 'txt', time: 1000 }).show()
      if (!/(?:^1[3456789]|^9[28])\d{9}$/.test(this.formModel.telephone)) return this.$createToast({ txt: '请输入正确手机号', type: 'txt', time: 1000 }).show()
      this.disabled = true
      let sif = await shopInformation(Object.assign({}, this.user, this.formModel, this.row, { exchange_num: this.exchange_num, order_origin: 4 }))
      this.disabled = false
      if (sif.data.return_code === 200) {
        setTimeout(() => {
          this.$router.replace({name: 'exchangeSuccess', query: this.$route.query})
        }, 1200)
        return this.$createToast({ txt: sif.data.return_msg, type: 'txt', time: 1200 }).show()
      }
      this.$createDialog({
        type: 'confirm',
        // title: sif.data.return_msg,
        content: sif.data.return_msg,
        confirmBtn: {
          text: '确定',
          active: true,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          href: 'javascript:;'
        },
        onConfirm () {},
        onCancel () {}
      }).show()
    }
  },
  created () {
    if ('row' in this.$route.query) this.row = JSON.parse(this.$route.query.row)
    else this.row = Object.assign({}, this.user, this.$route.query)
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  padding: $medium;
  padding-top: $large;
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  .detailsContent {
    width: 100%;
  }
  .header {
    display: flex;
    height: 120px;
    .img {
      height: 120px;
      width: 120px;
      text-align: center;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      padding-left: $mini;
      .goodsName, .payPoints {
        padding-top: $mini;
        width: 100%;
        background: white;
        // text-align: center;
        font-size: $default;
      }
      .goodsName {
        color: $drakblack;
      }
      .payPoints {
        padding-top: $mini;
        color: $red;
      }
    }
  }
  .container {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
    & label {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: $medium;
      color: $lightblack;
      justify-content: space-between;
      // height: $large;
      padding-top: $mini;
      padding-bottom: $mini;
      border-bottom: 1px solid $nav;
    }
    & label:last-child {
      border: none;
    }
    & p {
      color: $drakblack;
      font-size: $medium;
      width: 70px;
    }
    /deep/ .cube-input-field {
      padding-left: 0;
    }
    /deep/ .cube-input {
      flex: 1;
      background: transparent;
    }
    /deep/ .cube-input::after {
      border: 0px;
    }
    /deep/ .cube-input_active::after {
      border-bottom-color: $primary !important;
    }
  }
  .footer {}
}
</style>
