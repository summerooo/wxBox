(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9131ba84"],{"6caa":function(t,s,e){"use strict";var a=e("aa43");e.n(a).a},aa43:function(t,s,e){},aada:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{startData:{},moveData:{},endData:{},thatOffsetTop:null,isEnd:!0,topDistance:33,bottomDistance:33}},methods:{init:function(){this._touch(this.$refs.content),this._mouse(this.$refs.content)},_scroll:function(t){switch(console.log(t.type),t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"click":t.preventDefault(),t.stopPropagation()}},addEvent:function(t,s,e){t.addEventListener(s,e,!1)},removeEvent:function(t,s,e){t.removeEventListener(s,e,!1)},_touch:function(t){for(var s=["touchstart","touchmove","touchend","touchcancel"],e=0;e<s.length;e++){var a=s[e];this.addEvent(t,a,this._scroll)}},_mouse:function(t){for(var s=["mousedown","mousemove","mouseup","mousecancel"],e=0;e<s.length;e++){var a=s[e];this.addEvent(t,a,this._scroll)}},_click:function(t){this.addEvent(t,"click",this._scroll)},_start:function(t){console.log(t),"mousedown"===t.type?(this.$set(this.startData,"y",t.clientY-this.thatOffsetTop),this.$set(this.startData,"t",t.timeStamp)):(this.$set(this.startData,"y",t.changedTouches[0].clientY-this.thatOffsetTop),this.$set(this.startData,"yy",t.changedTouches[0].clientY),this.$set(this.startData,"t",t.timeStamp)),this.isEnd=!1},_move:function(t){if(!(this.topDistance<this.moveData.y-this.startData.y)){"mousemove"===t.type?this.$set(this.moveData,"y",t.clientY):this.$set(this.moveData,"y",t.changedTouches[0].clientY),console.log(this.moveData.y-this.startData.y);var s=this.moveData.y-this.startData.y;this.isEnd||this.setPos(s)}},_end:function(t){"mouseup"===t.type?(this.$set(this.endData,"y",t.clientY),this.$set(this.endData,"t",t.timeStamp)):(this.$set(this.endData,"y",t.changedTouches[0].clientY),this.$set(this.endData,"t",t.timeStamp)),this.isEnd=!0,this.thatOffsetTop=this.endData.y-this.startData.y;var s=this.endData.t-this.startData.t;if(!(s>300)){var e=(this.endData.y-this.startData.yy)/s*15;console.log(e)}},setPos:function(t){this.$refs.content.style.transform="translateY(".concat(t,"px)")}},mounted:function(){this.init()}},n=(e("6caa"),e("2877")),i=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"scroll",staticClass:"all"},[e("div",{ref:"content",staticClass:"content"},[t._t("default",t._l(300,function(s){return e("div",{key:s},[t._v("\n        "+t._s(s)+" = "+t._s(s)+" = "+t._s(s)+"\n      ")])}))],2)])},[],!1,null,"9f6e3be0",null);i.options.__file="scroll.vue",s.default=i.exports}}]);