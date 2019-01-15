<template>
  <div class="touchAll">
    <div class="content">
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <cube-button @click="parabola($event)"></cube-button>
      <drop-ball ref="drop" :destination="destination"></drop-ball>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter">
        <div v-if="show" class="ball" ref="ball"></div>
      </transition>
      <cube-sticky :pos="scrollY">
        <cube-scroll
          ref="scroll"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
          :scroll-events="['scroll']"
          @scroll="scrollHandler">
          <template slot="pulldown" slot-scope="props">
            <div v-if="props.pullDownRefresh"
              class="cube-pulldown-wrapper"
              :style="props.pullDownStyle">
                <div v-if="props.beforePullDown" :style="{paddingTop: props.bubbleY / 3 * 2 + 'px'}">
                  <!-- <span :class="{rotate: props.bubbleY > options.pullDownRefresh.threshold - 60}">↓</span> -->
                  {{props.bubbleY > options.pullDownRefresh.threshold ? '释放逛上一个' : '下滑逛上一个'}}
                </div>
                <!-- <div class="after-trigger" v-else>
                  释放逛上一个
                  <div v-show="props.isPullingDown" class="loading">
                    <cube-loading></cube-loading>
                  </div>
                  <transition name="success">
                    <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">今日头条推荐引擎有x条更新</span></div>
                  </transition>
                </div> -->
            </div>
          </template>
          <!-- <template slot="pullup" slot-scope="props">
            <div class="pullup-wrapper">
              {{props}}
            </div>
          </template> -->
          <div style="border: 3px solid lightblue;height:600px;width:100%">
          </div>
          <cube-sticky-ele ele-key="11">
            <ul class="sticky-header">
              <li>111</li>
            </ul>
          </cube-sticky-ele>
          <div style="border: 3px solid lightblue;height:600px;width:100%"></div>
          <cube-sticky-ele ele-key="22">
            <ul class="sticky-header">
              <li>222</li>
            </ul>
          </cube-sticky-ele>
          <div style="border: 3px solid lightblue;height:600px;width:100%"></div>
          <cube-sticky-ele ele-key="33">
            <ul class="sticky-header">
              <li>333</li>
            </ul>
          </cube-sticky-ele>
        </cube-scroll>
      </cube-sticky>
    </div>
  </div>
</template>
<script>
import dropBall from '../../src/components/dropBall'
export default {
  components: {
    dropBall
  },
  data() {
    return {
      data: [
        {
          name: '热销榜',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜1',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜2',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜3',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜4',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜5d1',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄12',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜5',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄32',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜51',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄3',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        }
      ],
      current: '',
      options: {
        pullDownRefresh: {
          threshold: 60
        },
        pullUpLoad: {
          threshold: 60
        }
      },
      scrollY: 0,
      show: false,
      balls: [
        {show: false}
      ],
      dropBalls: [],
      e: ''
    }
  },
  computed: {
    destination () {
      return {top: window.innerHeight*0.65, left: 60}
    }
  },
  methods: {
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    },
    onPullingDown() {
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    onPullingUp() {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    parabola(e) {
      console.log(e)
      this.e = e
      this.$refs.drop.drop(e)
      // this.show = true
    },
    beforeEnter(el) {
      this.$nextTick(() => {
        el.style.top = `${this.e.y}px`
        el.style.left = `${this.e.x}px`
      })
      console.log('1')
    },
    enter(el) {
      this.$nextTick(() => {
        el.style.top = `${window.innerHeight}px`
        el.style.left = `${window.innerWidth}px`
      })
      console.log('2', el)
    },
    afterEnter(el) {
      this.show = false
      console.log('3', el)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped lang="scss">
.touchAll {
  .initBall {
    width: 30px;
    height: 30px;
    background: blue;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .ball {
    width: 30px;
    height: 30px;
    background: blue;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate3d(0, 0, 0);
    transition: 0.5s top cubic-bezier(0.15, -0.75, 0.88, 0.33),
      0.5s left cubic-bezier(0, 0, 0, 0), 0.5s right cubic-bezier(0, 0, 0, 0);
  }
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border: 3px solid lightpink;
  & .content {
    flex: 1;
    height: calc(100% - 100px);
    border: 3px solid green;
  }
  // & .bottom {
  //   height: 30px;
  // }
  // // right
  // /deep/ .cube-scroll-nav-panel-title {
  //   line-height: 20px;
  //   font-size: 14px;
  //   background: rgba(240, 239, 239, 0.88);
  //   padding: 10px
  // }
  // /deep/ .cube-scroll-wrapper {
  //   width: 22vw;
  //   line-height: 20px;
  // }
  // // left
  // /deep/ .cube-scroll-nav-bar-item_active {
  //   border-left: blue 3px solid ;
  // }
  // /deep/ .cube-scroll-nav-bar-item {
  //   padding: 15px;
  //   box-sizing: border-box;
  //   // display: flex;
  //   // align-items: center;
  //   // justify-content: center;
  //   width: 100%;
  //   white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }
}
</style>
