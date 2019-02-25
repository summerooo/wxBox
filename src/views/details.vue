<template>
  <div class="all">
    <div :class="{content: true, isSearch: [2, 3, 4, 5].includes(searching)}">
      <cube-scroll-nav
        ref="scroll"
        :side="true"
        :data="data"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <div class="prepend-header" slot="prepend">
          <div class="searchNav">
            <transition name="back">
              <i class="cubeic-back backIcon" @click="back" v-if="![1].includes(searching)"></i>
            </transition>
            <cube-input ref="searchInput" v-model="searchData" @focus="focusSearch" @blur="blurSearch" @keyup.enter.native="searchingSubmit" placeholder="请输入商品名称">
              <i class="cubeic-search" slot="prepend"></i>
            </cube-input>
          </div>
        </div>
        <div v-if="[1, 3].includes(searching)">
          <cube-scroll-nav-panel
            v-for="item in data"
            :key="item.name"
            :label="item.name"
            :title="item.name">
            <ul>
              <li v-for="(food, index) in item.foods" :key="index">
                <div class="goodsRow">
                  <img :src="food.icon">
                  <div class="goodsContent">
                    <div class="goodsContentTop">
                      {{food.name}}
                      <div class="abstract">
                        <span>规格:105g</span>
                        <span>库存458袋</span>
                      </div>
                    </div>
                    <div class="goodsContentBottom">
                    <font><span>￥33</span>/袋子</font>
                      <sx-input-number v-model="chooseCommodity[food.id].num" :max="food.stock" @isMax="isMax" :item="food" @clickAction="clickAction"></sx-input-number>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </div>
        <div v-if="[0].includes(searching)" class="noSearch">
          没有搜索结果
          <span>换个关键词试试吧</span>
        </div>
        <sx-search-panel @panelIcon="panelIcon" @getPanelCell="getPanelCell" v-if="[4].includes(searching)"/>
        <sx-search-list @getListRow="getListRow" v-if="[5].includes(searching)"/>
      </cube-scroll-nav>
      <sx-popup ref="popup">
        <div slot="left" class="popupLeft">
          已选商品 <span>(共{{Object.keys(cart).length}}件商品)</span>
        </div>
        <div slot="right" class="popupRight" @click="clearCart">
          <i class="box-lajitong"></i>清空
        </div>
        <!-- <div style="width: 100%;height: 150px">
          <cube-scroll @scroll="scrollHandler" style="width: 100%;height:100%;" :scrollEvents="['scroll']"> -->
            <transition-group name="list">
              <div v-for="(row, i) in cart" :key="row.id" :data-index="i" class="popupContent list-item">
                {{row.id}}
                <sx-input-number v-model="row.num" :max="row.stock" @isMax="isMax" :item="row" @clickAction="clickAction"></sx-input-number>
              </div>
            </transition-group>
          <!-- </cube-scroll>
        </div> -->
      </sx-popup>
    </div>
    <div class="bottom">
      <div class="box"  @click="closePopup">
        <div class="shoppingCart" @click.stop="openTheShoppingCart" :style="{transition: 'all .3s ease', backgroundColor: !Object.keys(cart).length ? '#cccccc' : ''}">
          <i class="box-gouwuche"></i>
          <span v-show="Object.keys(cart).length">{{Object.keys(cart).length}}</span>
        </div>
        <div  class="info" v-if="!Object.keys(cart).length"><span>未选购商品</span></div>
        <div class="info" v-else>
          <p>￥33.33 <s>￥55</s></p>
          bbbbbbbbbbbbbbbbbb
        </div>
      </div>
      <div class="rightBtn">
        <cube-button :primary="true" :disabled="true">去结算</cube-button>
      </div>
    </div>
    <sx-drop-ball ref="drop" :destination="destination"></sx-drop-ball>
  </div>
