(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-11aaf523"],{"0d20":function(e,t,r){"use strict";var n=r("f7a9");r.n(n).a},8474:function(e,t,r){e.exports=r.p+"img/none.8fdfdabf.png"},"8fa7":function(e,t,r){e.exports=r.p+"img/full.5bc90e77.png"},ae2c:function(e,t,r){"use strict";r.r(t);var n=(r("a481"),r("ac4d"),r("8a81"),r("f751"),r("c5f6"),r("4917"),r("96cf"),r("1da1")),s=(r("ac6a"),r("456d"),r("be94")),a=(r("cadf"),r("551c"),r("097d"),r("2740")),o=r("17ab"),i=r("4875"),c=r("7766"),u=r("e57e"),h=r("7457"),l=r("365c"),p=r("0f06").api,d=function(e){return l.a.post("".concat(p,"/orderReplenishment"),e)},f=function(e){return l.a.post("".concat(p,"/orderReplenishmentGoods"),e)},g=function(e){return l.a.post("".concat(p,"/getBoxHandlingFee"),e)},m=function(e){return l.a.post("".concat(p,"/boxReceive"),e)},b=function(e){return l.a.post("".concat(p,"/replenishment"),e)},x=function(e){return l.a.post("".concat(p,"/orderSearchGoodsLog"),e)},v=function(e){return l.a.post("".concat(p,"/orderSearchGoodsHot"),e)},_=function(e){return l.a.post("".concat(p,"/orderSearchLogDelete"),e)},w=function(e){return l.a.post("".concat(p,"/orderSearchGoods"),e)},k=r("2f62"),y={components:{sxDropBall:a.a,sxMenu:o.a,sxInputNumber:i.a,sxPopup:c.a,sxSearchPanel:u.a,sxSearchList:h.a},data:function(){return{data:[],menusData:[],defaultActive:"",defaultActiveItem:{},goodsData:[],options:{pullUpLoad:!0},current:"",scrollY:0,cart:{},chooseCommodity:{},searching:0,searchData:"",timer:"",shoppingBoxImage:"",shoppingBoxImageStatus:{none:r("8474"),open:r("b93d"),full:r("8fa7")},page:1,boxFee:{box_fee:"",handling_fee:"",min_fee:"",max_fee:""},panelData:null,listData:null,searchFalse:!1,barbar:!1}},computed:Object(s.a)({},Object(k.c)(["user","beforeInfo"]),{destination:function(){return{top:window.innerHeight-40,left:45}},cartLength:function(){return Object.keys(this.cart).length},cartMoney:function(){var e=0;for(var t in this.cart)e+=this.cart[t].goods_price*this.cart[t].goods_number;return e.toFixed(2)}}),watch:{searchData:function(){var e=this;this.searchFalse||(clearTimeout(this.timer),this.timer=setTimeout(function(){e.changeSearch()},200))},$route:function(){this.routerInit()}},created:function(){this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.getBeforeInfo(),this.routerInit(!1),this.firstShow()},methods:Object(s.a)({},Object(k.b)(["getBeforeInfo","closeWindow"]),{routerInit:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!(n.length>0&&void 0!==n[0])||n[0],(r=this.$route.name.match(/\d+/g)?this.$route.name.match(/\d+/g):[]).length||(r[0]=0),this.searching=Number(r[0]),4===this.searching&&this.showSearchData(),0===this.searching&&t&&this.back();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),goodsShow:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(Object.assign({},this.user,this.beforeInfo,{cate_id:this.defaultActive,page:this.page,order_origin:4}));case 2:for(t=e.sent,this.goodsData=t.data.return_data,r=!0,n=!1,s=void 0,e.prev=7,a=this.goodsData[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)i=o.value,this.$set(this.chooseCommodity,i.goods_id,Object.assign({},i,{goods_number:0},this.chooseCommodity[i.goods_id]));e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),n=!0,s=e.t0;case 15:e.prev=15,e.prev=16,r||null==a.return||a.return();case 18:if(e.prev=18,!n){e.next=21;break}throw s;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.abrupt("return",t.data.return_data);case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(){return e.apply(this,arguments)}}(),searchShow:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,s,a,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.searchingSubmit(!1,t);case 2:for(r=e.sent,this.goodsData=r,n=!0,s=!1,a=void 0,e.prev=7,o=this.goodsData[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)c=i.value,this.$set(this.chooseCommodity,c.goods_id,Object.assign({},c,{goods_number:0},this.chooseCommodity[c.goods_id]));e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),s=!0,a=e.t0;case 15:e.prev=15,e.prev=16,n||null==o.return||o.return();case 18:if(e.prev=18,!s){e.next=21;break}throw a;case 21:return e.finish(18);case 22:return e.finish(15);case 23:r.length?this.$router.push({name:"goodsBox3"}):this.$router.push({name:"goodsBox1"});case 24:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(t){return e.apply(this,arguments)}}(),firstShow:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Object.assign({},this.user,this.beforeInfo,{order_origin:4}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:for(n in r=t.data.return_data)this.$set(this.menusData,n,Object.assign({},r[n],{label:r[n].cate_name,value:r[n].cate_id}));if(this.menusData.unshift({label:"全     部",value:0,cate_id:0,cate_name:"全     部"}),this.menusData.length){e.next=10;break}return e.abrupt("return");case 10:return this.defaultActive=this.menusData[0].value,this.goodsShow(),e.next=14,g(Object.assign({},this.user,this.beforeInfo));case 14:if(e.t0=e.sent,s=e.t0)for(a in s.data.return_data)this.$set(this.boxFee,a,Number(s.data.return_data[a]));this.barbar=!0;case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showGoods:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(Object.assign({},this.user,this.beforeInfo,{order_origin:4,cate_id:this.defaultActive,page:this.page}));case 2:if((t=e.sent).data.return_data.length){e.next=5;break}return e.abrupt("return",this.$createToast({txt:"该分类无更多商品",type:"txt"}).show());case 5:return e.next=7,this.goodsData.concat(t.data.return_data);case 7:for(this.goodsData=e.sent,r=!0,n=!1,s=void 0,e.prev=11,a=this.goodsData[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)i=o.value,this.$set(this.chooseCommodity,i.goods_id,Object.assign({},i,{goods_number:0},this.chooseCommodity[i.goods_id]));e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),n=!0,s=e.t0;case 19:e.prev=19,e.prev=20,r||null==a.return||a.return();case 22:if(e.prev=22,!n){e.next=25;break}throw s;case 25:return e.finish(22);case 26:return e.finish(19);case 27:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26]])}));return function(){return e.apply(this,arguments)}}(),scrollHandler:function(e){var t=e.y;this.scrollY=-t},handleSelect:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this.$createToast({time:0})).show(),this.page=1,this.defaultActive=t.value,e.next=7,this.goodsShow();case 7:n.hide(),this.defaultActiveItem=t,this.$refs.scroll.scrollTo(0,0),this.$refs.scroll.refresh();case 11:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),changeHandler:function(e){},stickyChangeHandler:function(e){},onPullingDown:function(){var e=this;setTimeout(function(){e.$refs.scroll.forceUpdate()},1e3)},onPullingUp:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(3===this.searching){e.next=4;break}return this.page++,e.next=4,this.showGoods();case 4:this.$refs.scroll.forceUpdate(),this.$refs.scroll.refresh();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),parabola:function(e){this.$refs.drop.drop(e)},openTheshoppingBox:function(){var e=this;if(!Object.keys(this.cart).length)return!1;this.$nextTick(function(){e.$refs.popup.isVisible?e.$refs.popup.closePopup():e.$refs.popup.openPopup()})},closePopup:function(){var e=this;this.$nextTick(function(){e.$refs.popup.closePopup()})},isMax:function(){this.$createToast({txt:"库存不足",type:"txt"}).show()},clickAction:function(e,t){this.$set(this.cart,t.goods_id,this.chooseCommodity[t.goods_id]),this.cart[t.goods_id].goods_number||this.$delete(this.cart,t.goods_id),Object.keys(this.cart).length?this.shoppingBoxImage=this.shoppingBoxImageStatus.open:(this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup()),this.boxFee.max_fee&&this.boxFee.max_fee-this.boxFee.box_fee-this.boxFee.handling_fee-this.cartMoney<=0&&(this.shoppingBoxImage=this.shoppingBoxImageStatus.full,this.$createToast({txt:"盒子满了",type:"txt"}).show())},clearCart:function(){for(var e in this.cart)this.$delete(this.cart,e);for(var t in this.chooseCommodity)this.$set(this.chooseCommodity[t],"goods_number",0);this.shoppingBoxImage=this.shoppingBoxImageStatus.none,this.$refs.popup.closePopup()},focusSearch:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(4!==this.searching){e.next=2;break}return e.abrupt("return");case 2:if(!this.searchData){e.next=4;break}return e.abrupt("return");case 4:if(!this.panelData){e.next=6;break}return e.abrupt("return",this.$router.push({name:"goodsBox4"}));case 6:this.$router.push({name:"goodsBox4"});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showSearchData:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s,a,o,i,c,u,h,l,p,d,f,g,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.panelData=[],e.next=3,x(this.user);case 3:for(e.t0=e.sent,t=e.t0,r=t.data.return_data,this.$set(this.panelData,0,{label:"历史搜索",icon:"box-lajitong"}),this.$set(this.panelData[0],"children",[]),n=!0,s=!1,a=void 0,e.prev=11,o=r[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)c=i.value,this.panelData[0].children.push({label:c.goods_name,value:c.goods_name});e.next=19;break;case 15:e.prev=15,e.t1=e.catch(11),s=!0,a=e.t1;case 19:e.prev=19,e.prev=20,n||null==o.return||o.return();case 22:if(e.prev=22,!s){e.next=25;break}throw a;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,v(this.user);case 29:if(e.t2=e.sent,u=e.t2,!(h=u.data.return_data).length){e.next=54;break}for(this.$set(this.panelData,1,{label:"热门搜索"}),this.$set(this.panelData[1],"children",[]),l=!0,p=!1,d=void 0,e.prev=38,f=h[Symbol.iterator]();!(l=(g=f.next()).done);l=!0)m=g.value,this.panelData[1].children.push({label:m.goods_name,value:m.goods_name});e.next=46;break;case 42:e.prev=42,e.t3=e.catch(38),p=!0,d=e.t3;case 46:e.prev=46,e.prev=47,l||null==f.return||f.return();case 49:if(e.prev=49,!p){e.next=52;break}throw d;case 52:return e.finish(49);case 53:return e.finish(46);case 54:case"end":return e.stop()}},e,this,[[11,15,19,27],[20,,22,26],[38,42,46,54],[47,,49,53]])}));return function(){return e.apply(this,arguments)}}(),changeSearch:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.searchData.length){e.next=2;break}return e.abrupt("return",this.$router.replace({name:"goodsBox4"}));case 2:return e.next=4,this.searchingSubmit(!1);case 4:if((t=e.sent).length){e.next=7;break}return e.abrupt("return",this.$router.replace({name:"goodsBox1"}));case 7:for(r in this.listData=[],t)this.$set(this.listData,r,{label:t[r].goods_name});this.$router.replace({name:"goodsBox5"});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),blurSearch:function(){switch(this.searching){case 1:case 2:case 4:case 5:if(this.searchFalse)return;this.$refs.searchInput.$refs.input.focus()}},searchingSubmit:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(s.length>0&&void 0!==s[0])||s[0],r=s.length>1?s[1]:void 0,!t){e.next=4;break}return e.abrupt("return",this.searchShow(this.searchData));case 4:return e.next=6,w(Object.assign({},this.user,this.beforeInfo,{order_origin:4,goods_name:r||this.searchData}));case 6:return n=e.sent,e.abrupt("return",n.data.return_data);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),back:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData="",e.next=4,this.$refs.searchInput.$refs.input.blur();case 4:return e.next=6,this.goodsShow();case 6:return e.next=8,this.$router.replace({name:"goodsBox"});case 8:setTimeout(function(){t.searchFalse=!1},300),this.$refs.scroll.refresh();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r in t=[],this.cart)t.push({goods_code:this.cart[r].goods_code,goods_number:this.cart[r].goods_number});if(!this.user.box_no){e.next=8;break}return e.next=5,b(Object.assign({},this.user,{goods_info:t,order_origin:4}));case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,m(Object.assign({},this.user,this.beforeInfo,{goods_info:t,order_origin:4}));case 10:n=e.sent;case 11:s=this,200===n.data.return_code?this.$createDialog({type:"alert",content:n.data.return_msg,onConfirm:function(){s.closeWindow()}}).show():this.$createToast({txt:n.data.return_msg,type:"txt"}).show();case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),panelIcon:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("历史搜索"!==t.row.label){e.next=6;break}return e.next=3,_(this.user);case 3:r=e.sent,this.$createToast({txt:r.data.return_msg,type:"txt"}).show(),this.showSearchData();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPanelCell:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.cell.label,e.next=4,this.searchShow(t.cell.data);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getListRow:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchFalse=!0,this.searchData=t.row.label,e.next=4,this.searchShow(t.row.label);case 4:this.searchFalse=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),mounted:function(){document.title="认领补货"}},C=(r("0d20"),r("2877")),D=Object(C.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all"},[n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[e.boxFee.max_fee?n("div",{ref:"notice",staticClass:"notice"},[n("i",{staticClass:"box-laba"}),e._v("\n        您的盒子目前有"+e._s(e.cartMoney)+"元商品，还可添加"+e._s(e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee-e.cartMoney)+"元商品\n      ")]):e._e(),n("div",{ref:"searchNav",staticClass:"searchNav"},[n("transition",{attrs:{name:"back"}},[[0].includes(e.searching)?e._e():n("i",{staticClass:"cubeic-back backIcon",on:{click:e.back}})]),n("cube-input",{ref:"searchInput",attrs:{type:"search",placeholder:"请输入商品名称"},on:{focus:e.focusSearch,blur:e.blurSearch},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchingSubmit(t):null}},model:{value:e.searchData,callback:function(t){e.searchData=t},expression:"searchData"}},[n("i",{staticClass:"cubeic-search",attrs:{slot:"prepend"},slot:"prepend"})])],1),n("div",{ref:"searchContent",staticClass:"searchContent"},[n("div",{directives:[{name:"show",rawName:"v-show",value:[0].includes(e.searching),expression:"[0].includes(searching)"}],ref:"searchContentLeft",staticClass:"left"},[n("sx-menu",{attrs:{menusData:e.menusData,defaultActive:e.defaultActive},on:{select:e.handleSelect}})],1),n("cube-scroll",{directives:[{name:"show",rawName:"v-show",value:[0,3].includes(e.searching),expression:"[0, 3].includes(searching)"}],ref:"scroll",staticClass:"right",attrs:{options:e.options,"scroll-events":["scroll"]},on:{"pulling-up":e.onPullingUp,scroll:e.scrollHandler}},[e.goodsData.length?n("ul",{staticClass:"rightDetails"},e._l(e.goodsData,function(t,r){return n("li",{key:r},[n("div",{staticClass:"goodsRow"},[n("img",{attrs:{src:t.goods_img}}),n("div",{staticClass:"goodsContent"},[n("div",{staticClass:"goodsContentTop"},[e._v("\n                    "+e._s(t.goods_name)+"\n                    "),n("div",{staticClass:"abstract"},[n("span",[e._v(e._s(t.goods_spec))]),e._v(" \n                      "),n("span",[e._v(e._s(t.stock_num>0?"库存"+t.stock_num+t.goods_unit:"已售空"))])])]),n("div",{staticClass:"goodsContentBottom"},[n("font",[n("span",[e._v("￥"+e._s(t.goods_price))]),e._v("/"+e._s(t.goods_unit))]),t.stock_num>0?n("sx-input-number",{attrs:{max:t.stock_num,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:e.chooseCommodity[t.goods_id].goods_number,callback:function(r){e.$set(e.chooseCommodity[t.goods_id],"goods_number",r)},expression:"chooseCommodity[food.goods_id].goods_number"}}):e._e()],1)])])])}),0):n("div",{staticClass:"noGoodsData"},[n("img",{attrs:{src:r("1a10"),alt:""}}),e._v("\n            暂无商品\n            ")])]),n("div"),[1].includes(e.searching)?n("div",{staticClass:"noSearch"},[n("img",{attrs:{src:r("74c1"),alt:""}}),e._v("\n          没有搜索结果\n          ")]):e._e(),[4].includes(e.searching)?n("sx-search-panel",{attrs:{panelData:e.panelData},on:{panelIcon:e.panelIcon,getPanelCell:e.getPanelCell}}):e._e(),[5].includes(e.searching)?n("sx-search-list",{attrs:{listData:e.listData},on:{getListRow:e.getListRow}}):e._e()],1)]),n("sx-popup",{ref:"popup",attrs:{bar:Boolean(Number(e.boxFee.max_fee))}},[n("div",{attrs:{slot:"bar"},slot:"bar"},[e._v("\n        还可添加"+e._s(e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee-e.cartMoney)+"元，盒子就满了\n      ")]),n("div",{staticClass:"popupLeft",attrs:{slot:"left"},slot:"left"},[e._v("\n        已选商品 "),n("span",[e._v("(共"+e._s(e.cartLength)+"件商品)")])]),n("div",{staticClass:"popupRight",attrs:{slot:"right"},on:{click:e.clearCart},slot:"right"},[n("i",{staticClass:"box-lajitong"}),e._v("清空\n      ")]),n("transition-group",{attrs:{name:"list"}},e._l(e.cart,function(t,r){return n("div",{key:t.goods_id,staticClass:"popupContent list-item",attrs:{"data-index":r}},[n("div",{staticClass:"popupContentDetails"},[n("span",[e._v(e._s(t.goods_name)+" "+e._s(t.goods_spec)+"/"+e._s(t.goods_unit))]),n("span",[e._v("￥"+e._s(t.goods_price))])]),n("sx-input-number",{attrs:{max:t.stock,item:t},on:{isMax:e.isMax,clickAction:e.clickAction},model:{value:t.goods_number,callback:function(r){e.$set(t,"goods_number",r)},expression:"row.goods_number"}})],1)}),0)],1)],1),n("div",{ref:"bottom",staticClass:"bottom"},[n("div",{staticClass:"box",on:{click:e.closePopup}},[n("div",{staticClass:"shoppingBox",on:{click:function(t){return t.stopPropagation(),e.openTheshoppingBox(t)}}},[n("img",{attrs:{src:e.shoppingBoxImage,alt:""}}),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.cartLength,expression:"cartLength"}]},[e._v(e._s(e.cartLength))])])],1),e.cartLength?n("div",{staticClass:"info"},[n("p",[e._v("￥"+e._s(e.cartMoney))]),e.boxFee.min_fee?n("div",[e._v("\n          满 "+e._s(e.boxFee.min_fee)+" 元起配送\n        ")]):e._e()]):n("div",{staticClass:"info"},[n("span",[e._v("未选购商品")])])]),n("div",{staticClass:"rightBtn"},[n("cube-button",{attrs:{primary:!0,disabled:!e.cartMoney||!(e.boxFee.min_fee>=0)||e.cartMoney<=e.boxFee.min_fee&&e.boxFee.max_fee-e.boxFee.box_fee-e.boxFee.handling_fee<=e.cartMoney},on:{click:e.submit}},[e._v("申请补货")])],1)]),n("sx-drop-ball",{ref:"drop",attrs:{destination:e.destination}})],1)},[],!1,null,"3a3ec900",null);D.options.__file="goodsBox.vue",t.default=D.exports},b93d:function(e,t,r){e.exports=r.p+"img/open.4b61ee4b.png"},f7a9:function(e,t,r){}}]);