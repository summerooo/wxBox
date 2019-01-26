<template>
  <ul class="content">
    <li v-for="(row, i) in listData" :key="i" @click="getListRow(row, i)">
      {{row.label}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default () {
        return [
          {label: '11111111'},
          {label: '22222'},
          {label: '33333333'},
          {label: '444444444444'},
          {label: '555555555555'},
          {label: '666666666666'}
        ]
      }
    },
  },
  data () {
    return {}
  },
  methods: {
    getListRow (row, index) {
      console.log(row, index)
      this.$emit('getListRow', { row: row, index: index })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';

.all {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  li {
    padding: 15px;
    font-size: $small;
    border-bottom:1px solid $nav;
  }
}
</style>
