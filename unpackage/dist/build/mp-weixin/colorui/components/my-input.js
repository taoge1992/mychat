(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/my-input"],{"00f1":function(t,n,e){"use strict";e.r(n);var o=e("e729"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=u.a},"0251":function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"06cd":function(t,n,e){"use strict";var o=e("7e52"),u=e.n(o);u.a},"676a":function(t,n,e){"use strict";e.r(n);var o=e("0251"),u=e("00f1");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("06cd");var r,a=e("f0c5"),c=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},"7e52":function(t,n,e){},e729:function(t,n,e){"use strict";var o;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{showPassword:!0,timer:60,countdownState:!1,countdownTexts:"test"}},props:{icon:{type:[String],default:""},placeholder:{type:[String],default:""},pass:{type:[Boolean],default:!1},type:{type:[String],default:"text"},height:{type:[Number,String],default:80},maxlength:{type:[Number,String],default:20},countdown:{type:[Boolean],default:!1},countdownTime:{type:[Number,String],default:60},countdownText:{type:[String],default:"获取验证码"},countdownEndText:{type:[String],default:"{$time}秒后重试"},formClass:{type:[String],default:"bg-white text-geay shadow-warp"},countdownClass:{type:[String],default:"margin-right-sm"},value:String},model:{prop:"value",event:"input"},mounted:function(){var t=this;this.$on("runCountdown",function(n){t.runCountdown(n)}),clearInterval(o)},created:function(){this.countdownTexts=this.countdownEndText.replace("{$time}",this.countdownTime)},methods:{switchPass:function(){this.showPassword=!this.showPassword},countdownClick:function(){if(this.countdownState)return console.log("已开始"),!1;this.$emit("countdownClick")},runCountdown:function(t){var n=this;return"0"==String(t)?(this.timer=0,clearInterval(o),this.countdownState=!1,!1):!this.countdownState&&(this.countdownState=!0,this.timer=this.countdownTime,void(o=setInterval(function(){n.timer--,n.countdownTexts=n.countdownEndText.replace("{$time}",n.timer),0==n.timer&&(n.countdownState=!1,clearInterval(o))},1e3)))},countdownRun:function(){this.$emit("setCode")},onInput:function(t){this.$emit("input",t.target.value)}}};n.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/my-input-create-component',
    {
        'colorui/components/my-input-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("676a"))
        })
    },
    [['colorui/components/my-input-create-component']]
]);