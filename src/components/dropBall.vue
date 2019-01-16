<template>
  <div class="balls">
    <transition-group name="ball" tag="div" @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
      <div class="ball" ref="ball" v-for="(item) in balls" :key="item.i" v-show="item.show"></div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      balls: [],
      i: 0
    }
  },
  methods: {
    async drop(el) {
      this.balls.push({ show: false, el: el, i: this.i })
      this.i++
      for (let i of this.balls) {
        if (!i.show) {
          i.show = true
          break
        }
      }
    },
    beforeEnter(el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        console.log(ball.show)
        if (ball.show) {
          el.style.top = `${ball.el.y - 10}px`
          el.style.left = `${ball.el.x - 10}px`
          break
        }
      }
    },
    enter(el, done) {
      setTimeout(() => {
        this.$nextTick(() => {
          el.style.top = `${this.destination ? this.destination.top : window.innerHeight * 0.8}px`
          el.style.left = `${this.destination ? this.destination.left : window.innerWidth - window.innerWidth * 0.8}px`
          el.addEventListener('transitionend', done)
        })
      }, 20)
    },
    afterEnter() {
      let ball = this.balls.shift()
      if (ball) {
        ball.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variable.scss';
.ball {
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: $primary;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate3d(0, 0, 0);
  transition: 0.4s top cubic-bezier(0.33, -0.75, 0.88, 0.33),
    0.4s left cubic-bezier(0, 0, 0, 0);
}
</style>
