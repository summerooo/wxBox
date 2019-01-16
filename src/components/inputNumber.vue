<template>
  <div class="inputNumber">
    <transition name="slide-fade">
      <i  @click="reduce" v-show="val > 0" class="reduce box-minus-circle"></i>
    </transition>
    <transition name="slide-fade">
      <span v-show="val > 0">
        {{val}}
      </span>
    </transition>
    <i class="increase cubeic-add" @click="increase($event)"></i>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    max: {
      type: Number,
      default () {
        return 10
      }
    },
    item: null,
    value: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  methods: {
    async reduce (e) {
      if (this.disabled) return
      if (0 >= this.val) {
        // this.$emit('isMax')
        return
      }
      this.val--
      await this.$emit('input', this.val)
      this.$emit('clickAction', e, this.item, false)
    },
    async increase (e) {
      if (this.disabled) return
      if (this.max <= this.val) {
        this.$emit('isMax')
        return
      }
      this.val++
      await this.$emit('input', this.val)
      this.$emit('clickAction', e, this.item, true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
.inputNumber {
  // border: 3px solid yellow;
  width: 95px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  span {
    // width: 16px;
    min-width: 16px;
    text-align: center;
    margin-left: 6px;
  }
  i {
    margin-left: 6px;
    color: $primary;
    font-size: 26px;
  }
  .reduce {}
  .increase {}
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    position: relative;
    // transform: translateX(10px);
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(15px) rotate(360deg);
    opacity: 0;
  }
}
</style>
