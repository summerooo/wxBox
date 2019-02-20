<template>
  <div class="about">
    <cube-button>2333</cube-button>
    <input type="file" @change="bb"/>
    <div class="a">
      aaaaa
    </div>
    <div class="b">
      aaaaa
    </div>
    <sx-steps :active="stepsActive" alignCenter>
      <sx-step ></sx-step>
      <sx-step ></sx-step>
      <sx-step ></sx-step>
    </sx-steps>

    <button @click="nextStep">nextStep</button>
    <swiper ref="mySwiper" :options="swiperOption" class="swiperAll">
      <swiper-slide>
        <div class="refresh">{{pullingDownText}}</div>
        <div v-for="(row, i) in slidleData" :key="i" style="height: 130px">
          {{row}} Slid1e
        </div>
        <div class="loadmore">{{pullingUpText}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { test } from '../api/what/test.js'
import sxSteps from '../components/steps/steps'
import sxStep from '../components/steps/step'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    sxSteps,
    sxStep,
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      c: [{ a: 2 }, { b: 3 }],
      stepsActive: 0,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        // freeModeMomentumBounce: false,
        freeMode: true
      },
      pullingDownText: '释放刷新',
      pullingUpText: '加载更多',
      slidleData: [11, 22, 33, 44, 55, 66, 77, 88, 99]
    }
  },
  created () {},
  mounted () {
    // console.log(this.$md5('111'))
    this.cc()
    this.ss()
  },
  methods: {
    nextStep () {
      if (this.stepsActive++ > 2) {
        this.stepsActive = 0
      }
    },
    async cc () {
      // console.log(await test())
    },
    async bb (e) {
      var file = e.target.files || e.dataTransfer.files
      if (file[0]) {
        if (file[0].size / 1024 / 1024 > 9) {
          this.$emit('onRead', false)
        } else {
          var reader = new FileReader()
          await reader.readAsDataURL(file[0])
          reader.onload = async e => {
            let newFormModels = new FormData()
            newFormModels.append('source', file[0])
            console.log(e)
          }
        }
      }
      console.log(e)
    },
    ss () {
      let Swiper = this.swiper
      let that = this
      // slideToClosest
      Swiper.on('touchStart', () => {
        that.pullingDownText = '释放刷新'
        that.pullingUpText = '释放加载'
      })
      Swiper.on('touchMove', () => {
        Swiper.params.virtualTranslate = false
        if (Swiper.translate > 80) {
          Swiper.params.virtualTranslate = true
        }
      })
      Swiper.on('touchEnd', () => {
        // Swiper.allowTouchMove = false //禁止触摸
        // Swiper.params.virtualTranslate = true //定住不给回弹
        if (Swiper.isEnd) {
          that.pullingUpText = '加载中'
          Swiper.params.virtualTranslate = true
          Swiper.allowTouchMove = false
          setTimeout(() => {
            that.pullingUpText = '加载完成'
            if (Math.random() > 0.5) {
              this.slidleData.push(...['aaa'])
            } else {
              that.pullingUpText = ''
            }
            Swiper.params.virtualTranslate = false
            Swiper.allowTouchMove = true
          }, 1000)
        }
        if (Swiper.translate > 60) {
          that.pullingDownText = '刷新中'
          Swiper.params.virtualTranslate = true
          Swiper.allowTouchMove = false
          setTimeout(() => {
            this.slidleData = this.slidleData.reverse()
            Swiper.params.virtualTranslate = false
            Swiper.allowTouchMove = true
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  // font-size: 1vw;
  // box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 3px solid blue;
  .swiperAll {
    position: relative;
    border: 3px solid lightcoral;
    height: 100vh;
    width: 100%;
    .swiper-slide {
      height: auto !important;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid lightseagreen;
    }
  }
}
.refresh {
  position: absolute;
  line-height: 80px;
  bottom: 100%;
  text-align: center;
  width: 100%;
}
.loadmore {
  position: absolute;
  line-height: 30px;
  top: 100%;
  text-align: center;
  width: 100%;
}
.a {
  width: 10%;
  height: 10%;
  border: 1px solid red;
  font-size: 2vmax;
}
.b {
  width: 10vmax;
  height: 10vmax;
  border: 1px solid red;
}
</style>
