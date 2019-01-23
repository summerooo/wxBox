<template>
  <div class="fileAll">
    <label>
      <slot class="slotClass"></slot>
      <input
        ref="inputFile"
        class="fileClass"
        @change="onRead($event, model, index)"
        v-bind="$props"
        type="file" :accept="accept" />
    </label>
  </div>
</template>
<script>
export default {
  props: {
    autoComplete: {
      type: String,
      default: 'off'
    },
    model: String,
    index: null,
    disabled: { type: Boolean, default: false },
    accept: {type: String, default: 'image/*'}
  },
  methods: {
    async onRead (e, model, index) {
      var file = e.target.files || e.dataTransfer.files
      if (file[0]) {
        if (file[0].size / 1024 / 1024 > 9) {
          this.$emit('onRead', false)
        } else {
          var reader = new FileReader()
          await reader.readAsDataURL(file[0])
          reader.onload = (e) => {
            console.log({ 'model': model, 'index': index, 'file': file[0], 'result': e.target.result, 'event': e }, '-----file')
            this.$emit('onRead', { 'model': model, 'index': index, 'file': file[0], 'result': e.target.result, 'event': e })
            this.$refs.inputFile.value = ''
            // this.$emit('onRead', e.target.result)
          }
        }
      }
    },
    getFile () {
      console.log('get file')
      this.$refs.inputFile.click()
    }
  }
}
</script>
<style lang="scss" scoped>
$full: 100%;
.fileAll {
  input[type="file"]::-webkit-file-upload-button {
    cursor: pointer;
  }
  .fileClass {
    display: none;
    cursor: pointer;
    left:0;
    right:0;
    top:0;
    bottom:0;
    // height: auto;
    // width: auto;
    // opacity: 0;
  }
  .slotClass {
  }
}
</style>