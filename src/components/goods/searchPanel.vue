<template>
  <div class="all">
    <div class="content" v-for="(row, index) in panelData" :key="index" v-show="row.children.length">
      <div class="rowLabel">
        {{row.label}}
        <i :class="row.icon" @click="panelIcon(row, index)"></i>
      </div>
      <ul class="rowChildren">
        <li v-for="(cell, i) in row.children" :key="i" @click="getPanelCell(row, index, cell, i)">
          {{cell.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panelData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  created() {
    console.log(this.panelData)
  },
  methods: {
    getPanelCell (row, rowIndex, cell, cellIndex) {
      this.$emit('getPanelCell', { row: row, rowIndex: rowIndex, cell: cell, cellIndex: cellIndex })
    },
    panelIcon (row, index) {
      console.log(row, index, 'cccc')
      this.$emit('panelIcon', { row: row, index: index })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variable.scss';

.all {
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    * {
      color: $drakblack;
    }
    .rowLabel {
      font-size: $medium;
      display: flex;
      justify-content: space-between;
      margin-bottom: $mini;
      i {
        font-size: $default;
      }
    }
    .rowChildren {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      li {
        font-size: $small;
        background: $nav;
        padding: $mini;
        margin-right: $small;
        margin-top: $small;
      }
    }
  }
}
</style>
