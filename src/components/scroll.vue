<template>
  <div ref="scroll" class="all">
    <div ref="content" class="content">
      <slot>
        <div v-for="i in 300" :key="i">
          {{i}} = {{i}} = {{i}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startData: {},
      moveData: {},
      endData: {},
      thatOffsetTop: null
    }
  },
  methods: {
    init () {
      this._click(this.$refs.content)
      if (!sessionStorage.getItem('device')) {
        for (let d of ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']) {
          if (navigator.userAgent.includes(d)) {
            sessionStorage.setItem('device', d)
            break
          }
        }
      }
      let device = sessionStorage.getItem('device')
      console.log(device)
      if (device) return this._touch(this.$refs.content)
      this._mouse(this.$refs.content)
    },
    _scroll(e) {
      console.log(e.type)
      switch (e.type) {
        case 'touchstart':
        case 'mousedown':
          this._start(e)
          break
        case 'touchmove':
        case 'mousemove':
          this._move(e)
          break
        case 'touchend':
        case 'mouseup':
        case 'touchcancel':
        case 'mousecancel':
          this._end(e)
          break
        case 'click':
          e.preventDefault()
          e.stopPropagation()
          break
      }
    },
    addEvent(el, type, fn) {
      el.addEventListener(type, fn, false)
    },
    removeEvent(el, type, fn) {
      el.removeEventListener(type, fn, false)
    },
    _touch (el) {
      let arr = ['touchstart', 'touchmove', 'touchend', 'touchcancel']
      for (let i of arr) {
        this.addEvent(el, i, this._scroll)
      }
    },
    _mouse (el) {
      let arr = ['mousedown', 'mousemove', 'mouseup', 'mousecancel']
      for (let i of arr) {
        this.addEvent(el, i, this._scroll)
      }
    },
    _click (el) {
      this.addEvent(el, 'click', this._scroll)
    },
    _start (e) {
      this.$set(this.startData, 'y', e.changedTouches[0].clientY - this.thatOffsetTop)
      this.$set(this.startData, 'yy', e.changedTouches[0].clientY)
      this.$set(this.startData, 't', e.timeStamp)
      console.log(e.changedTouches[0].clientY, this.startData.y)
    },
    _move (e) {
       this.$set(this.moveData, 'y', e.changedTouches[0].clientY)
      // this.$set(this.moveData, 't', e.timeStamp)
      this.setPos(this.moveData.y - this.startData.y)
      return
    },
    _end (e) {
      console.log(e.changedTouches[0].clientY, 'e.changedTouches[0].clientY')
      this.$set(this.endData, 'y', e.changedTouches[0].clientY)
      this.$set(this.endData, 't', e.timeStamp)
      this.thatOffsetTop = this.endData.y - this.startData.y
      let time = this.endData.t - this.startData.t
      if (time > 300) return
      let speed = (this.endData.y - this.startData.yy) / time * 15
      // let f = 0
      // console.log(this.startData.y, this.endData.y)
      // let inertia = () => {
      //   // this.setPos(this.thatOffsetTop += speed)

      //   // this.$refs.content.style.transform = `translateY(${this.thatOffsetTop += speed}px)`
      //   // console.log(speed)
      //   // console.log(Math.abs(this.thatOffsetTop) >= this.$refs.content.scrollHeight - this.$refs.scroll.clientHeight)
      //   // if (Math.abs(this.thatOffsetTop) >= this.$refs.content.scrollHeight - this.$refs.scroll.clientHeight) return speed = 0
      // }
      // inertia()
    },
    setPos (y) {
      this.$refs.content.style.transform = `translateY(${y}px)`
    }
  },
  mounted() {
   this.init() 
  }
}
</script>

<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 3px solid lightblue;
  .content {
    border: 3px solid lightcoral;
  }
}
</style>
