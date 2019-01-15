<template>
  <div class="test">
    <sx-scrolls v-model="active">
      <sx-scroll name="11"></sx-scroll>
      <sx-scroll name="22"></sx-scroll>
      <sx-scroll name="33"></sx-scroll>
      <sx-scroll name="44"></sx-scroll>
      <sx-scroll name="55"></sx-scroll>
      <sx-scroll name="66"></sx-scroll>
    </sx-scrolls>
  </div>
</template>

<script>
import sxScrolls from '../components/scroll/scrolls'
import sxScroll from '../components/scroll/scroll'

export default {
  components: {
    sxScrolls,
    sxScroll
  },
  data () {
    return {
      active: '22'
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.test{
  height: 100%;
  border: 3px solid green;
}
</style>
