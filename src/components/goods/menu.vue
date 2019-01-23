<template>
  <div :class="{menuAll: true, horizontal: mode === 'horizontal'}">
    <ul class="content">
      <li :class="{menuCell: true, 'acitveCotnent': item.value === newDefaultActive}" v-for="(item, index) in menuData" :key="index" @click="select(item, index)">
        <i :class="item.icon"></i>
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      // horizontal / vertical
      type: String,
      default () {
        return 'vertical'
      }
    },
    defaultActive: {
      type: null,
      default () {
        return 'ccc'
      }
    },
    menuData: {
      type: Array,
      default () {
        return [
          {label: 'ccccccccccccccc', value: 'ccc', icon: 'cubeic-hot'},
          {label: 'cc2c', value: 'ccc1', icon: 'cubeic-hot'},
          {label: 'ccc3', value: 'ccc3', icon: 'cubeic-hot'}
        ]
      }
    }
  },
  data () {
    return {
      newDefaultActive: this.defaultActive
    }
  },
  watch: {
    defaultActive (val) {
      this.newDefaultActive = val
    }
  },
  methods: {
    select (item, index) {
      if (this.newDefaultActive === item.value) return
      this.newDefaultActive = item.value
      this.$emit('select', item, index)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
.horizontal {
  flex-direction: row;
}
.menuAll {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    .menuCell {
      padding: $large;
      color: $lightblack;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $medium;
    }
  }
  .acitveCotnent {
    color: $drakblack !important;
    border-left: $primary 3px solid;
    background: white;
    font-weight: bold !important;
  }
}

</style>
