<template>
  <div class="chooseSchool">
    <div class="searchNav" v-if="$route.name === 'chooseSchool0'">
      <cube-input v-model="searchData" type="search" :autofocus="true" @keyup.enter.native="searchingSubmit" placeholder=" 搜索大学" >
        <i class="cubeic-search" slot="prepend"></i>
      </cube-input>
    </div>
    <div class="subNav" v-if="$route.name === 'chooseSchool0'">
      所在位置: {{position ? position : '选择地区'}}
      <span @click="changePosition">更改</span>
    </div>
    <ul class="content">
      <li class="list" v-for="(row, i) in listData[index]" :key="i" @click="listClick(row, i)">
        {{row.area_name ? row.area_name : row.school_name ? row.school_name : ''}}
        <i class="cubeic-ok" v-if="i === acitveIndex"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { area, schoolList } from '@/api/info'
import { authority, options, getLocation } from '../../api/wx'
import wx from 'weixin-js-sdk'

export default {
  props: {
    value: {
      type: [String, Number],
      default () {
        return ''
      }
    },
    id: null
  },
  data () {
    return {
      position: '',
      // 0学校    省市区 1 2 3 
      listData: [],
      listModels: [],
      index: 0,
      acitveIndex: 0,
      searchData: '',
      wxData: null
    }
  },
  watch: {
    '$route' () {
      this.routerInit()
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  created() {
    console.log(this.id)
    console.log(wx)
    // http://localhost:8088/buyGoods?box_no=FF541857
    console.log(this.$route.query)
    this.wxData = sessionStorage.getItem('wxData')
    if (this.wxData) this.firstShow()
  },
  methods: {
    ...mapMutations([
      'setSchool'
    ]),
    // async firstShow() {
    //   this.schoolList(this.listModels[2] ? this.listModels[2].area_id : '', '')
    // },
    async firstShow () {
      let a = await authority(Object.assign({}, { user_id: this.user.user_id }, JSON.parse(this.wxData)))
      console.log(a)
      let redirectUrl = location.href
      let that = this
      let o = await options({token: a.data.return_data.token, url: redirectUrl})
      wx.config(Object.assign({}, o.data.return_data.config))
      wx.ready(function () {
        wx.getLocation({
          type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          async success (res) {
            console.log(res, 'location')
            // const { latitude, longitude, speed, accuracy } = res
            // console.log()
            let gl = await getLocation(res)
            const { province, city, district, adcode } = gl.return_data
            that.position = `${province}${city}${district}`
            that.schoolList(adcode, '')
          },
					fail () {
            that.$createToast({
              txt: '获取地址失败，请手动选择',
              type: 'txt'
            }).show()
          }
        })
      })
      // wx.error(function (res) {
      //   sessionStorage.removeItem('wxData')
      //   this.getLocation()
      // })
      // wx.config({
      //   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      //   appId: res.data.config.appId, // 必填，公众号的唯一标识
      //   timestamp:res.data.config.timestamp , // 必填，生成签名的时间戳
      //   nonceStr: res.data.config.nonceStr, // 必填，生成签名的随机串
      //   signature:res.data.config.signature ,// 必填，签名
      //   jsApiList: res.data.config.jsApiList // 必填，需要使用的JS接口列表
      // })
    },
    routerInit () {
      // 默认 0， 省 1， 市 2， 区 3
      let index = this.$route.name.match(/\d+/g) ? this.$route.name.match(/\d+/g) : []
      this.index = Number(index[0])
      setTimeout(() => {
        this.acitveIndex = 0
      }, 100)
    },
    async setListData (rowId = 0, i = 1) {
      // if (this.listData[i]) return
      let a = await area({area_id: rowId})
      this.$set(this.listData, i, a.data.return_data)
      console.log(this.listData)
    },
    changePosition () {
      let that = this
      this.$createDialog({
        type: 'confirm',
        title: '提示',
        content: '是否重新选择地区？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.acitveIndex = 0
          this.setListData()
          that.$router.push({name: `chooseSchool1`})
        },
        onCancel: () => {}
      }).show()
    },
    searchingSubmit () {
      this.schoolList('', this.searchData)
    },
    async listClick (row, i) {
      this.acitveIndex = i
      switch (this.index) {
        case 0:
          this.setSchool(row)
          this.$router.replace({name: 'info'})
          break
        default:
          this.$set(this.listModels, this.index - 1, row)
          if (this.index === 3) {
            this.position = `${this.listModels[0].area_name} ${this.listModels[1].area_name} ${this.listModels[2].area_name}`
            this.schoolList(this.listModels[2] ? this.listModels[2].area_id : '', '')
            this.$router.push({name: `chooseSchool0`})
          }
          else {
            this.setListData(row['area_id'], this.index + 1)
            setTimeout(() => {
              this.$router.push({name: `chooseSchool${this.index + 1}`})
            }, 100)
          }
          break
      }
      console.log(this.listModels, 'models')
    },
    async schoolList (areaId, schoolName) {
      let sl = await schoolList({area_id: areaId, school_name: schoolName})
      this.$set(this.listData, 0, sl.data.return_data)      
    }
  },
  
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';

.chooseSchool {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .searchNav {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
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
  .subNav {
    display: flex;
    justify-content: space-between;
    font-size: $medium;
    margin-top: $default;
    margin-bottom: $default;
    span {
      color: $primary;
    }
  }
  .content {
    font-size: $medium;
    height: 100%;
    overflow: auto;
    .list {
      height: 36px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        color: $primary;
        font-size: $large;
      }
    }
  }
  // justify-content: flex-start;
  // border: 3px solid red;
}
</style>
