(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3df4e731"],{"0f06":function(t,e,n){var i=n("3156");n("a481");var r={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},s={};for(var o in r)s[o.replace(/\//,"")]=o;t.exports=i({proxy:r},s)},"1bfb":function(t,e,n){"use strict";n.d(e,"f",function(){return s}),n.d(e,"e",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return f}),n("cadf"),n("551c"),n("097d");var i=n("365c"),r=n("0f06").api,s=function(t){return i.a.post("".concat(r,"/shopPoint"),t)},o=function(t){return i.a.post("".concat(r,"/shopList"),t)},a=function(t){return i.a.post("".concat(r,"/shoppingDesc"),t)},c=function(t){return i.a.post("".concat(r,"/shopExchangeRecords"),t)},u=function(t){return i.a.post("".concat(r,"/shopInformation"),t)},l=function(t){return i.a.post("".concat(r,"/integral"),t)},f=function(t){return i.a.post("".concat(r,"/personalCenter"),t)}},3156:function(t,e,n){var i=n("9523");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}},"823f":function(t,e,n){"use strict";n.r(e);var i=(n("f751"),n("96cf"),n("1da1")),r=n("be94"),s=(n("cadf"),n("551c"),n("097d"),n("2f62")),o=n("1bfb"),a=n("7212"),c={components:{swiper:a.swiper,swiperSlide:a.swiperSlide},data:function(){return{swiperOption:{observer:!0,observeParents:!0,direction:"vertical",slidesPerView:"auto",freeMode:!0},detailData:{},row:null,pullingUpText:"下拉查看详情",viewDetails:!1,detailsStruct:{goods_name:"品名",goods_color:"颜色",goods_brand:"品牌",goods_weight:"重量"}}},computed:Object(r.a)({},Object(s.c)(["user"]),{options:function(){return{pullDownRefresh:{threshold:60}}},swiper:function(){return this.$refs.mySwiper.swiper}}),methods:{firstShow:function(){var t=Object(i.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.g)(Object.assign({},this.user,this.row));case 2:for(n in e=t.sent,this.detailData=e.data.return_data,e.data.return_data[0])this.$set(this.detailData,n,e.data.return_data[0][n]);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onPullingDown:function(){this.$refs.scroll.forceUpdate(),this.viewDetails=!1},exchangeDetails:function(){var t=this;this.viewDetails?this.$router.push({name:"exchangeDetails",query:this.$route.query}):(this.$refs.img.style.alignSelf="flex-start",this.$refs.img.style.height="120px",this.$refs.img.style.padding="14px",setTimeout(function(){t.$router.push({name:"exchangeDetails",query:t.$route.query})},150))},ss:function(){var t=this,e=this.swiper;e.on("touchStart",function(){t.pullingUpText="下拉查看详情"}),e.on("touchMove",function(){e.translate<-45&&setTimeout(function(){t.pullingUpText="释放查看详情"},10)}),e.on("touchEnd",function(){!t.viewDetails&&e.isEnd&&e.translate<-45&&(t.viewDetails=!0,t.$nextTick(function(){t.$refs.scroll.refresh()}))})}},created:function(){"row"in this.$route.query?this.row=Object.assign({},this.user,JSON.parse(this.$route.query.row)):this.row=Object.assign({},this.user,this.$route.query),this.firstShow()},mounted:function(){this.ss()}},u=(n("880e"),n("2877")),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("swiper",{directives:[{name:"show",rawName:"v-show",value:!t.viewDetails,expression:"!viewDetails"}],ref:"mySwiper",staticClass:"swiperAll",attrs:{options:t.swiperOption}},[n("transition",{attrs:{name:"fade"}},[t.viewDetails?t._e():n("swiper-slide",{key:"previewDetails",staticClass:"swiperContainer"},[n("div",{staticClass:"swiperContent"},[n("div",{ref:"img",staticClass:"img"},[n("img",{attrs:{src:t.row.goods_img,alt:""}})]),n("div",{staticClass:"info"},[n("header",{staticClass:"goodsName"},[t._v(t._s(t.row.goods_name))]),n("footer",{staticClass:"payPoints"},[t._v(t._s(t.row.pay_points)+"积分")])]),n("div",{staticClass:"loadmore"},[t._v(t._s(t.pullingUpText))])])])],1)],1),n("cube-scroll",{directives:[{name:"show",rawName:"v-show",value:t.viewDetails,expression:"viewDetails"}],ref:"scroll",staticClass:"cubeScroll",attrs:{options:t.options,"scroll-events":["scroll"]},on:{"pulling-down":t.onPullingDown},scopedSlots:t._u([{key:"pulldown",fn:function(t){return[n("div")]}}])},[n("div",{staticClass:"viewDetails"},[n("ul",t._l(t.detailsStruct,function(e,i){return n("li",{key:i},[n("p",[t._v(t._s(e))]),t._v(t._s(t.detailData[i])+"\n        ")])}),0),n("div",{domProps:{innerHTML:t._s(t.detailData.goods_desc)}})])]),n("footer",{staticClass:"footer"},[n("cube-button",{attrs:{primary:""},on:{click:t.exchangeDetails}},[t._v("去兑换")])],1)],1)},[],!1,null,"381e2ff0",null);l.options.__file="detail.vue",e.default=l.exports},"880e":function(t,e,n){"use strict";var i=n("d53b3");n.n(i).a},9523:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d53b3:function(t,e,n){}}]);