<template>
  <div class="all">
    <div class="searchNav">
      <i class="cubeic-back backIcon" @click="back"></i>
      <cube-input ref="searchInput" :autofocus="true" @focus="focusInput" @blur="blurInput" @keyup.enter.native="searching" placeholder=" 请输入商品名称" clearable>
        <i class="cubeic-search" slot="prepend"></i>
      </cube-input>
    </div>
    <transition-group name="flip-list" tag="ul" v-if="isFocus">
      <li v-for="item in listData" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <!-- <ul v-if="isFocus">
      <li v-for="(item, index) in listData" :key="index" @click="listItem(item, index)">
        <i class="cubeic-search" slot="prepend"></i> {{item.value}}
      </li>
    </ul>
    <div v-else>
      aaa
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [
        {value: '111'},
        {value: '222'},
        {value: '113331'},
        {value: '4444'}
      ],
      isFocus: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    focusInput () {
      this.isFocus = false
      console.log('focus')
    },
    blurInput () {
      this.isFocus = true
    },
    searching (e) {
      console.log(e)
    },
    listItem (item, index) {
      console.log(item, index)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.searchInput.$refs.input.focus()
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.all {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  .searchNav {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    .cubeic-search {
      font-size: $medium;
      padding-left: $medium;
    }
    .backIcon {
      font-size: $large;
      width: 33px;
    }
    .cube-input {
      display: flex;
      flex: 1;
      align-items: center;
    }
  }
  ul {
    height: 89%;
    overflow: auto;
    li {
      color: $drakblack;
      padding-top: $small;
      padding-bottom: $small;
      border-bottom: $nav 1px solid;
      i {
        font-size: $large;
      }
    }
  }
}

</style>