</template>
<script>
import sxDropBall from '../components/dropBall'
import sxInputNumber from '../components/inputNumber'
import sxPopup from '../components/popup'
import sxSearchPanel from '../components/searchPanel'
import sxSearchList from '../components/searchList'
export default {
  components: {
    sxDropBall,
    sxInputNumber,
    sxPopup,
    sxSearchPanel,
    sxSearchList
  },
  data() {
    return {
      // 所以商品
      data: [
        {
          name: '热销榜',
          type: -1,
          foods: [
            {
              id: 'pidan0',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            },
            {
              id: 'pidan1',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '😀 1111',
          type: -1,
          foods: [
            {
              id: 'pidan2',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '😀😀 11112',
          type: -1,
          foods: [
            {
              id: 'pidan3',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '😀😀😀 111123',
          type: -1,
          foods: [
            {
              id: 'pidan4',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '😁 222222',
          type: -1,
          foods: [
            {
              id: 'pidan5',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '😂 333',
          type: -1,
          foods: [
            {
              id: 'pidan6',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: '热销榜51',
          type: -1,
          foods: [
            {
              id: 'pidan7',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        },
        {
          name: ' 😃 😄4444',
          type: -1,
          foods: [
            {
              id: 'pidan8',
              stock: 15,
              name: '皮蛋瘦肉粥',
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
              num: 0
            }
          ]
        }
      ],
      current: '',
      scrollY: 0,
      // 购物车 选择的商品
      cart: {},
      // 商品列表 选择的商品 car chooseCommodity 两份相同数据 做了一层分离而已。
      chooseCommodity: {},
      // 0、暂无数据  1、商品全部展示  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      searching: 1,
      searchData: '',
      timer: ''
    }
  },
  computed: {
    destination() {
      return { top: window.innerHeight - 40, left: 45 }
    }
  },
  watch: {
    searchData () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.searchingSubmit()
      }, 200)
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      for (let i of this.data) {
        if (i['foods'].length) {for (let z of i.foods) { this.$set(this.chooseCommodity, z.id, z) }}
      }
    },
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
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    parabola(e) {
      this.$refs.drop.drop(e)
    },
    openTheShoppingCart () {
      if (!Object.keys(this.cart).length) return false
      this.$nextTick(() => {
        if (this.$refs.popup.isVisible) {
          this.$refs.popup.closePopup()
        } else {
          this.$refs.popup.openPopup()
        }
      })
    },
    closePopup () {
      this.$nextTick(() => {
        this.$refs.popup.closePopup()
      })
    },
    isMax() {
      const toast = this.$createToast({
        txt: '没了没了',
        type: 'txt'
      })
      toast.show()
    },
    clickAction(e, item, tf) {
      if (tf) {
        this.$set(this.cart, item.id, item)
        this.$refs.drop.drop(e)
      }
      if (!this.cart[item.id].num) this.$delete(this.cart, item.id)
      if (!Object.keys(this.cart).length) {
        this.$refs.popup.closePopup()
        return
      }
    },
    clearCart () {
      for (let i in this.cart) {
        this.$delete(this.cart, i)
      }
      for (let z in this.chooseCommodity) {
        this.$set(this.chooseCommodity[z], 'num', 0)
      }
      this.$refs.popup.closePopup()
    },
    focusSearch () {
      this.$router.push({name: 'search'})
      this.searching = 3
    },
    blurSearch () {
      // this.$router.push({name: 'details'})
      // this.searching = 1
      // this.$refs.scroll.refresh()
    },
    searchingSubmit () {
      console.log(this.searchData)
    },
    back () {
      this.$router.go(-1)
      this.$refs.searchInput.$refs.input.blur()
      this.searching = 1
      this.$refs.scroll.refresh()
    },
    panelIcon () {},
    getPanelCell () {},
    getListRow () {}
  },
  mounted() {}
}
</script>
<style scoped lang="scss">
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // border: 3px solid lightpink;
  & .content {
    overflow: hidden;
    flex: 1;
    // display: flex;
    position: relative;
    box-sizing: border-box;
    & .popupContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 65px;
      border-bottom: 1px solid #e8e8e8;
      padding-left: $small;
      padding-right: $small;
    }
    & .popupContent:last-child{
      border: none;
    }
    .pullup-wrapper {
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9vw;
    }
    .goodsRow {
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      background: white;
      height: 110px;
      padding: $small;
      // padding-bottom: 0;
      // padding-right: 0;
      img {
        // box-sizing: border-box;
        // padding: $medium;
        // padding-top: 0;
        height: 100%;
      }
      .goodsContent {      
        flex: 1;
        height: 100%;
        display: flex;
        padding-left: $small;
        // border-bottom: $lightgray 1px solid;
        box-sizing: border-box;
        justify-content: space-between;
        // align-content: space-around;
        flex-direction: column;
        .goodsContentTop {
          font-size: $medium;
          .abstract {
            color: $gray;
            font-size: $small;          
          }
        }
        .goodsContentBottom {
          font-size: $medium;
          color: $gray;
          display: flex;
          justify-content: space-between;
          font {
            span {
              color: $red;
            }
          }
        }
      }
    }
    & {
      // content inside
      /deep/ .cube-scroll-nav,
      /deep/ .cube-scroll-nav_side {
        width: 100%;
      }
      /deep/ .cube-scroll-nav-main {
        padding-bottom: 35px;
      }
      // right
      /deep/ .cube-scroll-nav-panel-title {
        line-height: 20px;
        font-size: 14px;
        // background: rgba(240, 239, 239, 0.88);
        background: white;
        color: $lightblack;
        padding: 10px;
      }
      /deep/ .cube-scroll-nav-panel {
        width: 100%;
      }
      // left
      /deep/ .cube-scroll-wrapper {
        width: 22vw;
        line-height: 20px;
        background: $nav;
      }
      /deep/ .cube-scroll-nav-bar-item_active {
        color: black !important;
        border-left: $primary 3px solid;
        background: white;
        font-weight: bold !important;
      }
      /deep/ .cube-scroll-nav-bar-item {
        color: $lightblack;
        padding: $small;
        box-sizing: border-box;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .noSearch {
      flex: 1;
      height: 160px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $medium;
      color: $lightblack;
      span {
        color: $gray;
        font-size: $small
      }
    }
    .searchNav {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      padding: 15px;
      .cubeic-search {
        font-size: $medium;
        padding-left: $medium;
      }
      .backIcon {
        font-size: $large;
        width: 39px;
      }
      .cube-input {
        display: flex;
        flex: 1;
        align-items: center;
      }
    }
  }
  & .isSearch {
    /deep/ .cube-scroll-wrapper {
      width: 0px;
      background: white;
      .cube-scroll-nav-bar-items {
        display: none;
      }
    }
  }
  .bottom {
    // position: fixed;
    // bottom: 0;
    // z-index: 100;
    // flex: 0.1;
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background: $lightblack;
    // background: white;
    .box {
      width: 100%;
      display: flex;
      align-items: center;
      z-index: 111;
      // left: 30px;
      // box-sizing: border-box;
      // background: white;
      .shoppingCart {
        position: relative;
        transition: all .3 ease;
        margin-left: 23px;
        margin-bottom: 34px;
        width: 55px;
        height: 55px;
        background-color: $primary;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
        i {
          font-size: 30px;
        }
        span {
          background: red;
          padding: 1.2px;
          padding-left: 6px;
          padding-right: 6px;
          font-size: 10px;
          border-radius: 43%;
          position: absolute;
          top: 5px;
          right: -3px;
        }
      }
      .info {
        flex: 1;
        padding-left: 6px;
        line-height: $default;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: 60%;
        color: $gray;
        font-size: $small;
        s {
          font-size: $small;
        }
        p {
          font-weight: bold;
          font-size: $default;
          color: white;
        }
        span {
          color: $lightgray;
        }
      }
    }
    .rightBtn {
      position: relative;
      right: 0;
      width: 30vw;
    }
  }
}
.popupLeft {
  font-size: $default;
  color: $lightblack;
  span {
    font-size: $small;
    color: $gray;
  }
}
.popupRight {
  color: $gray;
  display: flex;
  align-items: center;
  i {
    font-size: $default;
    padding-right: 6px;
  }
  font-size: $small;
}
// 过渡
.list-item {
  overflow: hidden;
  transition: all .3s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  height: 0px !important;
}
.list-leave-active {
  height: 10px;
}

// back transition
.back-enter-active, .back-leave-active {
  transition: all .3s ease;
}
.back-enter, .back-leave-to{
  width: 0px !important;
  opacity: 0;
}

// search transition
.search-enter-active, .search-leave-active {
  transition: all .3s ease;
}
.search-enter, .search-leave-to{
  height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  opacity: 0;
}
</style>
