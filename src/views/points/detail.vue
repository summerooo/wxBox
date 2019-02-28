<template>
  <div class="all">
    <div class="img"  ref="img">
      <img :src="row.goods_img" alt="">
    </div>
    <div class="info">
      <header class="goodsName">{{row.goods_name}}</header>
      <footer class="payPoints">{{row.pay_points}}积分</footer>
    </div>
    <footer class="footer">
      <cube-button primary @click="exchangeDetails">去兑换</cube-button>
    </footer>
    <!-- end_time: "2019-02-28 00:00:00"
    goods_brand: "这是品牌"
    goods_color: "红色"
    goods_desc: "<p>详情</p>"
    goods_img: "http://192.168.0.103:86//uploads/img/promotion/20190222/5b31b055baa8f4cd2c0f446412dd9d04.jpg"
    goods_name: "测试"
    goods_weight: "5"
    pay_points: 500
    shop_goods_id: 5
    start_time: "2019-02-22 00:00:00"
    stock_num: 100 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { shoppingDesc } from '@/api/points'

export default {
  data () {
    return {
      detailData: {},
      row: null
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    async firstShow () {
      let sd = await shoppingDesc(Object.assign({}, this.user, this.row))
      console.log(sd)
      this.detailData = sd.data.return_data
    },
    exchangeDetails () {
      this.$refs.img.style.alignSelf = 'flex-start'
      this.$refs.img.style.height = '120px'
      this.$refs.img.style.padding = '14px'
      setTimeout(() => {
        this.$router.push({name: 'exchangeDetails', query: this.row})
      }, 150)
      console.log('exchangeDetails')
    }
  },
  created () {
    console.log(this.$route.query)
    this.row = JSON.parse(this.$route.query.row)
    this.firstShow()
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  .img {
    height: 50%;
    width: auto;
    text-align: center;
    overflow: hidden;
    transition: all .15s linear;
    img {
      // width: 100%;
      height: 100%;
    }
  }
  .info {
    padding: $medium;
    background: white;
    height: 20%;
    width: 100%;
    .goodsName, .payPoints {
      padding-top: $mini;
      width: 100%;
      background: white;
      // text-align: center;
      font-size: $large;
    }
    .goodsName {
      color: $drakblack;
    }
    .payPoints {
      color: $red;
    }
  }
  .footer {
    padding: $medium;
    display: flex;
    width: 100%;
    .cube-btn {
      flex: 1
    }
  }
}
</style>
