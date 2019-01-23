<template>
  <div class="all">
    <div class="content" v-if="$route.name === 'info'">
      <label><p>{{modelsContrast['real_name']}}</p><cube-input :disabled="disabled" placeholder="请与身份证姓名一致" v-model="models.real_name"></cube-input></label>
      <label class="sex"><p>{{modelsContrast['sex']}}</p><cube-radio-group v-model="models.sex" :options="sexOptions" :horizontal="true"/></label>
      <label><p>{{modelsContrast['school_id']}}</p><span @click="choiceSchool" :class="{spanActive: Boolean(models.school_id)}">{{models.school_id ? modelsData['school_id'].school_name : '选择学校 >'}}</span></label>
      <label><p>{{modelsContrast['hsotel_id']}}</p>
      <span @click="choiceDormitory"
      :class="{spanActive: Boolean(models.hsotel_id)}">
      {{models.hsotel_id ? `${modelsData['hsotel_id'][0].floor_name + modelsData['hsotel_id'][1].hostel_name}` : '选择宿舍 >'}}</span></label>
      <label><p>{{modelsContrast['card_type']}}</p><cube-radio-group v-model="models.card_type" :options="cardOptions" :horizontal="true" /></label>
      <p style="width:100%;height: 10px;">
        {{models['real_name'] ? `拍摄上传${models['real_name']}的${models['card_type'] === 1 ? '身份证' : '学生证'}` : ''}}
      </p>
      <div class="image" :style="{backgroundImage: `url(${models.card_path})`}" @click="getFile">
        <div :class="{modal: true, changeImage: flag}">
          <i class="cubeic-add icon" v-if="!flag"></i>
          {{flag ? upload ? `${upload}%` : '点击替换' : '点击上传'}}
        </div>
      </div>
    </div>
    <div class="bottomText" v-if="$route.name === 'info'">
      <span>
        <i class="box-gantanhao_icon"></i>
        信息仅用于身份验证，盒里有保证您的信息安全
      </span>
      <cube-button :primary="true" @click="submit">确定</cube-button>
    </div>
    <router-view v-else/>
    <sx-file @onRead="onRead" ref="file"></sx-file>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import sxFile from '@/components/file'
import { saveFile } from '@/api/uploadImage.js'
import card from '@/assets/images/card.png'
import schoolCard from '@/assets/images/schoolCard.png'
export default {
  components: {
    sxFile
  },
  data() {
    return {
      models: {
        real_name: null,
        sex: '男',
        school_id: null,
        hsotel_id: null,
        card_type: 1,
        card_path: null
      },
      modelsData: {
        school_id: null,
        hsotel_id: null
      },
      modelsContrast: {
        real_name: '姓名',
        sex: '性别',
        school_id: '学校',
        hsotel_id: '宿舍',
        card_type: '证件类型',
        card_path: '图片'
      },
      sexOptions: [
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
        // {
        //   label: '芝麻信用',
        //   value: '芝麻信用'
        // },
        {
          label: '身份证',
          value: 1
        },
        {
          label: '学生证',
          value: 2
        }
      ],
      disabled: false,
      flag: false
    }
  },
  computed: {
    ...mapState([
      'upload',
      'school',
      'dormitory'
    ])
  },
  watch: {
    school (val) {
      this.models['school_id'] = val.school_id
      this.modelsData['school_id'] = val
    },
    dormitory (val) {
      console.log(val)
      this.$set(this.models,'hsotel_id', val)
      this.$set(this.modelsData,'hsotel_id', val)
    },
  },
  created () {
    console.log(this.school)
    if (this.disabled) for (let i of this.sexOptions) {
      i['disabled'] = this.disabled
    }
  },
  methods: {
    ...mapMutations([
      'setUpload'
    ]),
    getFile () {
      let that = this
      this.$createDialog({
        type: 'alert',
        confirmBtn: {
          text: '我知道了',
          active: true
        },
        onConfirm () {
          that.$refs.file.getFile()
        }
      }, (createElement) => {
        let dot = createElement('div', {
          style: {
            background: '#FFDF0A',
            borderRadius: '50%',
            width: '8px',
            height: '8px',
            marginRight: '8px'
          }
        })
        return [
          createElement('div', {
            'style': {
              fontSize: '14px',
              padding: '10px'              
            },
            slot: 'title'
          }, [
            createElement('p', '证件上传示例')
          ]),
          createElement('div', {
            'style': {
              textAlign: 'center',
              height: '160px'
            },
            slot: 'content'
          }, [
            createElement('img', {
              attrs: {
                src: that.models.card_type === 1 ? card : schoolCard
              },
              'style': {
                width: '86%',
                maxHeight: '130px'
              }
            }),
            createElement('div', {
              'style': {
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '20px',
                width: '86%'
              }
            }, [
              createElement('div', {style: {display: 'flex', alignItems: 'center'}}, [dot, '四角完整']),
              createElement('p', {style: {display: 'flex', alignItems: 'center'}},  [dot, '亮度均匀']),
              createElement('p', {style: {display: 'flex', alignItems: 'center'}},  [dot, '照片清晰'])
            ])
          ])
        ]
      }).show()
    },
    submit () {
      for (let i in this.models) {
        if (!this.models[i]) return this.$createToast({ txt: `${this.modelsContrast[i]}不能为空`, type: 'txt' }).show()
      }
    },
    choiceSchool () {
      if (this.disabled) return
      this.$router.push({name: 'chooseSchool0', params: {id: '111112323'}})
      // this.$createToast({ txt: `选择学校`, type: 'txt' }).show()
    },
    choiceDormitory () {
      if (this.disabled) return
      if (!this.school) return this.$createToast({ txt: `请先选择学校`, type: 'txt' }).show()
      this.$router.push({name: 'chooseDormitory'})
      // this.$createToast({ txt: `选择宿舍`, type: 'txt' }).show()
    },
    async onRead (data) {
      this.flag = true
      // this.models.card_path = data.result
      let models = new FormData()
      models.append('save_path', data.file)
      models.append('user_id', '16813')
      models.append('login_token', 'e909d77a7d2d9fec5b0b5bfdccb495d5')
      // console.log(data)
      let sf = await saveFile(models)
      console.log(sf)
      this.setUpload(0)
      if (sf) this.models.card_path = sf.data.return_data.view_path
    }
  },
  mounted() {
    document.title = '认领盒子'
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/variable.scss';

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
      color: $drakblack;
      font-size: $medium;
      width: 70px;
      // flex: .3;
    }
    & {
      .sex {
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
  .bottomText {
    font-size: $small;
    // line-height: $large;
    span {
      display: block;
      margin-bottom: $mini;
    }
    color: $gray;
    i {
      color: $primary;
      font-size: $default;
    }
  }
}
.cube-dialog-alert {
  .cube-dialog-title {
    color: $red !important;
  }
  .my-title {
  color: $red !important;
    font-size: $default;
    justify-content: center;
    align-self: center;
    height: $large;
  }
}

</style>
