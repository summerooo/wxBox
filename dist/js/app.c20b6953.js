!function(e){function n(n){for(var t,r,i=n[0],s=n[1],u=n[2],d=0,h=[];d<i.length;d++)r=i[d],a[r]&&h.push(a[r][0]),a[r]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(f&&f(n);h.length;)h.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,n=0;n<c.length;n++){for(var o=c[n],t=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(t=!1)}t&&(c.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},r={app:0},a={app:0},c=[];function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var n=[];r[e]?n.push(r[e]):0!==r[e]&&{"chunk-0cd6efb4":1,"chunk-50dddb11":1,"chunk-74a88b32":1,"chunk-2781e05a":1,"chunk-438664fb":1,"chunk-5e51073c":1,"chunk-66126031":1,"chunk-72a8bdf8":1,"chunk-77c9566a":1,"chunk-7d12b1ff":1,"chunk-cb2b6d94":1,"chunk-db0cf6d6":1,"chunk-ea579e06":1,"chunk-fee6f838":1}[e]&&n.push(r[e]=new Promise(function(n,o){for(var t="css/"+({}[e]||e)+"."+{"chunk-0cd6efb4":"6cba4c8d","chunk-50dddb11":"ddf2124f","chunk-74a88b32":"3789dbce","chunk-2781e05a":"c89569f9","chunk-438664fb":"b9c59050","chunk-5e51073c":"e3e0bdf0","chunk-66126031":"560f7193","chunk-72a8bdf8":"258e42a2","chunk-77c9566a":"9eef0a68","chunk-7d12b1ff":"613a8d44","chunk-cb2b6d94":"f5a64a79","chunk-db0cf6d6":"d3e22f6a","chunk-ea579e06":"71d95add","chunk-fee6f838":"f063caa6"}[e]+".css",a=i.p+t,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===a))return n()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++)if((d=(u=f[s]).getAttribute("data-href"))===t||d===a)return n();var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var t=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.request=t,delete r[e],h.parentNode.removeChild(h),o(c)},h.href=a,document.getElementsByTagName("head")[0].appendChild(h)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=t);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0cd6efb4":"f151d196","chunk-50dddb11":"4d189e74","chunk-74a88b32":"09208736","chunk-2781e05a":"9ac6df3e","chunk-438664fb":"59c106ad","chunk-5e51073c":"6b6d4bb5","chunk-66126031":"27941db5","chunk-72a8bdf8":"aadb1038","chunk-77c9566a":"73126e8d","chunk-7d12b1ff":"b25a28de","chunk-cb2b6d94":"d48c922a","chunk-db0cf6d6":"82273a1c","chunk-ea579e06":"54ece50e","chunk-fee6f838":"7b995b09"}[e]+".js"}(e),c=function(n){s.onerror=s.onload=null,clearTimeout(u);var o=a[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+t+": "+r+")");c.type=t,c.request=r,o[1](c)}a[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=u;c.push([0,"chunk-vendors"]),o()}({0:function(e,n,o){e.exports=o("56d7")},"365c":function(e,n,o){"use strict";o("a481"),o("cadf"),o("551c"),o("097d");var t=o("bc3a"),r=o.n(t),a=o("a18c"),c=o("2b0e"),i={data:function(){return{visible:!1,message:"",duration:3e3,timer:null}},methods:{handleAfterLeave:function(){this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},closeVisible:function(){this.visible=!1},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closeVisible()},this.duration))},keydown:function(e){27===e.keyCode&&this.closeVisible()}},mounted:function(){this.startTimer(),document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},s=(o("a382"),o("2877")),u=Object(s.a)(i,function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("transition",{attrs:{name:"sx-message-fade"},on:{"after-leave":e.handleAfterLeave}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"sx-message"},[e._t("default",[o("p",{staticClass:"sx-message__content"},[e._v(e._s(e.message))])])],2)])},[],!1,null,"3b6ba298",null);u.options.__file="main.vue";var d,f=u.exports,h=c.a.extend(f),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(d=new h({data:e})).vm=d.$mount(),document.body.appendChild(d.vm.$el),d.vm.visible=!0,d.dom=d.vm.$el,d.dom.style.zIndex=999,d.vm};r.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.a.defaults.timeout=1e5,r.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),r.a.interceptors.response.use(function(e){var n=null;if(e.data)switch(e.data.return_code){case 200:n=e;break;case 201:case 202:case 203:n=e,a.a.replace({name:"login"}),l({message:e.data.return_msg});break;default:n=e,console.log("201签名错误 202签名不存在 400 接口访问错误")}return n},function(e){if(e.response)switch(e.response.status){case 500:console.log("怎么又500了");break;case 404:console.log("啥玩意又找不到了");break;default:console.log("服务器开小差了")}return!1}),n.a=r.a},4360:function(e,n,o){"use strict";o("cadf"),o("551c"),o("097d");var t=o("2b0e"),r=o("2f62");t.a.use(r.a),n.a=new r.a.Store({state:{phone:"",APP_ID:"4q4gptfjxmgg3y9h",ENCSTR:"y77nzwrmhj2in9xm",user:{},upload:"",school:"",dormitory:"",beforeInfo:null,box_no:""},mutations:{setPhone:function(e,n){e.phone=n},setUser:function(e,n){e.user=n,sessionStorage.setItem("user",JSON.stringify(n))},setBoxNo:function(e,n){console.log("!!!!!!!!","data",n),e.box_no=n},getUser:function(e){e.user=JSON.parse(sessionStorage.getItem("user"))},setUpload:function(e,n){e.upload=n},setSchool:function(e,n){e.school=n},setDormitory:function(e,n){e.dormitory=n},setBeforeInfo:function(e,n){e.beforeInfo=n,sessionStorage.setItem("beforeInfo",JSON.stringify(n))},getBeforeInfo:function(e){e.beforeInfo=JSON.parse(sessionStorage.getItem("beforeInfo"))},wxAuthority:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(e,n),sessionStorage.getItem("wxData")&&sessionStorage.removeItem("wxData");var o=location.href;location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15d558c01d3cab99&redirect_uri="+o+"&response_type=code&scope=snsapi_userinfo#wechat_redirect"},closeWindow:function(){"undefined"!=typeof WeixinJSBridge?WeixinJSBridge.call("closeWindow"):navigator.userAgent.indexOf("MSIE")>0?navigator.userAgent.indexOf("MSIE 6.0")>0?(window.opener=null,window.close()):(window.open("","_top"),window.top.close()):navigator.userAgent.indexOf("Firefox")>0?window.location.href="about:blank ":(window.opener=null,window.open("","_self",""),window.close())},stopDrop:function(){(function(e){e.addEventListener("touchstart",function(){var n=e.scrollTop,o=e.scrollHeight,t=n+e.offsetHeight;0===n?e.scrollTop=1:t===o&&(e.scrollTop=n-1)}),e.addEventListener("touchmove",function(n){e.offsetHeight<e.scrollHeight&&(n._isScroller=!0)})})(document.body),document.body.addEventListener("touchmove",function(e){e._isScroller||e.preventDefault()})}},actions:{}})},"524d":function(e,n,o){},"56d7":function(e,n,o){"use strict";o.r(n),o("cadf"),o("551c"),o("097d");var t=o("2b0e"),r=o("df49"),a=o("e7bd"),c=o("bdd9"),i=o("36b6"),s=o("ba90"),u=o("0679"),d=o("0c29"),f=o("84d6"),h=o("63b4"),l=o("1cc1"),p=o("1cf7"),m=o("7add"),b=o("ae0c"),g=o("47fe"),v=o("9173");t.a.use(r.a).use(a.a).use(c.a).use(i.a).use(s.a).use(u.a).use(d.a).use(f.a).use(h.a).use(l.a).use(p.a).use(m.a).use(b.a).use(g.a).use(v.a);var k=(o("a481"),o("4917"),o("be94")),y=(o("6762"),o("2fdb"),o("2f62")),w={created:function(){var e=navigator.userAgent;if(!sessionStorage.getItem("device"))for(var n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=0;o<n.length;o++){var t=n[o];if(e.includes(t)){sessionStorage.setItem("device",t),this.device=t;break}}for(var r=["chrome","firefox","webkit"],a=0;a<r.length;a++){var c=r[a];if(e.toLowerCase().includes(c)){this.kernel=c;break}}this.$store.commit("getUser")},data:function(){return{device:null,kernel:null}},methods:Object(k.a)({},Object(y.b)(["setBoxNo"]),{isWx:function(){navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?alert("在微信"):("box_no"in this.$route.query&&this.setBoxNo(this.$route.query.box_no),this.$router.replace({name:"goWx"}))}}),mounted:function(){console.log(this.$md5("123456"))}},x=(o("5c0b"),o("2877")),S=Object(x.a)(w,function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},[],!1,null,null,null);S.options.__file="App.vue";var _=S.exports,B=o("a18c"),O=o("4360"),I=o("365c"),P=o("8237"),T=o.n(P);o("d21e"),t.a.config.productionTip=!1,t.a.prototype.$md5=T.a,new t.a({router:B.a,store:O.a,axios:I.a,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,n,o){"use strict";var t=o("5e27");o.n(t).a},"5e27":function(e,n,o){},a18c:function(e,n,o){"use strict";o("cadf"),o("551c"),o("097d");var t=o("2b0e"),r=o("8c4f");t.a.use(r.a),n.a=new r.a({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/goodsBox",name:"goodsBox",component:function(){return Promise.all([o.e("chunk-0cd6efb4"),o.e("chunk-50dddb11")]).then(o.bind(null,"ae2c"))},children:[{path:"/goodsBox1",name:"goodsBox1"},{path:"/goodsBox2",name:"goodsBox2"},{path:"/goodsBox3",name:"goodsBox3"},{path:"/goodsBox4",name:"goodsBox4"},{path:"/goodsBox5",name:"goodsBox5"}]},{path:"/buyGoods",name:"buyGoods",component:function(){return Promise.all([o.e("chunk-0cd6efb4"),o.e("chunk-74a88b32")]).then(o.bind(null,"f06d"))},children:[{path:"/buyGoods1",name:"buyGoods1"},{path:"/buyGoods2",name:"buyGoods2"},{path:"/buyGoods3",name:"buyGoods3"},{path:"/buyGoods4",name:"buyGoods4"},{path:"/buyGoods5",name:"buyGoods5"}]},{path:"/login",name:"login",component:function(){return o.e("chunk-7d12b1ff").then(o.bind(null,"dd7b"))}},{path:"/register",name:"register",component:function(){return o.e("chunk-fee6f838").then(o.bind(null,"7803"))}},{path:"/forget",name:"forget",component:function(){return o.e("chunk-66126031").then(o.bind(null,"b436"))}},{path:"/agreement",name:"agreement",component:function(){return o.e("chunk-438664fb").then(o.bind(null,"78ff"))}},{path:"/info",name:"info",component:function(){return o.e("chunk-2781e05a").then(o.bind(null,"e37e"))},children:[{path:"/chooseSchool0/:id?",props:!0,name:"chooseSchool0",component:function(){return o.e("chunk-72a8bdf8").then(o.bind(null,"c433"))},children:[{path:"/chooseSchool1",name:"chooseSchool1"},{path:"/chooseSchool2",name:"chooseSchool2"},{path:"/chooseSchool3",name:"chooseSchool3"}]},{path:"/chooseDormitory",name:"chooseDormitory",redirect:"/chooseDormitory0",component:function(){return o.e("chunk-cb2b6d94").then(o.bind(null,"d8e5"))},children:[{path:"/chooseDormitory0",name:"chooseDormitory0"},{path:"/chooseDormitory1",name:"chooseDormitory1"}]}]},{path:"/goods",name:"goods",component:function(){return o.e("chunk-db0cf6d6").then(o.bind(null,"e524"))}},{path:"/home",name:"home",component:function(){return o.e("chunk-ea579e06").then(o.bind(null,"f820"))}},{path:"/goWx",name:"goWx",component:function(){return o.e("chunk-5e51073c").then(o.bind(null,"5efe"))}},{path:"/paySuccess",name:"paySuccess",component:function(){return o.e("chunk-77c9566a").then(o.bind(null,"ba14"))}},{path:"*",redirect:"/"}]})},a382:function(e,n,o){"use strict";var t=o("524d");o.n(t).a},d21e:function(e,n,o){}});