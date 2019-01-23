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
import { mapMutations } from 'vuex'
import { area, schoolList } from '@/api/info'
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
      searchData: ''
    }
  },
  watch: {
    '$route' () {
      this.routerInit()
    }
  },
  created() {
    console.log(this.id)
  },
  methods: {
    ...mapMutations([
      'setSchool'
    ]),
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
      this.schoolList(this.listModels[2] ? this.listModels[2].area_id : '', this.searchData)
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
            this.searchingSubmit()
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
