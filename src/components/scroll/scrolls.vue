<template>
  <div class="scrolls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      scrolls: [],
      timer: null,
      topValue: 0
    }
  },
  watch: {
    // scrolls (steps, scrollTop) {
    //   scrolls.forEach((child, index) => {
    //     child.scrollTop = scrollTop
    //   })
    // }
  },
  methods: {
    scrollGo () {
      if (!this.timer) this.timer = setInterval(this.scrollStop, 100)
      this.topValue = document.documentElement.scrollTop
    },
    scrollStop () {
      if (document.documentElement.scrollTop === this.topValue) {
        clearInterval(this.timer)
        this.timer = null
        console.log(this.scrolls)
        let input = ''
        for (let i of this.scrolls) {
          if (i.offsetTop <= this.topValue) {
            input = i.name
          } else {
            break
          }
        }
        console.log(input)
        this.$emit('input', input)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollGo)
  }
}
</script>

<style lang="scss" scoped>
.scrolls {

}
</style>
