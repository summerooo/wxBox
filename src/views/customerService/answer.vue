<template>
  <div class="all">
    <header class="header">{{answerData.question_title}}</header>
    <div v-html="answerData.answer"></div>
  </div>
</template>

<script>
import { questionAnswer } from '../../api/customerService'

export default {
  data () {
    return {
      answerData: {}
    }
  },
  created () {
    this.firstShow()
  },
  methods: {
    async firstShow () {
      let q = await questionAnswer({question_id: JSON.parse(this.$route.query.row).question_id})
      this.answerData = q.data.return_data
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>

.all {
  width: 100%;
  height: 100%;
  padding: $large;
  overflow: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .header {
    font-size: $large;
    margin-bottom: $large;
  }
  div {
    font-size: $default;
  }
}

</style>
