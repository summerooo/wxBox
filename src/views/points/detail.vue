<template>
  <div class="all">
    <swiper ref="mySwiper" :options="swiperOption" class="swiperAll">
      <swiper-slide class="swiperContainer">
        <div class="swiperContent" v-if="!viewDetails">
          <div class="img" ref="img">
            <img :src="row.goods_img" alt="">
          </div>
          <div class="info">
            <header class="goodsName">{{row.goods_name}}</header>
            <footer class="payPoints">{{row.pay_points}}积分</footer>
          </div>
          <div class="loadmore">{{pullingUpText}}</div>
        </div>
        <!-- <div class="refresh"></div> -->
        <div class="viewDetails" v-else>
          <ul>
            <li v-for="(row, index) in detailsStruct" :key="index">
              <p>{{row}}</p>{{detailData[0][index]}}
            </li>
          </ul>
          <div v-html="detailData[0].goods_desc"></div>
        </div>
      </swiper-slide>
    </swiper>
    
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        observer:true,
        observeParents:true,
        direction: 'vertical',
        slidesPerView: 'auto',
        // freeModeMomentumBounce: false,
        freeMode: true
      },
      detailData: {},
      row: null,
      pullingUpText: '下拉查看详情',
      viewDetails: false,
      detailsStruct: {
        goods_name: '品名',
        goods_color: '颜色',
        goods_brand: '品牌',
        goods_weight: '重量'
      }
    }
  },
  computed: {
    ...mapState([
      'user'
    ]),
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    async firstShow () {
      let sd = await shoppingDesc(Object.assign({}, this.user, this.row))
      console.log(sd)
      this.detailData = sd.data.return_data
    },
    exchangeDetails () {
      console.log('img' in this.$refs)
      if (!this.viewDetails) {
        this.$refs.img.style.alignSelf = 'flex-start'
        this.$refs.img.style.height = '120px'
        this.$refs.img.style.padding = '14px'
        setTimeout(() => {
          this.$router.push({name: 'exchangeDetails', query: this.$route.query})
        }, 150)
      } else {
        this.$router.push({name: 'exchangeDetails', query: this.$route.query})
      }
    },
    ss () {
      let Swiper = this.swiper
      // slideToClosest
      Swiper.on('touchStart', () => {
        this.pullingUpText = '下拉查看详情'
      })
      Swiper.on('touchMove', () => {
        if (Swiper.translate < -45) {
          setTimeout(() => {
            this.pullingUpText = '释放查看详情'
          }, 10)
        }
      })
      Swiper.on('touchEnd', () => {
        // this.pullingUpText = '查看详情'
        if (Swiper.translate > 45) {
          this.viewDetails = false
          Swiper.updateSize()
          Swiper.updateSlides()
        }
        if (!this.viewDetails && Swiper.isEnd && Swiper.translate < -45) {
          this.viewDetails = true
          Swiper.updateSize()
          Swiper.updateSlides()
        }
      })
    }
  },
  created () {
    if ('row' in this.$route.query) this.row = JSON.parse(this.$route.query.row)
    else this.row = Object.assign({}, this.user, this.$route.query)
    this.firstShow()
  },
  mounted() {
    this.ss()
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .img {
    height: 100vw;
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
    width: 100%;
    padding-top: $large;
    // border-top: $medium solid $nav;
    .goodsName, .payPoints {
      padding: $small;
      // padding-top: $mini;
      width: 100%;
      background: white;
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
    background: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    bottom: 0;
    width: 100%;
    .footerMessage {
      width: 100%;
      text-align: center;
      font-size: $medium;
      padding: $mini;
      color: $lightgray;
    }
    .cube-btn {
      flex: 1;
    }
  }
  .swiperAll {
    background: $nav;
    position: relative;
    height: 100vh;
    width: 100%;
    .swiperContainer, .swiperContent {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }
    .swiperContainer {
      height: auto !important;
    }
    .swiperContent {
      height: calc(100vh - 80px);
      justify-content: flex-start;
    }
    .viewDetails {
      width: 100%;
      height: auto;
      padding-bottom: 80px;
      ul {
        background: white;
        height: auto;
        box-sizing: border-box;
        padding: $medium;
        li {
          color: $gray;
          font-weight: 400;
          display: flex;
          align-items: center;
          height: 43px;
          p {
            width: 66px;
          }
        }
        // li:last-child {
        //   border-top: 1px solid $nav;
        // }
      }
      div {
        padding: $medium;
        width: 100%;
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .refresh {
    height: 80px;
    position: absolute;
    line-height: 80px;
    bottom: 100%;
    text-align: center;
    width: 100%;
  }
  .loadmore {
    color: $lightblack;
    position: absolute;
    line-height: 30px;
    top: 100%;
    text-align: center;
    width: 100%;
  }
}
</style>
