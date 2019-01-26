<template>
  <div class="all">
    <div class="content" v-for="(row, index) in panelData" :key="index">
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
        return [{
            label: '历史搜索',
            icon: 'box-lajitong',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '热门搜索',
            children: [{
              label: '二级 2-2',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        }]
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    getPanelCell (row, rowIndex, cell, cellIndex) {
      this.$emit('getPanelCell', { row: row, rowIndex: rowIndex, cell: cell, cellIndex: cellIndex })
    },
    panelIcon (row, index) {
      console.log(row, index)
      this.$emit('panelIcon', { row: index })
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
