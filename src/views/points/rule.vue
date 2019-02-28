<template>
  <div class="all">
    <ul class="content" ref="ul">
      <li class="list" v-for="(row, i) in ruleListData" :key="i" ref="li">
        <header class="header">{{row.title}}</header>
        <p v-html="row.content"></p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      ruleListData: [
        {
          title: '活动内容',
          content: '活动期间，用户可在盒里有APP平台消费即可获取相应积分；当交易发生退款时，如因盒里有平台原因导致的退款，积分将不被扣除，如因用户个人原因导致的退货退款，相关积分将被扣消。如用户存在违规刷积分行为（包括但虚假交易、炒信、恶意退款），我们有权取消你获得积分的资格。'
        },
        {
          title: '具体规则',
          content: `
            1、用户使用APP 购买商品，并确定为有效订单后，根据消费的金额，可以获得积分（消费满1元得一分积分，不足1元不计入积分），消费额只计算订单实际支付金额，赠品、积分支付、优惠金额等不计算在内 。
            <br><br>2、用户在可在积分商城兑换商品，当兑换商品不超过用户账户积分总额时，方可进行兑换，否则无法兑换。
            <br><br>3、积分兑换商品完成后，将从用户的积分中扣除对应的积分，可在兑换记录查询。
            <br><br>4、使用积分进行兑换，兑换申请一经提交, 一律不能取消(除礼品缺货等特殊情况)。
            <br><br>5、兑换成功后不可退券、退抵扣运费金额、退积分，积分一旦消耗不作返还。
            <br><br>6、盒里有留最终解释权。
          `
        }
      ]
    }
  },
  methods: {},
  created () {}
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    .list {
      padding: $medium;
      height: auto;
      line-height: $large;
      .header {
        font-size: $default;
        color: $drakblack;
        margin-bottom: $mini;
      }
      p {
        font-size: $medium;
        color: $lightblack;
      }
    }
  }
}
</style>
