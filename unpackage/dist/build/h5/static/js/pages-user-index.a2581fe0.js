(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"27c4":function(t,i,e){"use strict";e.r(i);var s=e("3cc6"),a=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=a.a},"3cc6":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{moreData:{show:!1,type:"cosmos",id:0},showTitle:!1,modalName:"",scrollLeft:0,CustomBar:this.CustomBar,loadShow:!0,inputText:"",isLike:0,inputShow:!1,reply_id:0,reply_user_id:0,inputPlaceholder:"写下你评论吧",title:"此刻",InputBottom:0,userInfo:this.$common.userInfo(),review:[],preview:{list:["https://image.aishencn.com/2020/03/17/095817937_81909778-bbs.jpg"],show:!1,index:0},cosmosList:[],user:{id:342,user_id:1430,flag:"",secret:"",place:"其他",views:28,likes:0,reviews:0,shares:0,text:"想劫持一颗星星✨ 在月色朦胧的夜晚降落到你的梦里劫持一颗星星✨ 在月色朦胧的夜晚降落到你的梦里劫持一颗星星✨ 在月色朦胧的夜晚降落到你的梦里.🌃想劫持一颗星星✨ 在月色朦胧的夜晚降落到你的梦里.🌃想劫持一颗星星✨ 在月色朦胧的夜晚降落到你的梦里.🌃",images:"https://image.aishencn.com/2020/03/19/120149179_10784128-bbs.jpg",weigh:0,collect:1,third_id:50027332,createtime:1584590513,updatetime:1584590541,deletetime:null,status:"normal",nickname:"半甜",gender:0,isLike:0,avatar:"https://image.aishencn.com/2020/03/18/164612564_10784128-user.jpg",frame:null,images_arr:["https://image.aishencn.com/2020/03/19/120149179_10784128-bbs.jpg","https://image.aishencn.com/2020/03/19/120149179_10784128-bbs.jpg","https://image.aishencn.com/2020/03/19/120149179_10784128-bbs.jpg"]}}},methods:{isTopTitle:function(t){var i=this,e=uni.createSelectorQuery().in(this);e.select("#user-info").boundingClientRect((function(t){t.top<-150?i.showTitle=!0:i.showTitle=!1})).exec()},hideModal:function(){this.modalName=null},like:function(t){var i=this;this.$api.cosmosLike({pid:this.cosmosList[t].id},(function(e){e.code&&(i.cosmosList[t].isLike=e.data,e.data?i.cosmosList[t].likes++:i.cosmosList[t].likes--)}))},cosmosOpen:function(t){this.$db.set("cosmos",this.cosmosList[t]),uni.navigateTo({url:"/pages/app/cosmos/index"})},openChat:function(){var t=this.user;t.user_id&&(t.id=t.user_id),this.$db.set("chat",this.user),this.$db.set("uid_"+this.user.user_id,this.user),uni.navigateTo({url:"/pages/chat/index"}),this.$common.readNewMessageList(this.user.user_id)},feedback:function(){this.$common.errorToShow("反馈id:"+this.operate.id)},cosmosMoreOperate:function(t){this.operate=this.cosmosList[t],this.modalName="cosmosMore"},previews:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=typeof t;"string"!=e&&"String"!=e||(t=[t]),this.preview.index=i,this.preview.list=t,this.preview.show=!this.preview.show},reply:function(t){this.inputShow=!0,this.reply_id=this.review[t].id,this.reply_user_id=this.review[t].user_id,this.inputPlaceholder="回复"+this.review[t].nickname},openInput:function(){console.log("openInput"),this.inputShow=!0,this.reply_id=0,this.reply_user_id=0,this.inputPlaceholder="写下你评论吧"},InputFocus:function(t){console.log(""),this.InputBottom=t.detail.height},InputBlur:function(t){var i=this;setTimeout((function(){i.inputShow=!1}),100),this.InputBottom=0},sendMsg:function(){var t=this;this.$api.addReview({pid:this.cosmos.id,reply_id:this.reply_id,reply_user_id:this.reply_user_id,text:this.inputText},(function(i){i.code?(t.review=i.data,t.cosmos.reviews++,t.inputText=""):t.$common.errorToShow(i.msg)}))},timeToDate:function(t){t<9999999999&&(t*=1e3);var i=new Date(t);return i.getYear()+1900+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"}},onLoad:function(t){var i=this;this.loadShow=!0;var e=this.$db.get("user");console.log("onLoad,user",e),this.user=e,this.title=e.nickname+"的主页",this.$api.getCosmosUserList({user:this.user.user_id},(function(t){t.code&&(i.cosmosList=t.data)}),(function(){i.loadShow=!1}))}};i.default=s},"58d6":function(t,i,e){var s=e("7fe3");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("7ad298bf",s,!0,{sourceMap:!1,shadowMode:!1})},"5af6":function(t,i,e){"use strict";var s=e("58d6"),a=e.n(s);a.a},"7e03":function(t,i,e){"use strict";var s,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"moyi-bg-img"},[e("cu-custom",{staticClass:"moyi-te-a",attrs:{bgColor:t.showTitle?"moyi-bg-b":"",isAbs:!0,isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t.showTitle?e("v-uni-view",[e("v-uni-view",{staticClass:"cu-avatar round sm ",style:"background-image:url("+t.user.avatar+");"},[e("v-uni-image",{attrs:{src:t.user.frame,mode:"widthFix"}})],1),e("v-uni-text",{staticClass:"margin-left-ss"},[t._v(t._s(t.user.nickname))])],1):t._e()],1)],2),e("moreModal",{attrs:{show:t.moreData.show,type:t.moreData.type,pid:t.moreData.id}}),e("previewModal",{attrs:{list:t.preview.list,show:t.preview.show,index:t.preview.index}}),e("v-uni-view",{staticClass:"moyi-fix-b  moyi-bg-c text-center"},[e("v-uni-view",{staticClass:" text-center padding-sm margin-xs",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openChat()}}},[e("v-uni-text",{staticClass:"cuIcon-mark margin-right-sm"}),t._v("私聊")],1)],1),e("v-uni-view",{attrs:{id:"top-title"}}),e("v-uni-scroll-view",{staticClass:"cosmos-scroll-view moyi-bg-b",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft},on:{touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.isTopTitle.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.isTopTitle.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.isTopTitle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"moyi-bg-b padding-bottom text-center moyi-te-a",style:"padding-top:"+(t.CustomBar+20)+"px",attrs:{id:"user-info"}},[e("v-uni-view",{staticClass:"cu-avatar round xxl",style:"background-image:url("+t.user.avatar+");",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.previews(t.user.avatar)}}},[e("v-uni-image",{attrs:{src:t.user.frame,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"margin-top"},[e("v-uni-text",{staticClass:"text-xl"},[t._v(t._s(t.user.nickname))]),e("v-uni-text",{class:["text-bold","margin-tb-auto","margin-left-ss",0==t.user.gender?"text-pink  cuIcon-female":"text-blue  cuIcon-male"]})],1),e("v-uni-view",{staticClass:"text-sm"},[t._v(t._s(t.user.bio))])],1),e("v-uni-view",{staticClass:"cu-list menu-avatar moyi-bg-a",staticStyle:{"min-height":"100vh","padding-bottom":"120rpx"}},[t.loadShow?e("v-uni-view",[e("v-uni-view",{staticClass:"cu-load loading"})],1):e("v-uni-view",[t._l(t.cosmosList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"cosmos-chat text-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cosmosOpen(s)}}},[e("v-uni-view",{staticClass:"cu-item cosmos-text margin-bottom-sm margin-top"},[t._v(t._s(i.text))]),e("v-uni-view",{staticClass:"padding-lr-xls",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[i.images?e("v-uni-view",{class:["grid","margin-auto",1==i.images_arr.length?"":"col-3 grid-square"]},t._l(i.images_arr,(function(s,a){return e("v-uni-view",{key:a,staticClass:"margin-tb-sm cosmos-image-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previews(i.images_arr,a)}}},[e("v-uni-image",{staticClass:"cosmos-image-item-image",attrs:{"lazy-load":!0,src:s,mode:"aspectFill"}})],1)})),1):t._e()],1),e("v-uni-view",{staticClass:"cu-item padding-lr-xls grid col-2 margin-bottom-sm"},[e("v-uni-view",{staticClass:"text-grey "},[t._v(t._s(t.$common.timeToDate(i.createtime)))]),e("v-uni-view",{staticClass:"text-right"},[e("v-uni-text",{staticClass:"cuIcon-location text-xl "}),e("v-uni-text",[t._v(t._s(i.place))])],1)],1),e("v-uni-view",{staticClass:"padding-lr-xls grid col-4 text-center"},[e("v-uni-view",[e("v-uni-text",{staticClass:"cuIcon-attention text-xl"}),e("v-uni-text",{staticClass:"margin-left-ss"},[t._v(t._s(i.views>0?i.views:""))])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"cuIcon-comment text-xl"}),e("v-uni-text",{staticClass:"margin-left-ss"},[t._v(t._s(i.reviews>0?i.reviews:""))])],1),e("v-uni-view",{on:{click:[function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)},function(i){arguments[0]=i=t.$handleEvent(i),t.like(s)}]}},[e("v-uni-text",{class:i.isLike?"cuIcon-likefill text-red":"cuIcon-like"}),e("v-uni-text",{staticClass:"margin-left-ss"},[t._v(t._s(i.likes>0?i.likes:""))])],1),e("v-uni-view",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("v-uni-text",{staticClass:"cuIcon-more text-xl",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cosmosMoreOperate(s)}}})],1)],1),e("v-uni-view",{staticClass:"cosmos-border"})],1)})),0==t.cosmosList.length?e("v-uni-view",{staticClass:"text-center margin-top-sm"},[t._v("暂无动态")]):t._e()],2)],1)],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return s}))},"7fe3":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,".cosmos-image-item-image[data-v-563fa362]{width:%?600?%}.border-rigth[data-v-563fa362]{border-right:%?1?% #303030 solid}.info-card[data-v-563fa362]{height:80vh}.bottom-card[data-v-563fa362]{width:%?750?%;height:auto!important;bottom:0;position:absolute;z-index:1}.bottom-card .cu-item[data-v-563fa362]{border-top:%?1?% #303030 solid;margin-bottom:0;border-radius:0;height:%?100?%}.top-card[data-v-563fa362]{height:auto!important;top:%?-90?%;left:%?20?%;position:absolute;z-index:1}.cu-card[data-v-563fa362]{height:100vh;-webkit-transform:scale(1)!important;transform:scale(1)!important}.none[data-v-563fa362]{display:none}.comment[data-v-563fa362]{margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.comment .cu-avatar[data-v-563fa362]{width:10%;margin:0 %?20?%}.comment .content[data-v-563fa362]{width:90%}.input[data-v-563fa362]{background-color:#222}.my-screen-swiper[data-v-563fa362]{bottom:0;width:100%;height:%?100?%;position:fixed;left:0;white-space:nowrap;box-sizing:border-box;overflow:hidden;line-height:%?100?%;z-index:999}",""]),t.exports=i},c383:function(t,i,e){"use strict";e.r(i);var s=e("7e03"),a=e("27c4");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("5af6");var n,r=e("f0c5"),c=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"563fa362",null,!1,s["a"],n);i["default"]=c.exports}}]);