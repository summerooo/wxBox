<template>
  <div class="all">
    <header class="header">
      常见问题
    </header>
    <ul class="container">
      <li class="fatherLi" v-for="(row, index) in questionData" :key="index">
        <aside class="aside">
          <img :src="imgSrc[row.type]" alt="">
          {{row.type}}
        </aside>
        <ul class="content">
          <li class="sonLi" v-for="(cell, i) in row.question" :key="i" @click="viewAnswer(cell)">
            {{cell.question_title}}
          </li>
        </ul>
      </li>
    </ul>
    <a :href="'tel:' + phone" class="call">
      <img src="../../assets/images/kefu/kefu_dianhua.png" alt="">
    </a>
  </div>
</template>

<script>
import { questionList } from '../../api/customerService'

export default {
  data () {
    return {
      questionData: [],
      phone: '',
      imgSrc: {
        '注册及申领问题': require('../../assets/images/kefu/kefu_zhuce.png'),
        '订单问题': require('../../assets/images/kefu/kefu_dingdan.png'),
        '支付问题': require('../../assets/images/kefu/kefu_zhifu.png'),
        '物流配送问题': require('../../assets/images/kefu/kefu_wuliu.png'),
        '售后问题': require('../../assets/images/kefu/kefu_shouhou.png')
      }
    }
  },
  created () {
    this.firstShow()
  },
  methods: {
    async firstShow () {
      let q = await questionList()
      this.questionData = q.data.return_data.service_question
      this.phone = q.data.return_data.service_phone.phone
      console.log(q)
    },
    viewAnswer (row) {
      console.log(row)
      this.$router.push({name: 'answer', query: {row: JSON.stringify(row)}})
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  .header {
    padding: $default;
    border-bottom: 1px solid $darkwhite;
  }
  .container {
    height: calc(100% - 60px);
    width: 100%;
    .fatherLi {
      padding: $mini;
      display: flex;
      width: 100%;
      max-height: 160px;
      border-bottom: 1px solid $darkwhite;
      .aside {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 40%;
        font-size: $default;
        img {
          padding-bottom: $mini;
          width: 33px;          
        }
      }
      .content {
        width: 60%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        border-left: 1px solid $darkwhite;
        .sonLi {
          border-bottom: 1px solid $darkwhite;
          width: 100%;
          padding: $mini;
          font-size: $medium;
          line-height: $medium;
        }
        .sonLi:last-child {
          border: 0px;
        }
      }
    }
    .fatherLi:last-child {
      border: 0px;
    }
  }
  .call {
    width: 100%;
    // border: 3px solid red;
    background: white;
    position: fixed;
    bottom: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 70%;
    }
  }
}

</style>
