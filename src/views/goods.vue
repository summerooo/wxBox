<template>
  <div class="goodsAll">
    <div class="content">
      <cube-scroll-nav
        :side="true"
        :data="data"
        :current="current"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler">
        <div class="prepend-header" slot="prepend">
          aaaa
        </div>
        <cube-scroll-nav-panel
          v-for="item in data"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <li v-for="(food, key) in item.foods" :key="key">
              <div>
                <img :src="food.icon">
                <p>{{food.name}}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="bottom">
      {{current}}
      {{current}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: '热销榜',
          type: -1,
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
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
          foods: [
            {
              name: '皮蛋瘦肉粥',
              icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        }
      ],
      current: ''
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    changeHandler(label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler(current) {
      console.log('sticky-change', current)
    }
  },
  created() {}
}
</script>
<style scoped lang="scss">
.goodsAll {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & .content {
    height: calc(100% - 100px);
    border: 3px solid red;
  }
  & .bottom {
    height: 30px;
  }
  // right
  /deep/ .cube-scroll-nav-panel-title {
    line-height: 20px;
    font-size: 14px;
    background: rgba(240, 239, 239, 0.88);
    padding: 10px
  }
  /deep/ .cube-scroll-wrapper {
    width: 22vw;
    line-height: 20px;
  }
  // left
  /deep/ .cube-scroll-nav-bar-item_active {
    border-left: blue 3px solid ;
  }
  /deep/ .cube-scroll-nav-bar-item {
    padding: 15px;
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
</style>
