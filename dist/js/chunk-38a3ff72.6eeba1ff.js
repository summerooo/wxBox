(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-38a3ff72"],{"63d9":function(t,e,n){},8085:function(t,e,n){t.exports=n.p+"img/paySuccess.8f69e208.png"},c649:function(t,e,n){"use strict";var r=n("63d9");n.n(r).a},cf69:function(t,e,n){"use strict";n.r(e);var r=(n("f751"),n("a481"),n("be94")),c=(n("cadf"),n("551c"),n("097d"),n("2f62")),o={data:function(){return{}},computed:Object(r.a)({},Object(c.c)(["user"])),methods:{gogo:function(t){this.$router.replace({name:t,query:this.row})}},created:function(){"row"in this.$route.query?this.row=JSON.parse(this.$route.query.row):this.row=Object.assign({},this.user,this.$route.query)}},s=(n("c649"),n("2877")),u=Object(s.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"all"},[r("img",{attrs:{src:n("8085"),alt:""}}),r("p",[t._v("恭喜你兑换成功")]),t._v("\n  兑换订单提交至后台处理 我们将很快通知您\n  "),r("br"),r("br"),r("cube-button",{attrs:{primary:""},on:{click:function(e){t.gogo("points")}}},[t._v("返回首页")]),r("br"),r("cube-button",{attrs:{primary:"",outline:""},on:{click:function(e){t.gogo("record")}}},[t._v("查看兑换记录")])],1)},[],!1,null,"3652f1d6",null);u.options.__file="exchangeSuccess.vue",e.default=u.exports}}]);