(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-770f3b1e"],{"1bfb":function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var r=n("365c"),a=n("0f06").api,o=function(e){return r.a.post("".concat(a,"/shopPoint"),e)},s=function(e){return r.a.post("".concat(a,"/shopList"),e)},c=function(e){return r.a.post("".concat(a,"/shoppingDesc"),e)},i=function(e){return r.a.post("".concat(a,"/shopExchangeRecords"),e)},u=function(e){return r.a.post("".concat(a,"/shopInformation"),e)}},6279:function(e,t,n){"use strict";var r=n("c284");n.n(r).a},c284:function(e,t,n){},d2f3:function(e,t,n){"use strict";n.r(t);var r=(n("a481"),n("f751"),n("96cf"),n("1da1")),a=n("be94"),o=(n("cadf"),n("551c"),n("097d"),n("4875")),s=n("1bfb"),c=n("2f62"),i={components:{sxInputNumber:o.a},computed:Object(a.a)({},Object(c.c)(["user"])),data:function(){return{row:{},formStruct:{user_name:{label:"姓名",placeholder:"请输入姓名"},telephone:{label:"电话",placeholder:"请输入手机号"},address:{label:"地址",placeholder:"请输入地址"},exchange_num:"数量"},formModel:{user_name:"",telephone:"",address:""},exchange_num:1,disabled:!1}},methods:{exchangeNow:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.formModel.user_name){e.next=3;break}return e.abrupt("return",this.$createToast({txt:"请输入姓名",type:"txt",time:1e3}).show());case 3:if(this.formModel.telephone){e.next=5;break}return e.abrupt("return",this.$createToast({txt:"请输入手机号",type:"txt",time:1e3}).show());case 5:if(this.formModel.address){e.next=7;break}return e.abrupt("return",this.$createToast({txt:"请输入地址",type:"txt",time:1e3}).show());case 7:if(/(?:^1[3456789]|^9[28])\d{9}$/.test(this.formModel.telephone)){e.next=9;break}return e.abrupt("return",this.$createToast({txt:"请输入正确手机号",type:"txt",time:1e3}).show());case 9:return this.disabled=!0,e.next=12,Object(s.b)(Object.assign({},this.user,this.formModel,this.row,{exchange_num:this.exchange_num,order_origin:4}));case 12:if(t=e.sent,this.disabled=!1,200!==t.data.return_code){e.next=17;break}return setTimeout(function(){n.$router.replace({name:"exchangeSuccess"})},1200),e.abrupt("return",this.$createToast({txt:t.data.return_msg,type:"txt",time:1200}).show());case 17:this.$createDialog({type:"confirm",title:t.data.return_msg,confirmBtn:{text:"确定",active:!0,href:"javascript:;"},cancelBtn:{text:"取消",href:"javascript:;"},onConfirm:function(){},onCancel:function(){}}).show();case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},created:function(){this.row=this.$route.query}},u=(n("6279"),n("2877")),l=Object(u.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all"},[n("header",{staticClass:"header"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.row.goods_img,alt:""}})]),n("div",{staticClass:"content"},[n("header",{staticClass:"goodsName"},[e._v(e._s(e.row.goods_name))]),n("footer",{staticClass:"payPoints"},[e._v(e._s(e.row.pay_points)+"积分")])])]),n("div",{staticClass:"container"},[e._v("\n    收货信息\n    "),e._l(e.formModel,function(t,r){return n("label",{key:r},[n("p",[e._v(e._s(e.formStruct[r].label))]),n("cube-input",{attrs:{disabled:e.disabled,placeholder:e.formStruct[r].placeholder,type:"telephone"===r?"number":""},model:{value:e.formModel[r],callback:function(t){e.$set(e.formModel,r,t)},expression:"formModel[index]"}})],1)}),n("label",[n("p",[e._v(e._s(e.formStruct.exchange_num))]),n("sx-input-number",{attrs:{max:99},model:{value:e.exchange_num,callback:function(t){e.exchange_num=t},expression:"exchange_num"}})],1)],2),n("footer",{staticClass:"footer"},[n("cube-button",{attrs:{primary:""},on:{click:e.exchangeNow}},[e._v("立即兑换")])],1)])},[],!1,null,"4f20cdff",null);l.options.__file="exchangeDetails.vue",t.default=l.exports}}]);