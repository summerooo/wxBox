(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-649271fa"],{"0f06":function(t,e,n){var r=n("3156");n("a481");var i={"/api":{target:"http://192.168.0.103:85/userapi/v1/",changeOrigin:!0,pathRewrite:{"^/api":"/"}}},s={};for(var o in i)s[o.replace(/\//,"")]=o;t.exports=r({proxy:i},s)},"1bfb":function(t,e,n){"use strict";n.d(e,"f",function(){return s}),n.d(e,"e",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return f}),n("cadf"),n("551c"),n("097d");var r=n("365c"),i=n("0f06").api,s=function(t){return r.a.post("".concat(i,"/shopPoint"),t)},o=function(t){return r.a.post("".concat(i,"/shopList"),t)},a=function(t){return r.a.post("".concat(i,"/shoppingDesc"),t)},c=function(t){return r.a.post("".concat(i,"/shopExchangeRecords"),t)},u=function(t){return r.a.post("".concat(i,"/shopInformation"),t)},l=function(t){return r.a.post("".concat(i,"/integral"),t)},f=function(t){return r.a.post("".concat(i,"/personalCenter"),t)}},3156:function(t,e,n){var r=n("9523");t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}},"6b9c":function(t,e,n){"use strict";var r=n("966b");n.n(r).a},"823f":function(t,e,n){"use strict";n.r(e);var r=(n("f751"),n("96cf"),n("1da1")),i=n("be94"),s=(n("cadf"),n("551c"),n("097d"),n("2f62")),o=n("1bfb"),a=n("7212"),c={components:{swiper:a.swiper,swiperSlide:a.swiperSlide},data:function(){return{swiperOption:{direction:"vertical",slidesPerView:"auto",freeMode:!0},detailData:{},row:null,pullingUpText:"下拉查看详情",viewDetails:!1,detailsStruct:{goods_name:"品名",goods_color:"颜色",goods_brand:"品牌",goods_weight:"重量"}}},computed:Object(i.a)({},Object(s.c)(["user"]),{swiper:function(){return this.$refs.mySwiper.swiper}}),methods:{firstShow:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.g)(Object.assign({},this.user,this.row));case 2:e=t.sent,this.detailData=e.data.return_data;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),exchangeDetails:function(){var t=this;this.$refs.img.style.alignSelf="flex-start",this.$refs.img.style.height="120px",this.$refs.img.style.padding="14px",setTimeout(function(){t.$router.push({name:"exchangeDetails",query:t.$route.query})},150)},ss:function(){var t=this,e=this.swiper;e.on("touchStart",function(){t.pullingUpText="下拉查看详情"}),e.on("touchMove",function(){e.translate<-45&&setTimeout(function(){t.pullingUpText="释放查看详情"},10)}),e.on("touchEnd",function(){e.translate>45&&(t.viewDetails=!1),!t.viewDetails&&e.isEnd&&e.translate<-45&&(t.viewDetails=!0)})}},created:function(){"row"in this.$route.query?this.row=JSON.parse(this.$route.query.row):this.row=this.$route.query,this.firstShow()},mounted:function(){this.ss()}},u=(n("6b9c"),n("2877")),l=Object(u.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("swiper",{ref:"mySwiper",staticClass:"swiperAll",attrs:{options:t.swiperOption}},[n("swiper-slide",{staticClass:"swiperContainer"},[t.viewDetails?n("div",{staticClass:"viewDetails"},[n("ul",t._l(t.detailsStruct,function(e,r){return n("li",{key:r},[n("p",[t._v(t._s(e))]),t._v(t._s(t.detailData[0][r])+"\n          ")])}),0),n("div",{domProps:{innerHTML:t._s(t.detailData[0].goods_desc)}})]):n("div",{staticClass:"swiperContent"},[n("div",{ref:"img",staticClass:"img"},[n("img",{attrs:{src:t.row.goods_img,alt:""}})]),n("div",{staticClass:"info"},[n("header",{staticClass:"goodsName"},[t._v(t._s(t.row.goods_name))]),n("footer",{staticClass:"payPoints"},[t._v(t._s(t.row.pay_points)+"积分")])]),n("div",{staticClass:"loadmore"},[t._v(t._s(t.pullingUpText))])])])],1),n("footer",{staticClass:"footer"},[n("cube-button",{attrs:{primary:""},on:{click:t.exchangeDetails}},[t._v("去兑换")])],1)],1)},[],!1,null,"9d81f1ca",null);l.options.__file="detail.vue",e.default=l.exports},9523:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"966b":function(t,e,n){}}]);