<template>
  <div class="all">
    <div class="content">
      <div class="container">
        <div class="searchNav" ref="searchNav">
          <transition name="back">
            <i class="cubeic-back backIcon" @click="back" v-if="![0].includes(searching)"></i>
          </transition>
          <cube-input type.native="search" ref="searchInput" v-model="searchData" @focus="focusSearch" @blur="blurSearch" @keyup.enter.native="searchingSubmit" placeholder="请输入商品名称">
            <i class="cubeic-search" slot="prepend"></i>
          </cube-input>
        </div>
        <div class="searchContent" ref="searchContent">
          <!-- <sx-scroll v-if="[0, 3].includes(searching)"></sx-scroll> -->
          <div class="left" ref="searchContentLeft" v-show="[0].includes(searching)">
            <sx-menu @select="handleSelect"></sx-menu>
          </div>
          <cube-scroll
            v-show="[0, 3].includes(searching)"
            class="right"
            ref="scroll"
            :options="options"
            @pulling-up="onPullingUp"
            :scroll-events="['scroll']"
            @scroll="scrollHandler">
            <ul class="rightDetails">
              <li v-for="(food, index) in goodsData" :key="index">
                <div class="goodsRow">
                  <img :src="food.goods_img">
                  <div class="goodsContent">
                    <div class="goodsContentTop">
                      {{food.goods_name}}
                      <div class="abstract">
                        <span>{{food.goods_spec}}</span>&nbsp;
                        <span>{{food.stock_num > 0 ? `库存${food.stock_num}${food.goods_unit}` : '已售空'}}</span>
                      </div>
                    </div>
                    <div class="goodsContentBottom">
                      <font><span>￥{{food.goods_price}}</span>/{{food.goods_unit}}</font>
                      <sx-input-number v-if="food.stock_num > 0" v-model="chooseCommodity[food.goods_id].num" :max="food.stock_num" @isMax="isMax" :item="food" @clickAction="clickAction"></sx-input-number>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </cube-scroll>
          <div >
          </div>
          <div v-if="[1].includes(searching)" class="noSearch">
            没有搜索结果
            <span>换个关键词试试吧</span>
          </div>
          <sx-search-panel @panelIcon="panelIcon" @panelCell="panelCell" v-if="[4].includes(searching)"/>
          <sx-search-list @listRow="listRow" v-if="[5].includes(searching)"/>
        </div>
      </div>
      <sx-popup ref="popup">
        <div slot="left" class="popupLeft">
          已选商品 <span>(共{{cartLength}}件商品)</span>
        </div>
        <div slot="right" class="popupRight" @click="clearCart">
          <i class="box-lajitong"></i>清空
        </div>
        <transition-group name="list">
          <div v-for="(row, i) in cart" :key="row.goods_id" :data-index="i" class="popupContent list-item">
            <div class="popupContentDetails">
              <span>{{row.goods_name}} {{row.goods_spec}}/{{row.goods_unit}}</span>
              <span>￥{{row.goods_price}}</span>
            </div>            
            <sx-input-number v-model="row.num" :max="row.stock" @isMax="isMax" :item="row" @clickAction="clickAction"></sx-input-number>
          </div>
        </transition-group>
      </sx-popup>
    </div>
    <div class="bottom">
      <div class="box"  @click="closePopup">
        <div class="shoppingCart" @click.stop="openTheShoppingCart" :style="{transition: 'all .3s ease', backgroundColor: !cartLength ? '#cccccc' : ''}">
          <i class="box-gouwuche"></i>
          <span v-show="cartLength">{{cartLength}}</span>
        </div>
        <div  class="info" v-if="!cartLength"><span>未选购商品</span></div>
        <div class="info" v-else>
          <p>￥{{cartMoney}}</p>
          满30元起配送
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
// import sxScroll from '../components/scroll'
import sxMenu from '../components/goods/menu'
import sxInputNumber from '../components/inputNumber'
import sxPopup from '../components/popup'
import sxSearchPanel from '../components/goods/searchPanel'
import sxSearchList from '../components/goods/searchList'
export default {
  components: {
    sxDropBall,
    // sxScroll,
    sxMenu,
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
      menusData: [],
      goodsData: [
        {
            "goods_id": 196,
            "goods_name": "康师傅泡面",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "金汤肥牛面250g",
            "goods_price": "21.00",
            "goods_unit": "桶",
            "stock_num": 9,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 197,
            "goods_name": "怡宝矿泉水",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "500ml",
            "goods_price": "33.00",
            "goods_unit": "瓶",
            "stock_num": 18,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 199,
            "goods_name": "眉粉",
            "goods_img": "uploads/img/goods/20190111/45cd26e945d2d5fd523a96da99534c50.jpg",
            "goods_spec": "10",
            "goods_price": "58.00",
            "goods_unit": "个人",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 200,
            "goods_name": "康师傅矿泉水",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "5L",
            "goods_price": "1.00",
            "goods_unit": "桶",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 201,
            "goods_name": "护手霜",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "20g",
            "goods_price": "20.00",
            "goods_unit": "个",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 205,
            "goods_name": "粉底",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "10g",
            "goods_price": "2.00",
            "goods_unit": "个",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 207,
            "goods_name": "护手霜",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "566g",
            "goods_price": "33.00",
            "goods_unit": "个",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 208,
            "goods_name": "珠宝",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "规格",
            "goods_price": "2.00",
            "goods_unit": "个",
            "stock_num": 3,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 209,
            "goods_name": "玻璃杯",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "43g",
            "goods_price": "2.00",
            "goods_unit": "个",
            "stock_num": -1,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 210,
            "goods_name": "怡宝矿泉水",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "1L",
            "goods_price": "1.00",
            "goods_unit": "瓶",
            "stock_num": 9,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 214,
            "goods_name": "康师傅泡面",
            "goods_img": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            "goods_spec": "香菇炖鸡面500g",
            "goods_price": "4.00",
            "goods_unit": "桶",
            "stock_num": 9,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 215,
            "goods_name": "康师傅泡面",
            "goods_img": "uploads/img/goods/20190108/527f23f908fedad4ea0acfc2cf063dbb.jpg",
            "goods_spec": "香辣牛肉面800g",
            "goods_price": "4.00",
            "goods_unit": "桶",
            "stock_num": 9,
            "on_sale": 1,
            "freeze_num": 1
        },
        {
            "goods_id": 216,
            "goods_name": "康师傅泡面",
            "goods_img": "uploads/img/goods/20190108/9163be12b203c398c7678c6f05d53dc5.jpg",
            "goods_spec": "香辣牛肉面150g",
            "goods_price": "5.00",
            "goods_unit": "桶",
            "stock_num": 9,
            "on_sale": 1,
            "freeze_num": 1
        } 
      ],
      options: {
        pullUpLoad: true
      },
      current: '',
      scrollY: 0,
      // 购物车 选择的商品  num 不为 0的 商品
      cart: {},
      // 商品列表 选择的商品 cart 与 chooseCommodity  是全部商品id + num 后的对象
      chooseCommodity: {},
      // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      searching: 0,
      searchData: '',
      timer: ''
    }
  },
  computed: {
    destination() {
      return { top: window.innerHeight - 40, left: 45 }
    },
    cartLength () {
      return Object.keys(this.cart).length
    },
    cartMoney () {
      let money = 0
      for (let i in this.cart) {
        money += this.cart[i].goods_price * this.cart[i].num
      }
      return money
    }
  },
  watch: {
    searchData () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.searchingSubmit()
      }, 200)
    },
    '$route' () {
      this.routerInit()
    }
  },
  created() {
    this.routerInit()
    this.init()
  },
  methods: {
    routerInit () {
      // 0、商品全部展示  1、暂无数据  2、开始搜索  3、 搜索（无nav） 4、搜索面板  5、搜索列表(输入后)
      let index = this.$route.name.match(/\d+/g) ? this.$route.name.match(/\d+/g) : []
      if (!index.length) index[0] = 0
      this.searching = Number(index[0])
    },
    init () {
      for (let i of this.goodsData) {
        this.$set(this.chooseCommodity, i.goods_id, Object.assign({}, i, { num: 0 }))
      }
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    handleSelect (item, index) {
      console.log(item, index)
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
      console.log('111')
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1111)
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
        console.log(item, 'item')
        this.$set(this.cart, item.goods_id, this.chooseCommodity[item.goods_id])
        // this.$refs.drop.drop(e)
      }
      if (!this.cart[item.goods_id].num) this.$delete(this.cart, item.goods_id)
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
      this.$router.push({name: 'goodsDetails1'})
      // this.$router.push({name: 'search'})
    },
    blurSearch () {
      // this.searching = 1
      // this.$router.push({name: 'details'})
      // this.searching = 1
      // this.$refs.scroll.refresh()
    },
    searchingSubmit () {
      console.log(this.searchData)
    },
    back () {
      this.$router.push({name: 'goodsDetails'})
      // this.$router.go(-1)
      // this.$refs.searchInput.$refs.input.blur()
      // this.$refs.scroll.refresh()
    },
    panelIcon () {},
    panelCell () {},
    listRow () {}
  },
  mounted() {
    // this.$refs.searchContentLeft.style.height = `${this.$refs.searchContent.offsetHeight + this.$refs.searchNav.offsetHeight}px`
  }
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
  & .content {
    overflow: hidden;
    flex: 1;
    overflow: auto;
    // display: flex;
    position: relative;
    box-sizing: border-box;
    & .popupContent {
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #e8e8e8;
      padding-left: $small;
      padding-right: $small;
      color: $drakblack;
      font-size: $medium;
      .popupContentDetails {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span:nth-child(2) {
          color: $red;
        }
      }
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
  }
  & .content .container {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .noSearch {
      flex: 1;
      height: 160px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $medium;
      color: $lightblack;
      line-height: $large;
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
      padding: $medium;
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
    .searchContent {
      height: 100%;
      display: flex;
      .left {
        height: 100%;
        width: 22vw;
        background: $nav;
      }
      .right {
        flex: 1;
        height: 100%;
        .goodsRow {
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          background: white;
          height: 110px;
          padding: $small;
          img {
            width: 90px;
          }
          .goodsContent {      
            flex: 1;
            height: 100%;
            display: flex;
            padding-left: $small;
            box-sizing: border-box;
            justify-content: space-between;
            flex-direction: column;
            .goodsContentTop {
              font-size: $medium;
              line-height: $large;
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
      }
    }
  }
  & .isSearch {

  }
  .bottom {
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background: $lightblack;
    .box {
      width: 100%;
      display: flex;
      align-items: center;
      .shoppingCart {
        position: relative;
        z-index: 111;
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
