<template>
  <div class="about">
    <cube-button>2333</cube-button>
    <input type="file" @change="bb"/>
    <div class="a">
      aaaaa
    </div>
    <div class="b">
      aaaaa
    </div>
    <sx-steps :active="stepsActive" alignCenter>
      <sx-step ></sx-step>
      <sx-step ></sx-step>
      <sx-step ></sx-step>
    </sx-steps>
        <!-- <cube-button>Button</cube-button> -->

    <button @click="nextStep">nextStep</button>

  </div>
</template>

<script>
// import { test } from '../api/what/test.js'
import sxSteps from '../components/steps/steps'
import sxStep from '../components/steps/step'
export default {
  components: {
    sxSteps,
    sxStep
  },
  data () {
    return {
      c: [{ a: 2 }, { b: 3 }],
      stepsActive: 0
    }
  },
  created () {},
  mounted () {
    // console.log(this.$md5('111'))
    this.cc()
  },
  methods: {
    nextStep () {
      if (this.stepsActive++ > 2) {
        this.stepsActive = 0
      }
    },
    async cc () {
      // console.log(await test())
    },
    async bb (e) {
      var file = e.target.files || e.dataTransfer.files
      if (file[0]) {
        if (file[0].size / 1024 / 1024 > 9) {
          this.$emit('onRead', false)
        } else {
          var reader = new FileReader()
          await reader.readAsDataURL(file[0])
          reader.onload = async e => {
            let newFormModels = new FormData()
            newFormModels.append('source', file[0])
            console.log(e)
          }
        }
      }
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  // font-size: 1vw;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
}
.a {
  width: 10%;
  height: 10%;
  border: 1px solid red;
  font-size: 2vmax;
}
.b {
  width: 10vmax;
  height: 10vmax;
  border: 1px solid red;
}
</style>
