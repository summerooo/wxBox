<template>
  <div class="all">
    <header class="header">
      <p>
        <img src="../assets/images/orderDetailsSuccess.png" alt="">
        交易成功
      </p>
    </header>
    <div class="container">
      <ul class="content" v-if="goodsData.goods_info">
        <li v-for="(food, index) in goodsData.goods_info" :key="index">
          <div class="goodsRow">
            <img :src="food.goods_img">
            <div class="goodsContent">
              <div class="goodsContentTop">
                <font class="goodsContentTopLeft">
                  <span>{{food.goods_name}}</span>
                  <span>
                    ￥{{food.goods_price}}<br><br>
                    <div style="text-align:right">×{{food.goods_number}}</div>
                  </span>
                </font>
                <div class="abstract">
                  <span>规格 {{food.goods_spec}}</span>&nbsp;
                  <cube-button inline outline @click="viewQuestion">联系客服</cube-button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="list listOne">
        <li><font>订单编号</font><span>{{goodsData.order_sn}}</span></li>
        <li><font>下单时间</font><span>{{goodsData.create_time}}</span></li>
      </ul>
      <ul class="list">
        <li><font>支付方式</font><span>{{way}}</span></li>
        <li><font>商品总额</font><span>{{goodsData.total_fee}}</span></li>
        <li><font>优惠</font><span>{{goodsData.preferential_amount}}</span></li>
      </ul>
      <footer class="foorter">
        <p>实付款: <font>￥75.2</font></p>
      </footer>
    </div>
     <!-- "return_data": {
        "order_sn": "P19012614310115932",
        "create_time": "2019-01-26 14:31:01",
        "total_fee": "35.00",
        "pay_fee": "35.00",
        "preferential_amount": 0,
        "goods_info": [
            {
                "goods_name": "眼线液",
                "goods_number": 1,
                "goods_price": "5.00",
                "goods_spec": "10g",
                "goods_img": "http://admin.hly.com//uploads/img/goods/20190110/7489010b093ce3d65d86692459fb7bf6.jpg"
            },
            {
                "goods_name": "粉底",
                "goods_number": 3,
                "goods_price": "10.00",
                "goods_spec": "10g",
                "goods_img": "http://admin.hly.com//uploads/img/goods/20190111/257b0c5d3b3f8ae6d2d620aabe0b675d.jpg"
            }
        ],
        "total_number": 4
    } -->
  </div>
</template>

<script>
import { saleOrderDetail } from '../api/orderDetails'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      a:1,
      row: {},
      goodsData: {}
    }
  },
  computed: {
    way () {
      let way
      switch (this.goodsData.pay_type) {
        case 1:
          way = '微信'
          break
        case 2:
          way = '支付宝'
          break
        case 3:
          way = '余额'
          break
        default:
          way = '未知'
          break
      }
      return way
    },
    ...mapState([
      'user'
    ]),
  },
  methods: {
    async firstShow () {
      let sod = await saleOrderDetail(Object.assign({}, this.row, {order_sn: 'P19030212011779253'}))
      console.log(sod)
      this.goodsData = sod.data.return_data
    },
    viewQuestion () {
      this.$router.push({name: 'question'})
    }
  },
  created () {
    if ('row' in this.$route.query) this.row = Object.assign({}, this.user, JSON.parse(this.$route.query.row))
    else this.row = Object.assign({}, this.user, this.$route.query)
    this.firstShow()
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  font-size: $default;
  display: flex;
  flex-direction: column;
  background: $nav;
  .header {
    padding: $large;
    margin-bottom: $mini;
    height: 135px;
    background: url('../assets/images/orderDetails.png') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    // padding: $medium;
    p {
      display: flex;
      align-items: center;
      font-size: $large;
      color: white;
      img {
        width: 26px;
        margin-right: $mini;
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      margin-bottom: $mini;
      // flex: 1;
      // height: 100%;
      .goodsRow {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white;
        height: 110px;
        padding: $small;
        img {
          width: 90px;
        }
        .goodsContent {
          flex: 1;
          height: 100%;
          // display: flex;
          padding-left: $small;
          // box-sizing: border-box;
          // justify-content: space-between;
          // flex-direction: column;
          .goodsContentTop {
            height: 100%;
            // line-height: $large;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .goodsContentTopLeft {
              font-size: $default;
              display: flex;
              justify-content: space-between;
              span:nth-child(2) {
                color: $lightblack;
              }
            }
            .abstract {
              color: $gray;
              font-size: $small;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              /deep/ .cube-btn-inline {
                padding: 6.6px $mini !important
              }
            }
          }
        }
      }
      .noGoodsData {
        font-size: $medium;
        color: $lightblack;
        margin: 76px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 30%;
          margin-bottom: $large;
        }
      }
    }
    .list {
      width: 100%;
      background: white;
      li {
        padding: $small;
        display: flex;
        justify-content: space-between;
        font-size: $medium;
        font {
          color: $gray;
        }
        span {
          color: $lightblack;
        }
      }
      
    }
    .listOne {
      margin-bottom: $mini;
    }
    .foorter {
      border: 1px solid $nav;
      background: white;
      text-align: right;
      padding: $small;
      font-size: $default;
      font {
        color: $red;
      }
    }
  }
}
</style>
