<template>
  <div class="customGoodsAll">
    <div class="content">
      <div class="left"></div>
      <div class="right">
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
              0
                      <!-- <div v-if="props.beforePullDown"
                        class="before-trigger"
                        :style="{paddingTop: props.bubbleY + 'px'}">
                        <span :class="{rotate: props.bubbleY > options.pullDownRefresh.threshold - 60}">↓</span>
                      </div>
                      <div class="after-trigger" v-else>
                        <div v-show="props.isPullingDown" class="loading">
                          <cube-loading></cube-loading>
                        </div>
                        <transition name="success">
                          <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">今日头条推荐引擎有x条更新</span></div>
                        </transition>
                      </div> -->
              </div>
            </template>
            <!-- <template slot="pullUp" slot-scope="props">
              <div v-if="props.pullUpLoad"
              class="cube-pulldown-wrapper"
              :style="props.pullUpLoadStyle">0
              </div>
            </template> -->
            <div style="border: 3px solid lightblue;height:600px;width:100%"></div>
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
    <div class="bottom"></div>
  </div>
</template>
<script>
// const _data = [
//   '😀 😁 😂 🤣 😃 😄 ',
//   '🙂 🤗 🤩 🤔 🤨 😐 ',
//   '👆🏻 scroll up/down 👇🏻 ',
//   '😔 😕 🙃 🤑 😲 ☹️ ',
//   '🐣 🐣 🐣 🐣 🐣 🐣 ',
//   '👆🏻 scroll up/down 👇🏻 ',
//   '🐥 🐥 🐥 🐥 🐥 🐥 ',
//   '🤓 🤓 🤓 🤓 🤓 🤓 ',
//   '👆🏻 scroll up/down 👇🏻 ',
//   '🦔 🦔 🦔 🦔 🦔 🦔 ',
//   '🙈 🙈 🙈 🙈 🙈 🙈 ',
//   '👆🏻 scroll up/down 👇🏻 ',
//   '🚖 🚖 🚖 🚖 🚖 🚖 ',
//   '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
// ]
export default {
  data() {
    return {
      data: [
        {
          name: '热销榜',
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜1',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜2',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜3',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜4',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜5d1',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄12',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜5',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄32',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '热销榜51',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        },
        {
          name: '😀 😁 😂 🤣 😃 😄3',
          type: -1,
          items: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        }
      ],
      current: '',
      scrollEvents: ['scroll'],
      scrollY: 0,
      options: {
        pullDownRefresh: true,
        pullUpLoad: {
          more: 'this.pullUpLoadMoreTxt',
          noMore: 'this.pullUpLoadNoMoreTxt'
        }
      }
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle (title) {
      console.log(title)
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    onPullingDown () {
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    onPullingUp () {
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    }
  },
  created() {}
}
</script>
<style scoped lang="scss">
.customGoodsAll {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 3px solid lightgreen;
  .content {
    display: flex;
    width: 100%;
    height: 80%;
    box-sizing: border-box;
    & .left {
      height: 100%;
      width: 20vw;
      border: 2px solid lightblue
    }
    & .right {
      height: 100%;
      flex: 1;
      border: 2px solid lightcoral
    }
  }
}
</style>
