(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/profile"],{3954:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{base:{avatar:this.$config.avatar,CustomBar:this.CustomBar,title:this.$config.title},switchC:"",user:this.$common.userInfo(),profile:this.$common.userInfo()}},onLoad:function(){},methods:{DateChange:function(e){this.profile.birthday=e.detail.value},genderSwitch:function(e){this.profile.gender=e.detail.value?1:0},uploadAvatar:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){"chooseImage:ok"==e.errMsg&&t.$api.uploadFile(e["tempFilePaths"][0],(function(e){1==e.code?t.profile.avatar=t.$config.cdnUrl+e.data.url:t.$common.errorToShow(e.msg)}),(function(e){t.$common.errorToShow(e.response)}))}})},reProfile:function(){this.profile=this.user},subProfile:function(){var t=this,o=this.profile;JSON.stringify(o)==JSON.stringify(this.user)?this.$common.errorToShow("未做修改无需保存"):this.$api.editProfile(o,(function(n){n.code?(t.$common.errorToShow(n.msg),e.$emit("refreshUser",o),t.$db.set("userInfo",o),setTimeout((function(){e.navigateBack({})}),900)):t.$common.errorToShow(n.msg)}))}}};t.default=o}).call(this,o("543d")["default"])},6187:function(e,t,o){"use strict";o.r(t);var n=o("dd1e"),r=o("e021");for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);var u,a=o("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=s.exports},dd1e:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}))},e021:function(e,t,o){"use strict";o.r(t);var n=o("3954"),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},f868:function(e,t,o){"use strict";(function(e){o("aff0"),o("921b");n(o("66fd"));var t=n(o("6187"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])}},[["f868","common/runtime","common/vendor"]]]);