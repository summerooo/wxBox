<template>
  <transition-group name="list">
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // beforeEnter (el) {
    //   console.log('eeeee')
    // }
    // enter (el, done) {
    //   console.log('eeeeetttt')
    //   el.style.height = 50 + 'px'
    //   el.style.opacity = 1
    //   done()
    // },
    // afterEnter (el, done) {
    //   console.log(el, done, 'aaaa')
    // },
    // leave (el, done) {
    //   el.style.opacity = 0
    //   el.style.height = 0
    //   console.log(el, done, 'lllllll')
    //   done()
    // }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  overflow: hidden;
  transition: all .3s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  height: 0px !important;
}
.list-leave-active {
  height: 10px;
}
</style>
