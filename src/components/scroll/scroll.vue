<template>
  <div class="scroll" ref="scroll">
    <br>
    <br>
    <br>
    <br>
    <br>
    <button class="button">我去门口</button>
    {{name}}
    {{active}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [Number, String],
      default: null
    }
  },
  // beforeCreate() {
  //   this.$parent.scrolls.push(this, name)
  // },
  data () {
    return {}
  },
  computed: {
    active () {
      console.log(this.$parent.value === this.name, this.name)
      return this.$parent.value === this.name
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$parent.scrolls.push({this: this, offsetTop: this.$refs.scroll.offsetTop, name: this.name})
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.scroll {
  height: 300px;
  border: 1px solid lightblue;
  font-size: 16px;
  .button {
    padding: 1vmin;
    font-size: 12px;
  }
}
@media (max-width: 1080px) {
  .all {
    height: 585px;
    .hero-bg {
      background-position: center center;
    }
  }
}
@media (max-width: 640px) {

}
</style>
