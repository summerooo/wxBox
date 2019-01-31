import Vue from 'vue'
import Main from './main.vue'
let MessageConstructor = Vue.extend(Main)

let instance

const Message = (options = {}) => {
  instance = new MessageConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 999
  return instance.vm
}

export default Message
