<template>
  <div class="steps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default () {
        return 0
      }
    },
    alignCenter: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  watch: {
    steps (steps) {
      steps.forEach((child, index) => {
        child.index = index
      })
    }
  },
  data () {
    return {
      steps: []
    }
  }
}
</script>


<style lang="scss" scoped>
.steps {
  display: flex;
  width: 100%;
  overflow: hidden;
}
</style>
