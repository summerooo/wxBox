(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0fae5f75"],{"0f06":function(t,e,n){var r=n("3156");n("a481");var o={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},i={};for(var a in o)i[a.replace(/\//,"")]=a;console.log(i,"production"),t.exports=r({proxy:o},i)},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)})}}n.d(e,"a",function(){return o})},"1eca":function(t,e,n){},3156:function(t,e,n){var r=n("9523");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},"45f1":function(t,e,n){"use strict";var r=n("b6a3");n.n(r).a},"57b8":function(t,e,n){t.exports=n.p+"img/schoolCard.9394d4b7.png"},"5cf3":function(t,e,n){"use strict";var r=n("1eca");n.n(r).a},9523:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=_;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(R([])));y&&y!==r&&o.call(y,a)&&(v=y);var b=k.prototype=w.prototype=Object.create(v);O.prototype=b.constructor=k,k.constructor=O,k[c]=O.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},j($.prototype),$.prototype[s]=function(){return this},u.AsyncIterator=$,u.async=function(t,e,n,r){var o=new $(_(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return F()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function w(){}function O(){}function k(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function $(t){function e(n,r,i,a){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}var n;this._invoke=function(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},b6a3:function(t,e,n){},ded2:function(t,e,n){t.exports=n.p+"img/card.cb7048a5.png"},e37e:function(t,e,n){"use strict";n.r(e);var r=(n("ac6a"),n("f751"),n("96cf"),n("1da1")),o=n("be94"),i=(n("cadf"),n("551c"),n("097d"),n("2f62")),a={props:{autoComplete:{type:String,default:"off"},model:String,index:null,disabled:{type:Boolean,default:!1},accept:{type:String,default:"image/*"}},methods:{onRead:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,i,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(o=e.target.files||e.dataTransfer.files)[0]){t.next=10;break}if(!(o[0].size/1024/1024>9)){t.next=6;break}this.$emit("onRead",!1),t.next=10;break;case 6:return i=new FileReader,t.next=9,i.readAsDataURL(o[0]);case 9:i.onload=function(t){console.log({model:n,index:r,file:o[0],result:t.target.result,event:t},"-----file"),a.$emit("onRead",{model:n,index:r,file:o[0],result:t.target.result,event:t}),a.$refs.inputFile.value=""};case 10:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),getFile:function(){console.log("get file"),this.$refs.inputFile.click()}}},s=(n("45f1"),n("2877")),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fileAll"},[n("label",[t._t("default"),n("input",t._b({ref:"inputFile",staticClass:"fileClass",attrs:{type:"file",accept:t.accept},on:{change:function(e){t.onRead(e,t.model,t.index)}}},"input",t.$props,!1))],2)])},[],!1,null,"91636c5a",null);c.options.__file="file.vue";var l=c.exports,u=n("365c"),d=n("4360"),f=n("0f06").api,h={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){d.a.state.upload=100*(t.loaded/t.total).toFixed(2),console.log(t.loaded/t.total,t,"cc")}},p=function(t){return u.a.post("".concat(f,"/saveFile"),t,h)},m=n("e526"),v=n("ded2"),g=n.n(v),y=n("57b8"),b=n.n(y),_={components:{sxFile:l},data:function(){return{models:{real_name:null,sex:null,school_id:null,hostel_id:null,floor_id:null,card_type:1,card_path:null,card_view:null},modelsData:{school_id:null,hostel_id:null},modelsContrast:{real_name:"姓名",sex:"性别",school_id:"学校",hostel_id:"宿舍",card_type:"证件类型",card_path:"图片"},sexOptions:[{value:1,label:"男",text:"男"},{value:2,label:"女",text:"女"}],cardOptions:[{label:"身份证",value:1},{label:"学生证",value:2}],disabled:!1,flag:!1}},computed:Object(o.a)({},Object(i.c)(["user","upload","school","dormitory","beforeInfo"])),watch:{school:function(t){this.models.school_id=t.school_id,this.$set(this.models,"school_name",t.school_name)},dormitory:function(t){this.$set(this.models,"floor_name",t[0].floor_name),this.$set(this.models,"floor_id",t[0].floor_id),this.$set(this.models,"hostel_id",t[1].hostel_id),this.$set(this.models,"hostel_name",t[1].hostel_name)}},created:function(){sessionStorage.getItem("wxData")||this.wxAuthority("info"),"code"in this.$route.query&&sessionStorage.setItem("wxData",JSON.stringify(this.$route.query)),this.getBeforeInfo(),this.firstShow()},methods:Object(o.a)({},Object(i.b)(["setUpload","setBeforeInfo","getBeforeInfo","wxAuthority"]),{closeWindow:function(){"undefined"!=typeof WeixinJSBridge?WeixinJSBridge.call("closeWindow"):navigator.userAgent.indexOf("MSIE")>0?navigator.userAgent.indexOf("MSIE 6.0")>0?(window.opener=null,window.close()):(window.open("","_top"),window.top.close()):navigator.userAgent.indexOf("Firefox")>0?window.location.href="about:blank ":(window.opener=null,window.open("","_self",""),window.close())},firstShow:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.beforeInfo){t.next=2;break}return t.abrupt("return",this.models=this.beforeInfo);case 2:return t.next=4,Object(m.f)(this.user);case 4:return e=t.sent,console.log(e),n=this,400===e.data.return_code&&this.$createDialog({type:"alert",content:e.data.return_msg,onConfirm:function(){n.closeWindow()}}).show(),t.next=10,Object.assign(this.models,e.data.return_data);case 10:if(this.models=t.sent,this.models.card_type||(this.models.card_type=1),this.models.sex||(this.models.sex=1),this.models.card_path&&(this.flag=!0),0===e.data.return_data.status&&(this.disabled=!0),this.disabled){for(r in this.sexOptions)this.$set(this.sexOptions[r],"disabled",this.disabled);for(o in this.cardOptions)this.$set(this.cardOptions[o],"disabled",this.disabled)}i="",t.t0=e.data.return_data.status,t.next=2===t.t0?20:23;break;case 20:return i=e.data.return_data.refuse_reason,this.$createDialog({type:"alert",title:"您认领盒子未通过申请",content:i}).show(),t.abrupt("break",24);case 23:return t.abrupt("return");case 24:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getFile:function(){if(!this.disabled){var t=this;this.$createDialog({type:"alert",confirmBtn:{text:"我知道了",active:!0},onConfirm:function(){t.$refs.file.getFile()}},function(e){var n=e("div",{style:{background:"#FFDF0A",borderRadius:"50%",width:"8px",height:"8px",marginRight:"8px"}});return[e("div",{style:{fontSize:"14px",padding:"10px"},slot:"title"},[e("p","证件上传示例")]),e("div",{style:{textAlign:"center",height:"160px"},slot:"content"},[e("img",{attrs:{src:1===t.models.card_type?g.a:b.a},style:{width:"86%",maxHeight:"130px"}}),e("div",{style:{margin:"auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:"20px",width:"86%"}},[e("div",{style:{display:"flex",alignItems:"center"}},[n,"四角完整"]),e("p",{style:{display:"flex",alignItems:"center"}},[n,"亮度均匀"]),e("p",{style:{display:"flex",alignItems:"center"}},[n,"照片清晰"])])])]}).show()}},submit:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,o,i,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(this.modelsContrast);case 1:if((t.t1=t.t0()).done){t.next=8;break}if(e=t.t1.value,console.log(e,"i",this.models[e]),this.models[e]){t.next=6;break}return t.abrupt("return",this.$createToast({txt:"".concat(this.modelsContrast[e],"不能为空"),type:"txt"}).show());case 6:t.next=1;break;case 8:return(n=this.$createToast({time:0})).show(),t.next=12,Object(m.e)(this.models);case 12:o=t.sent,n.hide(),console.log(o,"ieo"),200!==o.data.return_code?(i=this,this.$createDialog({type:"confirm",content:"学校尚未开通 是否要加入我们",confirmBtn:{text:"是",active:!0,disabled:!1,href:"javascript:;"},cancelBtn:{text:"否",active:!1,disabled:!1,href:"javascript:;"},onConfirm:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)(Object.assign({},a.user,a.models,{order_origin:4}));case 2:if(e=t.sent,console.log(e),200!==e.data.return_code){t.next=8;break}i.$createDialog({type:"alert",content:"稍后会有客服与您联系"}).show(),t.next=9;break;case 8:return t.abrupt("return",i.$createToast({txt:e.data.return_msg,type:"txt"}).show());case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onCancel:function(){}}).show()):(this.setBeforeInfo(this.models),this.$router.push("goodsBox")),console.log(this.models,"submitData");case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),choiceSchool:function(){this.disabled||this.$router.push({name:"chooseSchool0",params:{id:"111112323"}})},choiceDormitory:function(){if(!this.disabled)return this.school?void this.$router.push({name:"chooseDormitory"}):this.$createToast({txt:"请先选择学校",type:"txt"}).show()},onRead:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.flag=!0,(n=new FormData).append("save_path",e.file),n.append("user_id","16813"),n.append("login_token","e909d77a7d2d9fec5b0b5bfdccb495d5"),t.next=7,p(n);case 7:r=t.sent,console.log(r),this.setUpload(0),r&&(this.models.card_path=r.data.return_data.upload_path,this.models.card_view=r.data.return_data.view_path);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),openSexChoose:function(){if(!this.disabled){var t=this;this.$createPicker({data:[[{value:1,text:"男"},{value:2,text:"女"}]],onSelect:function(e){console.log(e),t.models.sex=e[0]}}).show()}}}),mounted:function(){document.title="认领盒子"}},x=(n("5cf3"),Object(s.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},["info"===t.$route.name?n("div",{staticClass:"content"},[n("label",[n("p",[t._v(t._s(t.modelsContrast.real_name))]),n("cube-input",{attrs:{disabled:t.disabled,placeholder:"请与身份证姓名一致"},model:{value:t.models.real_name,callback:function(e){t.$set(t.models,"real_name",e)},expression:"models.real_name"}})],1),n("label",{staticClass:"sex"},[n("p",[t._v(t._s(t.modelsContrast.sex))]),n("div",{staticClass:"sexContent",on:{click:t.openSexChoose}},[t._v("\n        "+t._s(2===t.models.sex?"女":"男")+"\n      ")])]),n("label",[n("p",[t._v(t._s(t.modelsContrast.school_id))]),n("span",{class:{spanActive:Boolean(t.models.school_id)},on:{click:t.choiceSchool}},[t._v("\n      "+t._s(t.models.school_id?t.models.school_name:"选择学校 >"))])]),n("label",[n("p",[t._v(t._s(t.modelsContrast.hostel_id))]),n("span",{class:{spanActive:Boolean(t.models.hostel_id)},on:{click:t.choiceDormitory}},[t._v("\n    "+t._s(t.models.floor_id?t.models.floor_name+t.models.hostel_name:"选择宿舍 >"))])]),n("label",[n("p",[t._v(t._s(t.modelsContrast.card_type))]),n("cube-radio-group",{attrs:{options:t.cardOptions,horizontal:!0},model:{value:t.models.card_type,callback:function(e){t.$set(t.models,"card_type",e)},expression:"models.card_type"}})],1),n("p",{staticStyle:{width:"100%",height:"10px"}},[t._v("\n      "+t._s(t.models.real_name?"拍摄上传"+t.models.real_name+"的"+(1===t.models.card_type?"身份证":"学生证"):"")+"\n    ")]),n("div",{staticClass:"image",style:{backgroundImage:"url("+t.models.card_view+")"},on:{click:t.getFile}},[n("div",{class:{modal:!0,changeImage:t.flag}},[t.flag?t._e():n("i",{staticClass:"cubeic-add icon"}),t._v("\n        "+t._s(t.flag?t.upload?t.upload+"%":"点击替换":"点击上传")+"\n      ")])])]):t._e(),"info"===t.$route.name?n("div",{staticClass:"bottomText"},[t._m(0),n("cube-button",{attrs:{primary:!0,disabled:t.disabled},on:{click:t.submit}},[t._v("\n      "+t._s(0==t.models.status?"审核中":1===t.models.status?"成功认领":"重新申请")+"\n    ")])],1):n("router-view"),n("sx-file",{ref:"file",on:{onRead:t.onRead}})],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"box-gantanhao_icon"}),t._v("\n      信息仅用于身份验证，盒里有保证您的信息安全\n    ")])}],!1,null,"3877bad3",null));x.options.__file="index.vue",e.default=x.exports},e526:function(t,e,n){"use strict";n.d(e,"f",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"g",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return d});var r=n("365c"),o=n("0f06").api,i=function(t){return r.a.post("".concat(o,"/receiveInfo"),t)},a=function(t){return r.a.post("".concat(o,"/area"),t)},s=function(t){return r.a.post("".concat(o,"/schoolList"),t)},c=function(t){return r.a.post("".concat(o,"/hostelList"),t)},l=function(t){return r.a.post("".concat(o,"/floorList"),t)},u=function(t){return r.a.post("".concat(o,"/isExistOperator"),t)},d=function(t){return r.a.post("".concat(o,"/applyEnter"),t)}}}]);