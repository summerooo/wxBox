(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c543410c"],{1170:function(e,t,r){"use strict";var s=r("8249");r.n(s).a},8249:function(e,t,r){},ae2c:function(e,t,r){"use strict";r.r(t);var s=(r("a481"),r("ac4d"),r("8a81"),r("f751"),r("c5f6"),r("4917"),r("96cf"),r("1da1")),n=(r("ac6a"),r("456d"),r("be94")),a=(r("cadf"),r("551c"),r("097d"),r("2740")),o=r("17ab"),i=r("4875"),c=r("7766"),u=r("e57e"),h=r("7457"),l=r("365c"),p=r("0f06").api,d=function(e){return l.a.post("".concat(p,"/orderReplenishment"),e)},f=function(e){return l.a.post("".concat(p,"/orderReplenishmentGoods"),e)},g=function(e){return l.a.post("".concat(p,"/getBoxHandlingFee"),e)},m=function(e){return l.a.post("".concat(p,"/boxReceive"),e)},b=function(e){return l.a.post("".concat(p,"/orderSearchGoodsLog"),e)},v=function(e){return l.a.post("".concat(p,"/orderSearchGoodsHot"),e)},x=function(e){return l.a.post("".concat(p,"/orderSearchLogDelete"),e)},_=function(e){return l.a.post("".concat(p,"/orderSearchGoods"),e)},w=r("2f62"),k={components:{sxDropBall:a.a,sxMenu:o.a,sxInputNumber:i.a,sxPopup:c.a,sxSearchPanel:u.a,sxSearchList:h.a},data:function(){return{data:[],menusData:[],defaultActive:"",defaultActiveItem:{},goodsData:[],options:{pullUpLoad:!0},current:"",scrollY:0,cart:{},chooseCommodity:{},searching:0,searchData:"",timer:"",shoppingBoxImage:"",shoppingBoxImageStatus:{none:"https://alipic.lanhuapp.com/psc793f421061964d0-27b0-4e37-8345-29e37a0a96c1",open:"https://alipic.lanhuapp.com/ps82d84fa175b0fa70-7d84-430a-8140-566ea882f225",full:"https://alipic.lanhuapp.com/ps106a53bfaa2ac380-6244-4eac-9069-1d49d36b310f"},page:1,boxFee:{box_fee:"",handling_fee:"",min_fee:"",max_fee:""},panelData:null,listData:null,searchFalse:!1,barbar:!1}},computed:Object(n.a)({},Object(w.c)(["user","beforeInfo"]),{destination:function(){return{top:window.innerHeight-40,left:45}},cartLength:function(){return Object.keys(this.cart).length},cartMoney:function(){var e=0;for(var t in this.cart)e+=this.cart[t].goods_price*this.cart[t].goods_number;return e.toFixed(2)}}),watch:{searchData:function(){var e=this;this.searchFalse||(clearTimeout(this.timer),this.timer=setTimeout(function(){e.changeSearch()},200))},$route:function(){this.routerInit()}},created:function(){console.log(this.$route.query),this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.getBeforeInfo(),this.routerInit(),this.firstShow()},methods:Object(n.a)({},Object(w.b)(["getBeforeInfo","closeWindow"]),{routerInit:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.$route.name.match(/\d+/g)?this.$route.name.match(/\d+/g):[]).length||(t[0]=0),this.searching=Number(t[0]),4===this.searching&&this.showSearchData(),0===this.searching&&this.$refs.searchInput.$refs.input.blur();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),goodsShow:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(Object.assign({},this.user,this.beforeInfo,{cate_id:this.defaultActive,page:this.page,order_origin:4}));case 2:for(t=e.sent,this.goodsData=t.data.return_data,r=!0,s=!1,n=void 0,e.prev=7,a=this.goodsData[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)i=o.value,this.$set(this.chooseCommodity,i.goods_id,Object.assign({},i,{goods_number:0},this.chooseCommodity[i.goods_id]));e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),s=!0,n=e.t0;case 15:e.prev=15,e.prev=16,r||null==a.return||a.return();case 18:if(e.prev=18,!s){e.next=21;break}throw n;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",t.data.return_data);case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(){return e.apply(this,arguments)}}(),searchShow:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(t){var r,s,n,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.searchingSubmit(!1,t);case 2:for(r=e.sent,this.goodsData=r,s=!0,n=!1,a=void 0,e.prev=7,o=this.goodsData[Symbol.iterator]();!(s=(i=o.next()).done);s=!0)c=i.value,this.$set(this.chooseCommodity,c.goods_id,Object.assign({},c,{goods_number:0},this.chooseCommodity[c.goods_id]));e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),n=!0,a=e.t0;case 15:e.prev=15,e.prev=16,s||null==o.return||o.return();case 18:if(e.prev=18,!n){e.next=21;break}throw a;case 21:return e.finish(18);case 22:return e.finish(15);case 23:r.length?this.$router.push({name:"goodsBox3"}):this.$router.push({name:"goodsBox1"});case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(t){return e.apply(this,arguments)}}(),firstShow:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Object.assign({},this.user,this.beforeInfo,{order_origin:4}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:for(s in r=t.data.return_data)this.$set(this.menusData,s,Object.assign({},r[s],{label:r[s].cate_name,value:r[s].cate_id}));if(this.menusData.unshift({label:"全    部",value:0,cate_id:0,cate_name:"全    部"}),this.menusData.length){e.next=10;break}return e.abrupt("return");case 10:return this.defaultActive=this.menusData[0].value,this.goodsShow(),e.next=14,g(Object.assign({},this.user,this.beforeInfo));case 14:e.t0=e.sent,(n=e.t0)&&(this.boxFee=Object.assign({},this.boxFee,n.data.return_data)),this.barbar=!0;case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showGoods:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(Object.assign({},this.user,this.beforeInfo,{order_origin:4,cate_id:this.defaultActive,page:this.page}));case 2:if((t=e.sent).data.return_data.length){e.next=5;break}return e.abrupt("return",this.$createToast({txt:"该分类无更多商品",type:"txt"}).show());case 5:return e.next=7,this.goodsData.concat(t.data.return_data);case 7:for(this.goodsData=e.sent,r=!0,s=!1,n=void 0,e.prev=11,a=this.goodsData[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)i=o.value,this.$set(this.chooseCommodity,i.goods_id,Object.assign({},i,{goods_number:0},this.chooseCommodity[i.goods_id]));e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),s=!0,n=e.t0;case 19:e.prev=19,e.prev=20,r||null==a.return||a.return();case 22:if(e.prev=22,!s){e.next=25;break}throw n;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));return function(){return e.apply(this,arguments)}}(),scrollHandler:function(e){var t=e.y;this.scrollY=-t},handleSelect:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(t,r){var s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,r),(s=this.$createToast({time:0})).show(),this.page=1,this.defaultActive=t.value,e.next=7,this.goodsShow();case 7:s.hide(),this.defaultActiveItem=t,this.$refs.scroll.scrollTo(0,0),this.$refs.scroll.refresh();case 11:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),changeHandler:function(e){console.log("changed to:",e)},stickyChangeHandler:function(e){console.log("sticky-change",e)},onPullingDown:function(){var e=this;setTimeout(function(){e.$refs.scroll.forceUpdate()},1e3)},onPullingUp:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(3===this.searching){e.next=4;break}return this.page++,e.next=4,this.showGoods();case 4:this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),parabola:function(e){this.$refs.drop.drop(e)},openTheshoppingBox:function(){var e=this;if(!Object.keys(this.cart).length)return!1;this.$nextTick(function(){e.$refs.popup.isVisible?e.$refs.popup.closePopup():e.$refs.popup.openPopup()})},closePopup:function(){var e=this;this.$nextTick(function(){e.$refs.popup.closePopup()})},isMax:function(){this.$createToast({txt:"库存不足",type:"txt"}).show()},clickAction:function(e,t){this.$set(this.cart,t.goods_id,this.chooseCommodity[t.goods_id]),this.cart[t.goods_id].goods_number||this.$delete(this.cart,t.goods_id),Object.keys(this.cart).length?this.shoppingBoxImage=this.shoppingBoxImageStatus.open:(this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup()),this.boxFee.max_fee&&this.boxFee.max_fee-this.boxFee.box_fee-this.boxFee.handling_fee-this.cartMoney<=0&&(this.shoppingBoxImage=this.shoppingBoxImageStatus.full,this.$createToast({txt:"盒子满了",type:"txt"}).show())},clearCart:function(){for(var e in this.cart)this.$delete(this.cart,e);for(var t in this.chooseCommodity)this.$set(this.chooseCommodity[t],"goods_number",0);this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup()},focusSearch:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(4!==this.searching){e.next=2;break}return e.abrupt("return");case 2:if(!this.searchData){e.next=4;break}return e.abrupt("return");case 4:if(!this.panelData){e.next=6;break}return e.abrupt("return",this.$router.push({name:"goodsBox4"}));case 6:this.$router.push({name:"goodsBox4"});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showSearchData:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n,a,o,i,c,u,h,l,p,d,f,g,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.panelData=[],e.next=3,b(this.user);case 3:for(e.t0=e.sent,t=e.t0,r=t.data.return_data,this.$set(this.panelData,0,{label:"历史搜索",icon:"box-lajitong"}),this.$set(this.panelData[0],"children",[]),s=!0,n=!1,a=void 0,e.prev=11,o=r[Symbol.iterator]();!(s=(i=o.next()).done);s=!0)c=i.value,this.panelData[0].children.push({label:c.goods_name,value:c.goods_name});e.next=19;break;case 15:e.prev=15,e.t1=e.catch(11),n=!0,a=e.t1;case 19:e.prev=19,e.prev=20,s||null==o.return||o.return();case 22:if(e.prev=22,!n){e.next=25;break}throw a;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,v(this.user);case 29:if(e.t2=e.sent,u=e.t2,!(h=u.data.return_data).length){e.next=54;break}for(this.$set(this.panelData,1,{label:"热门搜索"}),this.$set(this.panelData[1],"children",[]),l=!0,p=!1,d=void 0,e.prev=38,f=h[Symbol.iterator]();!(l=(g=f.next()).done);l=!0)m=g.value,this.panelData[1].children.push({label:m.goods_name,value:m.goods_name});e.next=46;break;case 42:e.prev=42,e.t3=e.catch(38),p=!0,d=e.t3;case 46:e.prev=46,e.prev=47,l||null==f.return||f.return();case 49:if(e.prev=49,!p){e.next=52;break}throw d;case 52:return e.finish(49);case 53:return e.finish(46);case 54:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26],[38,42,46,54],[47,,49,53]])}));return function(){return e.apply(this,arguments)}}(),changeSearch:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.searchData.length){e.next=2;break}return e.abrupt("return",this.$router.replace({name:"goodsBox4"}));case 2:return e.next=4,this.searchingSubmit(!1);case 4:if((t=e.sent).length){e.next=7;break}return e.abrupt("return",this.$router.replace({name:"goodsBox1"}));case 7:for(r in this.listData=[],t)this.$set(this.listData,r,{label:t[r].goods_name});this.$router.replace({name:"goodsBox5"});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),blurSearch:function(){switch(this.searching){case 1:case 2:case 4:case 5:if(this.searchFalse)return;this.$refs.searchInput.$refs.input.focus()}},searchingSubmit:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(n.length>0&&void 0!==n[0])||n[0],r=n.length>1?n[1]:void 0,!t){e.next=4;break}return e.abrupt("return",this.searchShow(this.searchData));case 4:return e.next=6,_(Object.assign({},this.user,this.beforeInfo,{order_origin:4,goods_name:r||this.searchData}));case 6:return s=e.sent,e.abrupt("return",s.data.return_data);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),back:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData="",e.next=4,this.$refs.searchInput.$refs.input.blur();case 4:return e.next=6,this.goodsShow();case 6:return e.next=8,this.$router.replace({name:"goodsBox"});case 8:setTimeout(function(){t.searchFalse=!1},300),this.$refs.scroll.refresh();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(){var t,r,s,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r in t=[],this.cart)t.push({goods_code:this.cart[r].goods_code,goods_number:this.cart[r].goods_number});return e.next=4,m(Object.assign({},this.user,this.beforeInfo,{goods_info:t,order_origin:4}));case 4:s=e.sent,n=this,200===s.data.return_code?this.$createDialog({type:"alert",content:s.data.return_msg,onConfirm:function(){n.closeWindow()}}).show():this.$createToast({txt:s.data.return_msg,type:"txt"}).show();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),panelIcon:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("历史搜索"!==t.row.label){e.next=6;break}return e.next=3,x(this.user);case 3:r=e.sent,this.$createToast({txt:r.data.return_msg,type:"txt"}).show(),this.showSearchData();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPanelCell:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.cell.label,e.next=4,this.searchShow(t.cell.data);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getListRow:function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.row.label,e.next=4,this.searchShow(t.row.label);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),mounted:function(){document.title="认领补货"}},y=(r("1170"),r("2877")),C=Object(y.a)(k,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"all"},[s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[e.boxFee.max_fee?s("div",{ref:"notice",staticClass:"notice"},[s("i",{staticClass:"box-laba"}),e._v("\n        您的盒子目前有"+e._s(e.cartMoney)+"元商品，还可添加"+e._s(e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee-e.cartMoney)+"元商品\n      ")]):e._e(),s("div",{ref:"searchNav",staticClass:"searchNav"},[s("transition",{attrs:{name:"back"}},[[0].includes(e.searching)?e._e():s("i",{staticClass:"cubeic-back backIcon",on:{click:e.back}})]),s("cube-input",{ref:"searchInput",attrs:{type:"search",placeholder:"请输入商品名称"},on:{focus:e.focusSearch,blur:e.blurSearch},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchingSubmit(t):null}},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[s("i",{staticClass:"cubeic-search",attrs:{slot:"prepend"},slot:"prepend"})])],1),s("div",{ref:"searchContent",staticClass:"searchContent"},[s("div",{directives:[{name:"show",rawName:"v-show",value:[0].includes(e.searching),expression:"[0].includes(searching)"}],ref:"searchContentLeft",staticClass:"left"},[s("sx-menu",{attrs:{menusData:e.menusData,defaultActive:e.defaultActive},on:{select:e.handleSelect}})],1),s("cube-scroll",{directives:[{name:"show",rawName:"v-show",value:[0,3].includes(e.searching),expression:"[0, 3].includes(searching)"}],ref:"scroll",staticClass:"right",attrs:{options:e.options,"scroll-events":["scroll"]},on:{"pulling-up":e.onPullingUp,scroll:e.scrollHandler}},[e.goodsData.length?s("ul",{staticClass:"rightDetails"},e._l(e.goodsData,function(t,r){return s("li",{key:r},[s("div",{staticClass:"goodsRow"},[s("img",{attrs:{src:t.goods_img}}),s("div",{staticClass:"goodsContent"},[s("div",{staticClass:"goodsContentTop"},[e._v("\n                    "+e._s(t.goods_name)+"\n                    "),s("div",{staticClass:"abstract"},[s("span",[e._v(e._s(t.goods_spec))]),e._v(" \n                      "),s("span",[e._v(e._s(t.stock_num>0?"库存"+t.stock_num+t.goods_unit:"已售空"))])])]),s("div",{staticClass:"goodsContentBottom"},[s("font",[s("span",[e._v("￥"+e._s(t.goods_price))]),e._v("/"+e._s(t.goods_unit))]),t.stock_num>0?s("sx-input-number",{attrs:{max:t.stock_num,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:e.chooseCommodity[t.goods_id].goods_number,callback:function(r){e.$set(e.chooseCommodity[t.goods_id],"goods_number",r)},expression:"chooseCommodity[food.goods_id].goods_number"}}):e._e()],1)])])])}),0):s("div",{staticClass:"noGoodsData"},[s("img",{attrs:{src:r("1a10"),alt:""}}),e._v("\n            暂无商品\n            ")])]),s("div"),[1].includes(e.searching)?s("div",{staticClass:"noSearch"},[s("img",{attrs:{src:r("74c1"),alt:""}}),e._v("\n          没有搜索结果\n          ")]):e._e(),[4].includes(e.searching)?s("sx-search-panel",{attrs:{panelData:e.panelData},on:{panelIcon:e.panelIcon,getPanelCell:e.getPanelCell}}):e._e(),[5].includes(e.searching)?s("sx-search-list",{attrs:{listData:e.listData},on:{getListRow:e.getListRow}}):e._e()],1)]),s("sx-popup",{ref:"popup",attrs:{bar:Boolean(Number(e.boxFee.max_fee))}},[s("div",{attrs:{slot:"bar"},slot:"bar"},[e._v("\n        还可添加"+e._s(e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee-e.cartMoney)+"元，盒子就满了\n      ")]),s("div",{staticClass:"popupLeft",attrs:{slot:"left"},slot:"left"},[e._v("\n        已选商品 "),s("span",[e._v("(共"+e._s(e.cartLength)+"件商品)")])]),s("div",{staticClass:"popupRight",attrs:{slot:"right"},on:{click:e.clearCart},slot:"right"},[s("i",{staticClass:"box-lajitong"}),e._v("清空\n      ")]),s("transition-group",{attrs:{name:"list"}},e._l(e.cart,function(t,r){return s("div",{key:t.goods_id,staticClass:"popupContent list-item",attrs:{"data-index":r}},[s("div",{staticClass:"popupContentDetails"},[s("span",[e._v(e._s(t.goods_name)+" "+e._s(t.goods_spec)+"/"+e._s(t.goods_unit))]),s("span",[e._v("￥"+e._s(t.goods_price))])]),s("sx-input-number",{attrs:{max:t.stock,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:t.goods_number,callback:function(r){e.$set(t,"goods_number",r)},expression:"row.goods_number"}})],1)}),0)],1)],1),s("div",{ref:"bottom",staticClass:"bottom"},[s("div",{staticClass:"box",on:{click:e.closePopup}},[s("div",{staticClass:"shoppingBox",on:{click:function(t){return t.stopPropagation(),e.openTheshoppingBox(t)}}},[s("img",{attrs:{src:e.shoppingBoxImage,alt:""}}),s("transition",{attrs:{name:"fade"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.cartLength,expression:"cartLength"}]},[e._v(e._s(e.cartLength))])])],1),e.cartLength?s("div",{staticClass:"info"},[s("p",[e._v("￥"+e._s(e.cartMoney))]),e.boxFee.min_fee?s("div",[e._v("\n          满 "+e._s(e.boxFee.min_fee)+" 元起配送\n        ")]):e._e()]):s("div",{staticClass:"info"},[s("span",[e._v("未选购商品")])])]),s("div",{staticClass:"rightBtn"},[s("cube-button",{attrs:{primary:!0,disabled:!(e.boxFee.min_fee>=0)||e.cartMoney<=e.boxFee.min_fee||e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee-e.cartMoney<0},on:{click:e.submit}},[e._v("申请补货")])],1)]),s("sx-drop-ball",{ref:"drop",attrs:{destination:e.destination}})],1)},[],!1,null,"00351d99",null);C.options.__file="goodsBox.vue",t.default=C.exports}}]);