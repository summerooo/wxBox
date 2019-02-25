<template>
  <div class="all">
    <img src="../assets/images/logo.jpg" alt="">
    <div v-html="agreementContent"></div>
  </div>
</template>

<script>
import { agreement } from '../api/agreement.js'
export default {
  data () {
    return {
      agreementContent: ''
    }
  },
  methods: {
    async getAgreement () {
      let a = await agreement({type: 1})
      this.agreementContent = a.data.return_data.protocol_content
    }
  },
  created () {
    this.getAgreement()
  }
}
</script>

<style lang="scss" scoped>

.all {
  width: 100%;
  padding: 30px;
  font-size: $default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 55%;
    align-self: center;
  }
  div {
    line-height: $large;
  }
}
</style>
