<template>
  <div class="all">
    <footer class="footerMsg">
      {{!recordListData.length ? '暂无数据' : ''}}
    </footer>
    <ul class="content" ref="ul">
      <li class="list" v-for="(row, i) in recordListData" :key="i" ref="li">
        <aside class="aside">
          {{row.goods_name}}
          <font>{{row.exchange_time}}</font>
        </aside>
        -{{row.use_point}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { shopExchangeRecords } from '@/api/points'

export default {
  data () {
    return {
      recordListData: [],
      page: 1,
      flag: true
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    async show () {
      let sd = await shopExchangeRecords(Object.assign({}, this.user, this.row, { page: this.page }))
      console.log(sd)
      if (!sd.data.return_data.length) this.flag = false
      else this.recordListData = this.recordListData.concat(sd.data.return_data)
    },
    scrollHandler () {
      if ((this.$refs.ul.scrollTop + this.$refs.ul.offsetHeight + 5) >= this.$refs.ul.scrollHeight) {
        if (!this.flag) return this.$createToast({txt: '无更多信息', type: 'txt', time: 1000}).show()
        this.page++
        this.show()
      }
    },
  },
  created () {
    console.log(this.$route.query)
    if ('row' in this.$route.query) this.row = JSON.parse(this.$route.query.row)
    else this.row = this.$route.query
    this.show()
  },
  mounted () {
    this.$refs.ul.addEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  .content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    font-size: $default;
    color: $drakblack;
    padding: $mini;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $nav;
      padding: $mini;
      .aside {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 55px;
        font {
          font-size: $medium;
          color: $lightgray;
        }
      }
    }
  }
  .footerMsg {
    width: 100%;
    font-size: $medium;
    color: $lightblack;
    text-align: center;
    padding: $large;
  }
}
</style>
