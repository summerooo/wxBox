(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0abb5eb7"],{"0f06":function(t,e,r){var n=r("3156");r("a481");var o={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},i={};for(var a in o)i[a.replace(/\//,"")]=a;t.exports=n({proxy:o},i)},"1bfb":function(t,e,r){"use strict";r.d(e,"d",function(){return i}),r.d(e,"c",function(){return a}),r.d(e,"e",function(){return c}),r.d(e,"a",function(){return s}),r.d(e,"b",function(){return u});var n=r("365c"),o=r("0f06").api,i=function(t){return n.a.post("".concat(o,"/shopPoint"),t)},a=function(t){return n.a.post("".concat(o,"/shopList"),t)},c=function(t){return n.a.post("".concat(o,"/shoppingDesc"),t)},s=function(t){return n.a.post("".concat(o,"/shopExchangeRecords"),t)},u=function(t){return n.a.post("".concat(o,"/shopInformation"),t)}},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return o})},3156:function(t,e,r){var n=r("9523");t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}},4291:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAHGElEQVRYR81Ye3CU1RX/nbu77CNPIGlACdn9hNFqsEpgHALyEJFhU99UBojFNoGp44vxERQcCJ0KKEWQooNtkuILFDSWkcJgHyigOIoN2FbCONlveQQhb1iyz2/3Ovfb3bDJvr5Fx/H8tfvde3/nd+8595x7DuEnKvQT5YWMiY0aNapQUZQKxthkAGM45xIR5XLOGRH1AjgF4BiAg5zzPbIsH7+czWsmVlJSUs4YqyEiOwCDVmU6Hf7zi2sC2zYtb28cNt7r0LouLTGr1Wolog1EdKdW0ETzRlsVPFnlarp1gq8eZ90NVA5PKryUxCRJmgdgM4CcGBB+5c+U1jkVnivKSgNMKlYwOC8ERoCrl3DyjB5fHTdg/+FB2P+5EQGlv4qqX/ViyULXWZ0u9DRs3tcJ4IkIJiUmSVItgBWxhIjwzmvPd/kmlvnmAZTWnJ09DFsaLfjru1nw+C6pmjzeh5dre2Ax8l0wuBdQMboGkktIbCApzrkz1xL67ZEP2qpAND9Tk7aeY1iyNg+Hmox9S8tv9KF+dTcGGfg3AL+NbF5nLG4cMZvNdj8RvR6dxDn/2GwO3PP/XZ0bk5EKhQCfn2A2JbSKCiXmrH41Bw3vZvXpnz3TjedrLgDEHXDTJLrW/W10sB+xkSNHSnq9/iiAbDFBkAoEArNOHeh4DGCrY3d0tp3hzZ0W/OuQCS2ndAgGCcZBHGOv9eM3s92YPsGX8GDX1mVj8zYVXpUNy3pw+y1eoe1TWD1TiKCI7/2ISZK0G8CsCCmZcz5W/qjNhhD/HET6KNiej02oeSEPbm/yu/Por114bIEIa/2Fc+Ch2nzsPWhSB4bmB/HP1zqQm62e9gqyuX/fj5jVap3CGPsoQoozxm5uaWn5hDvNB8FpYhS+2aHHXQ8OjbttiY5nx8ZOjL0uEDd04SJhxgMF6OjWqWOP3H8Rix+4KE7NC/CfC3/r27IkSX8HIIKnkK0Oh2M+P2GcgZDuw1jkpety8c5uS98nAVox1YucrJBq1tqNOQjxMOx9djdWP3EhoUm37zHjmT/mqWO52SEc2t4Gk3o3QpvJ5n1QRSgpKRnOGDtFRGILXFGU0pMnT37NZcv7AO6KRV5QMxgHvwzfrlElCvY2dPRTPGfxEBz+7yD1W1mpH9tfiosE6lhAAaZVFuLb9vCpxfhaL3o9w1RiNputmoj+EjHjIVmWy3kzcmA0dwAU1hKRxg9NWPNqDvJyOJ6sdmHmpP5OPv/xwfjsaJh4KmJifF19Nl7ZGr4It0/zYMOz5yNa+NwosTeIqDJCbJksy6t4i8UOBmFezdLZzTB5fiG8kWA6x+7GqiSmFKBNXxsw+5GhKn7hkCA+29Ee1kWoixJrIqIbxLdgMHjLiRMn9nGnaSk4e04rK2Gahc8OxoEvLgXRt9d3Yvz18c4fxRRrSiuKoETS1pfvn0N+LhfEDqvEJEnqBpAvfvv9/hGnT59u5Q5LHQhVWogFQ8Djq/Kwa5+5b3rlnW6sfDSx48di3rqgAPLpcCTaubkDpaPVMNYdPTEl4vjwer1ZZ86ccXOneQc4zdZCbP2WbGx641LQ/OU0D15ceh46ln71PQ8PwdFjYTfeuq4LN93gVw33vYl949SjYtFQNfILmTHRi5dX9EAXvmxp5d6Hh+BIMmIJTem01IGnN+UTa/Lwt3+ETTiiSMHu+k5kmZPnzIFM05ky3vkdpmUg9odUW/b5gbK7i+CJpKYli1xYNCc+DSXDSOv8NpstPlw4LXbw1OHiuKyHvbqgT++flvfAPkUkZG2iJVwsJKI/CzjOecoAG6tS5LyplYU472Lqk2dPXQeKhwe1sUoVYEN8XsYpaaBW8Ur9qtmAa64KYHhhSDOplCkpK5KSBNqAJP6Ww+Go5A7jbSDdXs3aMpioKYkLPKvVOpUxti9izkvPHtn8CUDlyXQea9Fj/xdGlF3nx7gxyaP8QBfQ/OyJnJqmh2JUibNVh1lVBfAHCEQc217sSpmCwpsGHlqZj70HND4UxaLi4uKrDAbDES1PazH/g3+bsPg5NZOp8lS1C7+bmzpcDHxar1/agzump3laC/BMipG2Tgb7wgJ0n2cwGTkaN3XiaknNdXGSqBi5d6YbL4hiBFyGhyYmLUaiaJIkrQSwPPqfcy7n5oaqjuxsqwLvX751dDMc/p8BY0YruHJY4lAhyren1+bh05jybcKNPjRkUr7FkEtU8L69ZU1XYNI439yMCt73svqyg8BXC94VPbCYMix4Y8glbBGMKFJa77N7rhg3JsBsIyItAhbTImhO3SKoqXad0+tDSy6rRRAlF2mqvEREd2QQpuKmiqbKU9Wupunlvnro3A1U/D2aKrHol9+G4k3XXx3Y9kpte2PROF+L1s2lbUMNBIpp3E0BUJqkcdcM4MCP0rjTutMfal7GJ/ZDKU6H8x1HrW2JZL/K6QAAAABJRU5ErkJggg=="},"485a":function(t,e,r){"use strict";r.r(e);var n=(r("f751"),r("96cf"),r("1da1")),o=r("be94"),i=(r("cadf"),r("551c"),r("097d"),r("1bfb")),a=r("2f62"),c={data:function(){return{headerData:"",shopListData:[],title:"",changeBg:!0}},watch:{$route:function(t){var e="";switch(this.changeBg=!1,t.name){case"points":this.firstShow(),this.changeBg=!0,e="积分商城";break;case"exchangeDetails":e="兑换信息";break;case"record":e="兑换记录";break;case"detail":e="商品详情";break;case"rule":e="积分规则"}this.title=e}},computed:Object(o.a)({},Object(a.c)(["user"])),methods:Object(o.a)({},Object(a.b)(["setUser"]),{firstShow:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.d)(this.user);case 2:return t.t0=t.sent,t.next=5,Object(i.c)(this.user);case 5:t.t1=t.sent,e={sp:t.t0,sl:t.t1},this.headerData=e.sp.data.return_data.point,this.shopListData=e.sl.data.return_data;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),back:function(){return"record"===this.$route.name?this.$router.push({name:"points"}):"points"!==this.$route.name?this.$router.go(-1):void(window.location.href="scheme://post/pathPrefix")},viewDetails:function(t,e){this.$router.push({name:"detail",query:{row:JSON.stringify(t)}})}}),created:function(){this.setUser(Object.assign({},{school_id:3,user_id:1,login_token:"49f6280c69de8c5cf6718e41facd5305"},this.$route.query)),"points"===this.$route.name&&this.firstShow()},mounted:function(){this.title="商品详情",this.$refs.container&&(this.$refs.container.style.height="calc(100% - ".concat(this.$refs.searchNav.offsetHeight,"px)"))}},s=(r("e9a8"),r("2877")),u=Object(s.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("div",{ref:"searchNav",class:{searchNav:!0,changeBg:t.changeBg}},[n("transition",{attrs:{name:"back"}},[n("i",{staticClass:"cubeic-back backIcon",on:{click:t.back}})]),n("div",[t._v(t._s(t.title))])],1),n("div",{ref:"container",staticClass:"container"},["points"===t.$route.name?n("div",{staticClass:"containerInside"},[n("header",{staticClass:"header"},[t._v("\n        "+t._s(t.headerData)+"\n        "),n("p",[t._v("可用积分")])]),n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:{name:"record"}}},[n("img",{attrs:{src:r("9031"),alt:""}}),t._v("兑换记录\n        ")]),n("router-link",{attrs:{to:{name:"rule"}}},[n("img",{attrs:{src:r("4291"),alt:""}}),t._v("积分规则\n        ")])],1),n("ul",{staticClass:"content"},t._l(t.shopListData,function(e,r){return n("li",{key:r,on:{click:function(n){t.viewDetails(e,r)}}},[n("img",{attrs:{src:e.goods_img}}),n("header",{staticClass:"goodsName"},[t._v(t._s(e.goods_name))]),n("footer",{staticClass:"payPoints"},[t._v(t._s(e.pay_points)+"积分")])])}),0),n("footer",{staticClass:"footer"},[t._v("我是有底线的~")])]):n("router-view")],1)])},[],!1,null,"40cc5d15",null);u.options.__file="index.vue",e.default=u.exports},"8c90":function(t,e,r){},9031:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAC1UlEQVRYR+2YTUhUURTH/2feG20cZyyzL5BRR5E2GQQRtIigRemisNzUJkEXfQkRChVZ0KIQFC3ahFibKUWDvkQq0VIKW7gwXEQLm0dY4EeDac/Rp94bb/JpOur0ujM6iXc579xzf/M/55173iFE6aI/uVwul1uW5cuc8xwi2hZB5nEAnZzzu16v1wOAzz9rBiwlJSXHYrHUE5E9gkBBru029uJd3UCrw45X5FY/GAYBsOTk5Ayr1dq13FAGRP5RFaVnR3TVqpE6epoILADmdrvvA8ifNuwHUHB4n+/tzYtaJxGlh1vBAZ8F5TXxeN5qC7iWLBzttQPYmsQAzovJ7a8wwPoAbNaNGGO5iqI84UpsNrjUFG4ow98UA7ILktDzRQ78VFbyA3mH/ADxHkr1ZxhgM8mnadrG3t5eH/9sKwLR7UiB6X4vVThR3xQXOKKkcASnjquAHsbUUSkIjDG2QVGUIe61nQeoMpJgVyqdqG2cBwaA0kZpDWwh5VenYowBXR9laBNzLgnTqZfumsKmRDZnn5BiFTV23PGIXwbrnQztD7/DYZ+9fYTASqsc8Dz9XQhFVoyVo6NhEIkJYQJT/YSmN7HCodyROYGs7ZPhC6WISqH2CoUylHOR56sXbPgnYVwTKxeJCQySNFdfIcUePLNBfzN5UI9pLogZrkk0VvsQGzO7Twjswg0nHjevM0exiPX7hkFs0Xuu6SUE9q3fgnuP4uAf+/dQ6q3C7iwNRw7orX6YFAuLVIs4EVJsDczoYP/7RrGlIwbXbjmWrGOyxFFcqOLYwTFTkRfKsaLrTjS+Dl0u9uzUUFc1tHxg3Z9klNfYl1ZMBs6cULF318TygZk6yaSxUChNnmXKfHWARduXeNTOLoKmPXn7h9vKStVOgDJNJU4IY719+ton/d20Z6XnYydzVVw9t8B8TP+TKzVRTHDwljZP/0tHPJopTe0yBI/aGewv5zjSRcwSXNMAAAAASUVORK5CYII="},9523:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,h=e.regeneratorRuntime;if(h)u&&(t.exports=h);else{(h=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=E.prototype=x.prototype=Object.create(g);k.prototype=w.constructor=E,E.constructor=k,E[s]=k.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},L(N.prototype),N.prototype[c]=function(){return this},h.AsyncIterator=N,h.async=function(t,e,r,n){var o=new N(b(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return U()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=A(t,e,r);if("normal"===s.type){if(n=r.done?d:l,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function A(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function E(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){function e(r,n,i,a){var c=A(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},a)}a(c.arg)}var r;this._invoke=function(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=A(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:U}}function U(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},e9a8:function(t,e,r){"use strict";var n=r("8c90");r.n(n).a}}]);