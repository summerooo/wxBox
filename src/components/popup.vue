<template>
  <div class="popup" ref="popup">
    <transition name="fade-modal" @after-leave="afterLeave">
      <div v-show="isVisible" @click="closePopup" :style="{background: modal ? 'rgba(0, 0, 0, .6)' : 'transparent'}" class="popupModal"></div>
    </transition>
    <div class="container" ref="container">
      <div class="yellowBar" ref="yellowBar" v-show="barbar">
        <slot name="bar">
          <!-- yellow bar -->
        </slot>
      </div>
      <!-- <transition name="slide-fade"  v-show="popupTf"> -->
      <div class="inside" ref="inside"  @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <div class="contain">
          <div class="top">
            <slot name="left"><div>title</div></slot>
            <slot name="right">right</slot>
          </div>
          <div class="content" ref="content">
            <slot></slot>
          </div>
        </div>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default() {
        return false
      }
    },
    modal: {
      type: Boolean,
      default() {
        return true
      }
    },
    refurbish: {
      type: null
    },
    bar: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      popupTf: false,
      isVisible: this.visible,
      timer: null,
      touchstartData: {},
      touchmoveData: {},
      touchendData: {},
      thatOffsetTop: null,
      barbar: false
    }
  },
  watch: {
    bar (val) {
      this.barbar = val
      this.openPopup()
      this.closePopup()
    }
  },
  mounted () {
    this.refurbishH()
  },
  methods: {
    refurbishH () {
      this.$refs.popup.style.height = `${this.$refs.yellowBar.offsetHeight}px`
      this.$refs.container.style.height = this.$refs.container.offsetHeight + 'px'
      this.$refs.container.style.transform = `translateY(${this.$refs.inside.offsetHeight}px)`
      this.$refs.container.style.transition = `none`
    },
    openPopup () {
      // this.popupTf = true
      this.isVisible = true
      console.log('111')
      this.$nextTick(() => {
        if (this.timer) clearTimeout(this.timer)
        this.$refs.container.removeAttribute('style')
        this.$refs.container.style.transition = `all .3s ease`
        this.$refs.popup.style.height = `100%`
        this.$refs.container.style.transform = `translateY(0px)`
      })
    },
    closePopup () {
      if (this.isVisible) {
        this.$nextTick(() => {
          this.$refs.container.style.transition = `all .3s ease`
          this.$refs.container.style.height = this.$refs.container.offsetHeight + 'px'
          this.$refs.container.style.transform = `translateY(${this.$refs.inside.offsetHeight}px)`
          this.timer = setTimeout(() => {
            this.$refs.popup.style.height = `${this.$refs.yellowBar.offsetHeight}px`
          }, 300)
          this.isVisible = false
        })
      }
    },
    afterLeave() {
      this.popupTf = false
    },
    touchstart (e) {
      this.thatOffsetTop = this.$refs.container.offsetTop
      this.$set(this.touchstartData, 'y', e.changedTouches[0].clientY)
      // this.$set(this.touchstartData, 't', e.timeStamp)
    },
    touchmove (e) {
      e.preventDefault()
      this.$set(this.touchmoveData, 'y', e.changedTouches[0].clientY)
      // this.$set(this.touchmoveData, 't', e.timeStamp)
      if (this.touchmoveData.y - this.touchstartData.y > 0) {
        // 下
        if (this.$refs.content.scrollTop != 0){
          this.$set(this.touchstartData, 'y', e.changedTouches[0].clientY)
          return
        }
      } else {
        // 上
        if (this.$refs.content.scrollHeight - this.$refs.content.scrollTop === this.$refs.inside.clientHeight) return
        if (this.touchmoveData.y - this.touchstartData.y  < 0) return
      }
      this.$refs.container.style.transition = `none`
      this.$refs.container.style.transform = `translateY(${this.touchmoveData.y - this.touchstartData.y}px)`
      return
    },
    touchend (e) {
      this.$set(this.touchendData, 'y', e.changedTouches[0].clientY)
      // this.$set(this.touchendData, 't', e.timeStamp)
      if (this.touchendData.y - this.touchstartData.y > this.$refs.container.offsetHeight / 2) {
        // 下
        this.closePopup()
      } else {
        this.openPopup()
        // 上
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.popup {
  // align-self: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  // height: 100%;
  // border: 3px solid lightsalmon;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;
  // bottom: 49px;
  & .popupModal {
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
  }
  & .container {
    transition: all .3s ease;
    align-self: flex-end;
    flex: 1;
     & .yellowBar {
      background: $lightprimary;
      opacity: .9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 33px;
      font-size: $small;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    & .inside {
      z-index: 111;
      width: 100%;
      // min-height: 130px;
      // padding: 10px;
      display: flex;
      box-sizing: border-box;
      justify-content: center;
      align-self: flex-end;
      background: white;
      // padding-top: 15px;
      padding-bottom: 25px;
      & .contain {
        flex: 1;
        align-self: center;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        & .top {
          padding-left: $default;
          padding-right: $default;
          background: $nav;
          display: flex;
          align-items: center;
          height: 50px;
          justify-content: space-between;
        }
        & .content {
          min-height: 50px;
          max-height: 350px;
          overflow: auto;
        }
      }
    }
  }
  
  & {
    .fade-modal-enter-active {
      transition: all .3s ease;
    }
    .fade-modal-leave-active {
      transition: all .3s ease;
    }
    .fade-modal-enter,
    .fade-modal-leave-to {
      // transform: translateY(23%);
      // transform: translateY(100%);
      opacity: 0;
    }

    .slide-fade-enter-active {
      // height: 26%;
      transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
      // position: relative;
      // transform: translateX(10px);
      transition: all 0.3s ease;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateY(100%);
      bottom: 100%;
      // top: 0;
      opacity: 0;
    }
  }
}

</style>
