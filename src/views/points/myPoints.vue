<template>
  <div class="all" ref="ul">
    <header class="header">
      <div>
        可用积分
        <p>{{user.point ? user.point : 2480}}</p>
      </div>
    </header>
    <br><br>
    <div class="content">
      积分记录
      <ul  v-if="integralListData.length">
        <li class="list" v-for="(row, i) in integralListData" :key="i" ref="li">
          <aside class="aside">
            {{row.log_desc}}
            <font>{{row.create_time}}</font>
          </aside>
          {{row.type === 2 ? '-' : '+'}}{{row.point}}
        </li>
      </ul>
    </div>
    <footer class="footerMsg">
      {{!integralListData.length ? '暂无数据' : ''}}
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { integral } from '@/api/points'

export default {
  data () {
    return {
      integralListData: [],
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
    ...mapMutations([
      'setUser'
    ]),
    async show () {
      let sd = await integral(Object.assign({}, this.user, this.$route.query, { page: this.page, type: 3 }))
      console.log(sd)
      if (!sd.data.return_data.length) this.flag = false
      else this.integralListData = this.integralListData.concat(sd.data.return_data)
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
    if (!this.$route.query['login_token'] && !this.user['login_token']) {
      sessionStorage.removeItem('user')
      return this.$createToast({ txt: '数据缺失,请重新登录', type: 'txt', time: 1000 }).show()
    }
    if (this.$route.query['login_token']) this.setUser(Object.assign({}, this.$route.query))
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
  overflow-y: auto;
  padding: $medium;
  .header {
    width: 100%;
    div {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      line-height: 39px;
      box-shadow: 0px 0px 5px $lightgray;
      border-radius: 6px;
      color: $primary;
      font-size: $large;
      p {
        font-size: 39px;
        font-weight: bold;
      }
    }
  }
  .content {
    width: 100%;
    height: auto;
    font-size: $large;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $nav;
      padding-top: $mini;
      .aside {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 55px;
        font-size: $default;
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
