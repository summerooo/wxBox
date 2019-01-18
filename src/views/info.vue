<template>
  <div class="all">
    <div class="content">
      <label><p>{{modelsContrast['name']}}</p><cube-input :disabled="disabled" placeholder="请与身份证姓名一致" v-model="models.name"></cube-input></label>
      <label class="gender"><p>{{modelsContrast['gender']}}</p><cube-radio-group v-model="models.gender" :options="genderOptions" :horizontal="true"/></label>
      <label><p>{{modelsContrast['school']}}</p><span @click="choiceSchool" :class="{spanActive: Boolean(models.school)}">{{models.school ? models.school : '选择学校 >'}}</span></label>
      <label><p>{{modelsContrast['dormitory']}}</p><span @click="choiceDormitory" :class="{spanActive: Boolean(models.dormitory)}">{{models.dormitory ? models.dormitory : '选择宿舍 >'}}</span></label>
      <label><p>{{modelsContrast['cardType']}}</p><cube-radio-group v-model="models.cardType" :options="cardOptions" :horizontal="true" /></label>
      <sx-file @onRead="onRead">
        <div class="image" :style="{backgroundImage: `url(${models.cardImage})`}">
          <div :class="{modal: true, changeImage: models.cardImage}">
            <i class="cubeic-add icon" v-if="!models.cardImage"></i>
            {{models.cardImage ? '点击替换' : '点击上传'}}
          </div>
        </div>
      </sx-file>
    </div>
    <cube-button :primary="true" @click="submit">确定</cube-button>
  </div>
</template>
<script>
// import { mapState, mapMutations } from 'vuex'
import sxFile from '../components/file'
import { saveFile } from '../api/uploadImage.js'
export default {
  components: {
    sxFile
  },
  data() {
    return {
      models: {
        name: null,
        gender: '男',
        school: null,
        dormitory: null,
        cardType: '学生证',
        cardImage: null
      },
      modelsContrast: {
        name: '姓名',
        gender: '性别',
        school: '学校',
        dormitory: '宿舍',
        cardType: '证件类型',
        cardImage: '图片'
      },
      genderOptions: [
        {
          value: '男',
          label: '男',
          text: '男'
        },
        {
          value: '女',
          label: '女',
          text: '女'
        }
      ],
      cardOptions: [
        {
          label: '学生证',
          value: '学生证'
        },
        {
          label: '身份证',
          value: '身份证'
        },
        {
          label: '校园一卡通',
          value: '校园一卡通'
        }
      ],
      disabled: true
    }
  },
  created () {
    if (this.disabled) for (let i of this.genderOptions) {
      i['disabled'] = this.disabled
    }
  },
  methods: {
    submit () {
      for (let i in this.models) {
        if (!this.models[i]) return this.$createToast({ txt: `${this.modelsContrast[i]}不能为空`, type: 'txt' }).show()
      }
    },
    choiceSchool () {
      if (this.disabled) return
      this.$createToast({ txt: `选择学校`, type: 'txt' }).show()
    },
    choiceDormitory () {
      if (this.disabled) return
      this.$createToast({ txt: `选择宿舍`, type: 'txt' }).show()
    },
    async onRead (data) {
      this.models.cardImage = data.result
      let models = new FormData()
      models.append('save_path', data.file)
      models.append('user_id', '16813')
      models.append('login_token', 'e909d77a7d2d9fec5b0b5bfdccb495d5')
      // console.log(data)
      let sf = await saveFile(models)
      console.log(sf)
      if (sf) this.models.cardImage = sf.data.return_data.view_path
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable.scss';

.all {
  background: white;
  padding: 30px;
  height: 100%;
  min-height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    & label {
      display: flex;
      align-items: center;
      font-size: $medium;
      color: $lightblack;
      justify-content: space-between;
    }
    & label::before{
      content: '*';
      color: $red;
      width: $small;
    }
    & span {
      display: flex;
      align-items: center;
      height: 39px;
      font-size: $medium;
      flex: 1;
      color: $lightgray;
    }
    & p {
      width: 70px;
      // flex: .3;
    }
  }
  & {
    .gender {
      /deep/ .cube-radio-group {
        .cube-radio {
          flex: 0.2;
          .cube-radio-wrap {
            justify-content: flex-start;
          }
        }
        .cube-radio-ui {
          display: none;
        }
        .cube-radio_selected {
          color: $primary
        }
      }
    }
    .span-active {
      color: $primary;
    }
    /deep/ .cube-input-field {
      padding-left: 0;
    }
    /deep/ .cube-input {
      flex: 1;
      background: transparent;
    }
    /deep/ .cube-input::after {
      border: 0px;
    }
    /deep/ .cube-input_active::after {
      border-bottom-color: $primary !important;
    }
    /deep/ .cube-radio-group::after {
      border: none;
    }
    /deep/ .border-right-1px::after {
      border: 0;
      padding: 0;
    }
    /deep/ .cube-radio-group {
      background: transparent;
      flex: 1;
      .cube-radio {
        border: 0;
        padding: 0;
      }
    }
  }
  .image {
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 3px $lightgray;
    height: 140px;
    margin: $large;
    display: flex;
    color: $drakblack;
    font-size: $medium;
    .modal {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .5s ease;
      .icon {
        opacity: .85;
        font-size: 60px;
        margin-bottom: 10px;
      }
    }
    .changeImage {
      color: white;
      font-size: $default;
      background: rgba(0, 0, 0, .36) !important;
    }
  }
}

</style>
