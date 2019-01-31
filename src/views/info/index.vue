<template>
  <div class="all">
    <div class="content" v-if="$route.name === 'info'">
      <label><p>{{modelsContrast['real_name']}}</p><cube-input :disabled="disabled" placeholder="请与身份证姓名一致" v-model="models.real_name"></cube-input></label>
      <label class="sex"><p>{{modelsContrast['sex']}}</p>
        <div class="sexContent" @click="openSexChoose">
          {{models.sex === 2 ? '女' : '男' }}
        </div>
        <!-- <cube-radio-group v-model="models.sex" :options="sexOptions" :horizontal="true"/> -->
      </label>
      <label><p>{{modelsContrast['school_id']}}</p><span @click="choiceSchool" :class="{spanActive: Boolean(models.school_id)}">
        {{models.school_id ? models.school_name : '选择学校 >'}}</span></label>
      <label><p>{{modelsContrast['hostel_id']}}</p>
      <span @click="choiceDormitory"
      :class="{spanActive: Boolean(models.hostel_id)}">
      {{models.floor_id ? models.floor_name + models.hostel_name : '选择宿舍 >'}}</span></label>
      <label><p>{{modelsContrast['card_type']}}</p><cube-radio-group v-model="models.card_type" :options="cardOptions" :horizontal="true" /></label>
      <p style="width:100%;height: 10px;">
        {{models['real_name'] ? `拍摄上传${models['real_name']}的${models['card_type'] === 1 ? '身份证' : '学生证'}` : ''}}
      </p>
      <div class="image" :style="{backgroundImage: `url(${models.card_view})`}" @click="getFile">
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
      <cube-button :primary="true" @click="submit" :disabled="disabled">
        {{models.status == 0 ? '审核中' : (models.status === 1 ? '成功认领' : '重新申请')}}
      </cube-button>
    </div>
    <router-view v-else/>
    <sx-file @onRead="onRead" ref="file"></sx-file>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import sxFile from '@/components/file'
import { saveFile } from '@/api/uploadImage.js'
import { receiveInfo, isExistOperator, applyEnter } from '@/api/info'
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
        sex: null,
        school_id: null,
        hostel_id: null,
        floor_id: null,
        card_type: 1,
        card_path: null,
        card_view: null
      },
      modelsData: {
        school_id: null,
        hostel_id: null
      },
      modelsContrast: {
        real_name: '姓名',
        sex: '性别',
        school_id: '学校',
        hostel_id: '宿舍',
        card_type: '证件类型',
        card_path: '图片'
      },
      sexOptions: [
        {
          value: 1,
          label: '男',
          text: '男'
        },
        {
          value: 2,
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
      'user',
      'upload',
      'school',
      'dormitory'
    ])
  },
  watch: {
    school (val) {
      this.models['school_id'] = val.school_id
      this.$set(this.models, 'school_name', val.school_name)
      // this.modelsData['school_id'] = val
    },
    dormitory (val) {
      this.$set(this.models, 'floor_name', val[0].floor_name)
      this.$set(this.models, 'floor_id', val[0].floor_id)
      this.$set(this.models,'hostel_id', val[1].hostel_id)
      this.$set(this.models,'hostel_name', val[1].hostel_name)
      // this.$set(this.modelsData,'hostel_id', val)
    },
  },
  created () {
    this.firstShow()
  },
  methods: {
    ...mapMutations([
      'setUpload',
      'setBeforeInfo'
    ]),
    closeWindow () {
      // eslint-disable-next-line
      if(typeof(WeixinJSBridge) != 'undefined'){
      // eslint-disable-next-line
        WeixinJSBridge.call('closeWindow')
      } else {
        if (navigator.userAgent.indexOf('MSIE') > 0) {
          if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
            window.opener = null; window.close()
          } else {
            window.open('', '_top'); window.top.close()
          }  
        } else if (navigator.userAgent.indexOf('Firefox') > 0) {  
          window.location.href = 'about:blank '
        } else {  
          window.opener = null
          window.open('', '_self', '')
          window.close()
        }
      }
    },
    async firstShow () {
      let pc = await receiveInfo(this.user)
      console.log(pc)
      if (pc.data.return_code === 400) this.$createDialog({
        type: 'alert',
        content: pc.data.return_msg,
        onConfirm () {
          this.closeWindow()
        }
      }).show()
      this.models = await Object.assign(this.models, pc.data.return_data)
      if (this.models.card_path) this.flag = true
      if (pc.data.return_data.status === 0) this.disabled = true
      if (this.disabled) {
        for (let i of this.sexOptions) {
          i['disabled'] = this.disabled
        }
        for (let i of this.cardOptions) {
          i['disabled'] = this.disabled
        }
      }
      let alertInfo = ''
      switch (pc.data.return_data.status) {
        // case 0:
        //   alertInfo = '待审核'
        //   break
        // case 1:
        //   alertInfo = '认领已通过'
        //   break
        case 2:
          alertInfo = pc.data.return_data.refuse_reason
          this.$createDialog({
            type: 'alert',
            title: '您认领盒子未通过申请',
            content: alertInfo,
          }).show()
          break
        default:
          return
      }
    },
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
    async submit () {
      for (let i in this.modelsContrast) {
        console.log(i, 'i', this.models[i])
        if (!this.models[i]) return this.$createToast({ txt: `${this.modelsContrast[i]}不能为空`, type: 'txt' }).show()
      }
      const toast = this.$createToast({
        time: 0
      })
      toast.show()
      let ieo = await isExistOperator(this.models)
      toast.hide()
      // this.$createToast({ txt: ieo.data.return_msg, type: 'txt' }).show()
      console.log(ieo, 'ieo')
      if (ieo.data.return_code !== 200) {
        let that = this
        this.$createDialog({
          type: 'confirm',
          content: '学校尚未开通 是否要加入我们',
          confirmBtn: {
            text: '是',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '否',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: async () => {
            let ae = await applyEnter(Object.assign({}, this.user, this.models, {order_origin: 4}))
            console.log(ae)
            if (ae.data.return_code === 200) {
              // that.$router.push('goodsBox')
              // that.setBeforeInfo(that.models)
              that.$createDialog({ type: 'alert', content: '稍后会有客服与您联系' }).show()
            }
            else return that.$createToast({ txt: ae.data.return_msg, type: 'txt' }).show()
          },
          onCancel: () => {
            return
          }
        }).show()
      } else {
        this.setBeforeInfo(this.models)
        this.$router.push('goodsBox')
      }
      console.log(this.models, 'submitData')
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
      let sf = await saveFile(models)
      console.log(sf)
      this.setUpload(0)
      if (sf) {
        this.models.card_path = sf.data.return_data.upload_path
        this.models.card_view = sf.data.return_data.view_path
      }
    },
    openSexChoose () {
      let that = this
      this.$createPicker({
        data: [[
          {value: 1, text: '男'},
          {value: 2, text: '女'}
        ]],
        onSelect (val) {
          console.log(val)
          that.models.sex = val[0]
        }
      }).show()
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
        .sexContent {
          flex: 1;
          color: $primary;
        }
        // /deep/ .cube-radio-group {
        //   .cube-radio {
        //     flex: 0.2;
        //     .cube-radio-wrap {
        //       justify-content: flex-start;
        //     }
        //   }
        //   .cube-radio-ui {
        //     display: none;
        //   }
        //   .cube-radio_selected {
        //     color: $primary
        //   }
        // }
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
