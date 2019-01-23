<template>
  <div class="chooseSchool">
    <div class="searchNav">
      <cube-input v-model="searchData" type="search" :autofocus="true" @keyup.enter.native="searchingSubmit" placeholder=" 搜索宿舍" >
        <i class="cubeic-search" slot="prepend"></i>
      </cube-input>
    </div>
    <ul class="content" ref="ul">
      <li class="list" v-for="(row, i) in listData[index]" :key="i" @click="listClick(row, i)" ref="li">
        {{row.floor_name ? row.floor_name : row.hostel_name ? row.hostel_name : ''}}
        <i class="cubeic-ok" v-if="i === acitveIndex"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { floorList, hostelList } from '../../api/info'
export default {
  props: {
    value: {
      type: [String, Number],
      default () {
        return ''
      }
    }
  },
  computed: {
    ...mapState([
      'school'
    ])
  },
  data () {
    return {
      position: '',
      listData: [],
      listModels: [],
      index: 0,
      acitveIndex: 0,
      searchData: '',
      page: 1,
      flag: true
    }
  },
  watch: {
    '$route' () {
      this.routerInit()
    }
  },
  created() {
    this.firstShow()
  },
  methods: {
    ...mapMutations([
      'setDormitory'
    ]),
    async firstShow () {
      this.page = 1
      const toast = this.$createToast({time: 0})
      await this.getFloorList()
      toast.hide()
    },
    async getFloorList () {
      this.listData[0] ? this.listData[0] : this.$set(this.listData, 0, [])
      let fl = await floorList({school_id: this.school.school_id, page: this.page, floor_name: this.searchData})
      this.$set(this.listData, 0, this.listData[0].concat( fl.data.return_data ))
    },
    async getHostelList () {
      this.listData[1] ? this.listData[1] : this.$set(this.listData, 1, [])
      let fl = await hostelList({floor_id: this.listModels[0].floor_id, hostel_name: this.searchData})
      this.$set(this.listData, 1, this.listData[1].concat( fl.data.return_data ))
    },
    routerInit () {
      // 默认楼号 0， 几零几 1
      let index = this.$route.name.match(/\d+/g) ? this.$route.name.match(/\d+/g) : []
      this.index = Number(index[0])
      setTimeout(() => {
        this.acitveIndex = 0
      }, 100)
    },
    searchingSubmit (index = 0) {
      switch (index) {
        case 0:
          this.getFloorList()
          break
        case 1:
          this.getHostelList()
          break
      }
    },
    async listClick (row, i) {
      this.acitveIndex = i
      this.$set(this.listModels, this.index, row)
      console.log(this.index, 'this.indexthis.indexthis.index')
      switch (this.index) {
        case 0:
          await this.$router.push({name: `chooseDormitory1`})
          this.searchingSubmit(1)
          break
        case 1:
          this.setDormitory(this.listModels)
          this.$router.push({name: `info`})
          break
      }
      this.page = 1
    },
    scroll () {
      console.log(this.$refs.ul.scrollTop + this.$refs.ul.offsetHeight)
      console.log(this.$refs.ul.scrollHeight)
      if (!this.flag) return
      if ((this.$refs.ul.scrollTop + this.$refs.ul.offsetHeight + 5) >= this.$refs.ul.scrollHeight) {
        this.pullUpLoad()
      }
    },
    async pullUpLoad () {
      this.flag = false
      const toast = this.$createToast({time: 0})
      toast.show()
      this.page++
      await this.searchingSubmit()
      toast.hide()
      this.flag = true
    }
  },
  mounted () {
    this.$refs.ul.addEventListener('scroll', this.scroll)
  }
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
