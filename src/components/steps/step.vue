<template>
  <div :class="{
    step: true,
    stepCenter: isCenter,
  }">
    <div class="date">2017.5</div>
    <div :class="{
      stepContent: true,
      stepContentCenter: true,
      'is-finish': isFinish,
      'is-active': $parent.active === index
    }">
      <div class="icon"></div>
      <div
        class="line"
        v-if="index !== $parent.steps.length - 1"></div>
    </div>
    <div class="title">阿斯很大声建档立卡见识到了看见爱上了肯德基阿斯达所大所</div>
    <div class="description">
      啛啛喳喳错错
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  created () {
    // console.log(this.index)
  },
  computed: {
    isCenter () {
      return this.$parent.alignCenter
    },
    isFinish () {
      if (this.index < this.$parent.active) {
        return true
      }
      return false
    }
  },
  data () {
    return {
      index: null
    }
  },
  methods: {}
}
</script>


<style lang="scss" scoped>
$defaultColor: lightblue;
$activeColor: blue;
$finishColor: yellow;
.step {
  display: flex;
  flex-direction: column;
  .date {
    font-size: 5vmin;
    color: gray;
    font-weight: bold;
  }
  .stepContent {
    margin: 15px 0px;
    display: flex;
    align-items: center;
    .icon {
      border: 0.5vw solid $defaultColor;
      border-radius: 50%;
      height: 2vw;
      width: 2vw;
      position: relative;
      transition: all .3s ease-out;
    }
    .line {
      flex-grow: 1;
      height: 2px;
      background: $defaultColor;
      transition: all .3s ease-out;
    }
  }
  .title {
    margin-bottom: 16px;
  }
  .is-finish {
    .icon {
      border-color: $finishColor;
    }
    .line {
      background: $finishColor;
    }
  }
  .is-active {
    .icon {
      border-color: $activeColor;
    }
  }
}
.stepCenter {
  text-align: center;
  .stepContentCenter {
    position: relative;
    left: calc(50% - 1.25vw);
  }
}
</style>
