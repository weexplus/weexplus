// { "framework": "Vue"} 

!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=19)}({19:function(t,e,i){var o,n,r=[];r.push(i(4)),o=i(5);var c=i(6);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/native/component/head.vue",n.render=c.render,n.staticRenderFns=c.staticRenderFns,n._scopeId="data-v-5e44f36c",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)},4:function(t,e){t.exports={backbg:{width:180,position:"absolute",left:0,justifyContent:"center"},layout:{backgroundColor:"#02993c",height:128,width:750,flexDirection:"row",alignItems:"center",justifyContent:"center"}}},5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""},back:{default:!0},titleColor:{default:"#ffffff"},hideBottomLine:{default:!1},bgcolor:{default:"#1EA5FC"},autoback:{default:!0},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:135},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){if(this.autoback){return void weex.requireModule("navigator").back()}this.$emit("backClick")},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var t=weex.config.env.osVersion;t=t.replace(/\./g,""),t.length<3&&(t+="0"),t<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}}},6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["layout"],style:{"background-color":t.bgcolor,height:t.height+"px"}},[i("div",{staticStyle:{flexDirection:"row",marginTop:"13px"},style:{top:t.titletop}},[i("text",{staticStyle:{flex:"1",textAlign:"center",fontSize:"36"},style:{color:t.titleColor},on:{click:t.titleClick}},[t._v(t._s(t.title))])]),t.back?i("div",{staticClass:["backbg"],style:{height:t.height},on:{click:t.backTo}},[i("image",{staticStyle:{width:"70px",height:"70px",marginTop:"40px",marginLeft:"22px"},attrs:{src:"root:img/back.png"}})]):t._e(),i("div",{staticStyle:{width:"130",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:t.height},on:{click:t.rightclick}},[t._t("right")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});