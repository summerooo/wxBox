<template>
  <transition name="sx-message-fade" @after-leave="handleAfterLeave">
    <div class="sx-message" v-show="visible">
      <slot>
        <p class="sx-message__content">{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      timer: null
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    closeVisible() {
      this.visible = false
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.closeVisible()
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        this.closeVisible()
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>

<style lang="scss" scoped>
.sx-message {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 43vh;
  width: 37vw;
  font-size: 2vmax;
  font-weight: 400;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
  padding: 1.8vmax;
  word-wrap: break-word;
  background: rgba($color: #000000, $alpha: .35);
  color: white;
  border-radius: .5vmax;
}
.sx-message-fade-enter-active, .sx-message-fade-leave-active {
  transition: all .3s ease;
}
.sx-message-fade-enter, .sx-message-fade-leave-to {
  opacity: 0;
}
</style>
