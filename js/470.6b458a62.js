(self["webpackChunkjdzj"]=self["webpackChunkjdzj"]||[]).push([[470],{1469:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return K}});var n=function(){var t=this,e=t._self._c;return e("div",{style:t.minePageStyle},[e("van-cell",{attrs:{title:"播放记录",icon:"clock-o",size:"large","is-link":""},on:{click:t.toHistoryPage}}),e("div",{staticClass:"horizontal-container"},[e("div",{ref:"scroll",staticClass:"scroll-wrapper"},[e("div",{staticClass:"scroll-content",style:t.scrollContentStyle},t._l(t.vods,(function(i){return e("div",{key:i.vodId,staticClass:"scroll-item",on:{click:function(e){return t.handleToDetail(i.vodId)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.cover,expression:"vod.cover"}],style:t.coverStyle}),e("span",{staticClass:"span-name",style:t.titleStyle},[t._v(t._s(i.vodName))])])})),0)])]),e("van-cell",{attrs:{title:"我的收藏",icon:"like-o",size:"large","is-link":""},on:{click:t.toLikePage}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{title:"我的下载",icon:"down",size:"large","is-link":""}}),e("van-cell",{attrs:{title:"分享好友",icon:"share-o",size:"large","is-link":""},on:{click:t.dakaiwx}}),e("van-cell",{attrs:{title:"打开官网",icon:"info-o",size:"large","is-link":""},on:{click:t.openUrl}})],1)},l=[],o=(i(560),i(9233)),s=i(6568),r=i.n(s),a=i(2787),c=i(6122),u=i(1541),d=(0,a.d)("cell-group"),f=d[0],h=d[1];function v(t,e,i,n){var l,o=t("div",r()([{class:[h({inset:e.inset}),(l={},l[u.r5]=e.border,l)]},(0,c.ED)(n,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",{key:n.data.key},[t("div",{class:h("title",{inset:e.inset})},[i.title?i.title():e.title]),o]):o}v.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}};var g=f(v),p=i(7378),m=i(144),y=i(8546),k=0;function b(t){t?(k||document.body.classList.add("van-toast--unclickable"),k++):(k--,k||document.body.classList.remove("van-toast--unclickable"))}var w=i(1979),C=i(1392),$=i(3432),S=(0,a.d)("toast"),x=S[0],Z=S[1],P=x({mixins:[(0,w.e)()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,b(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,i=this.type,n=this.iconPrefix,l=this.loadingType,o=e||"success"===i||"fail"===i;return o?t(C.Z,{class:Z("icon"),attrs:{classPrefix:n,name:e||i}}):"loading"===i?t($.Z,{class:Z("loading"),attrs:{type:l}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,i=this.message;if((0,y.Xq)(i)&&""!==i)return"html"===e?t("div",{class:Z("text"),domProps:{innerHTML:i}}):t("div",{class:Z("text")},[i])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[Z([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),z=i(4042),T={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},O={},j=[],B=!1,N=(0,p.Z)({},T);function D(t){return(0,y.Kn)(t)?t:{message:t}}function E(t){return document.body.contains(t)}function L(){if(y.sk)return{};if(j=j.filter((function(t){return!t.$el.parentNode||E(t.$el)})),!j.length||B){var t=new(m.ZP.extend(P))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),j.push(t)}return j[j.length-1]}function q(t){return(0,p.Z)({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function H(t){void 0===t&&(t={});var e=L();return e.value&&e.updateZIndex(),t=D(t),t=(0,p.Z)({},N,O[t.type||N.type],t),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),B&&!y.sk&&e.$on("closed",(function(){clearTimeout(e.timer),j=j.filter((function(t){return t!==e})),(0,z.Z)(e.$el),e.$destroy()}))},(0,p.Z)(e,q(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var W=function(t){return function(e){return H((0,p.Z)({type:t},D(e)))}};["loading","success","fail"].forEach((function(t){H[t]=W(t)})),H.clear=function(t){j.length&&(t?(j.forEach((function(t){t.clear()})),j=[]):B?j.shift().clear():j[0].clear())},H.setDefaultOptions=function(t,e){"string"===typeof t?O[t]=e:(0,p.Z)(N,t)},H.resetDefaultOptions=function(t){"string"===typeof t?O[t]=null:(N=(0,p.Z)({},T),O={})},H.allowMultiple=function(t){void 0===t&&(t=!0),B=t},H.install=function(){m.ZP.use(P)},m.ZP.prototype.$toast=H;var A=H,I=(i(5626),i(9099),i(9928),i(5958)),M=i(3286),X={name:"MinePage",components:{[o.Z.name]:o.Z,[g.name]:g,[A.name]:A},mounted(){},activated(){this.queryHistory(),this.initScroll()},beforeDestroy(){this.bs.destroy()},data(){return{vods:[]}},watch:{scrollContentStyle(t){this.$nextTick((()=>{this.bs&&this.bs.refresh()}))}},computed:{minePageStyle(){return{width:this.$utils.screenWidth/50+"rem",height:this.$utils.screenHeight/50+"rem",marginTop:".2rem",position:"relative",background:"#fff",overflow:"hidden"}},scrollContentStyle(){console.log(`${this.vods.length}`);let t=2.34,e=3.11;this.$utils.vodlistWidth>0&&(t=this.$utils.vodlistWidth+.16,e=this.$utils.vodlistHeight),this.vods.length<=0&&(e=0);const i=`${(t*this.vods.length).toFixed(2)}rem`;return console.log(`${i}`),{width:i,height:e+"rem",display:"inline-block"}},coverStyle(){let t=2.34,e=3.11;return this.$utils.vodlistWidth>0&&(t=this.$utils.vodlistWidth,e=this.$utils.vodlistHeight),{width:`${t}rem`,height:`${e}rem`,display:"block",objectFit:"cover"}},titleStyle(){let t=2.34;return this.$utils.vodlistWidth>0&&(t=this.$utils.vodlistWidth),console.log(`${t}`),{width:t+"rem",display:"inline-block",justifyContent:"center",alignItems:"center",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:".26rem",marginTop:".06rem",textAlign:"center"}}},methods:{initScroll(){this.bs=new M.ZP(this.$refs.scroll,{scrollX:!0,scrollY:!1,click:!0})},queryHistory(){this.vods=[],I.Z.vodhistory.toArray().then((t=>{console.log(t),this.vods.push(...t)}))},handleToDetail(t){this.$router.push({path:`/detail/${t}`})},toHistoryPage(){this.$router.push({path:"/history"})},toLikePage(){this.$router.push({path:"/like"})},openUrl(){this.$utils.config.gw&&(window.location.href="jdzj://function?opengw="+this.$utils.config.gw)},dakaiwx(){this.$utils.config.shareText&&(window.location.href="jdzj://function?dakaiwx="+this.$utils.config.shareText,A("复制成功，请打开微信粘贴"))}}},_=X,F=i(1001),U=(0,F.Z)(_,n,l,!1,null,"6890ea5a",null),K=U.exports},8150:function(t,e,i){"use strict";i.r(e)},3987:function(t,e,i){"use strict";i.r(e)},4919:function(t,e,i){"use strict";i.r(e)},9233:function(t,e,i){"use strict";var n=i(7378),l=i(6568),o=i.n(l),s=i(2787),r=i(8546),a=i(6122),c=i(7692),u=i(806),d=i(1392),f=(0,s.d)("cell"),h=f[0],v=f[1];function g(t,e,i,n){var l,s=e.icon,u=e.size,f=e.title,h=e.label,g=e.value,p=e.isLink,m=i.title||(0,r.Xq)(f);function y(){var n=i.label||(0,r.Xq)(h);if(n)return t("div",{class:[v("label"),e.labelClass]},[i.label?i.label():h])}function k(){if(m)return t("div",{class:[v("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[f]),y()])}function b(){var n=i.default||(0,r.Xq)(g);if(n)return t("div",{class:[v("value",{alone:!m}),e.valueClass]},[i.default?i.default():t("span",[g])])}function w(){return i.icon?i.icon():s?t(d.Z,{class:v("left-icon"),attrs:{name:s,classPrefix:e.iconPrefix}}):void 0}function C(){var n=i["right-icon"];if(n)return n();if(p){var l=e.arrowDirection;return t(d.Z,{class:v("right-icon"),attrs:{name:l?"arrow-"+l:"arrow"}})}}function $(t){(0,a.j8)(n,"click",t),(0,c.fz)(n)}var S=null!=(l=e.clickable)?l:p,x={clickable:S,center:e.center,required:e.required,borderless:!e.border};return u&&(x[u]=u),t("div",o()([{class:v(x),attrs:{role:S?"button":null,tabindex:S?0:null},on:{click:$}},(0,a.ED)(n)]),[w(),k(),b(),C(),null==i.extra?void 0:i.extra()])}g.props=(0,n.Z)({},u.T,c.g2),e.Z=h(g)},806:function(t,e,i){"use strict";i.d(e,{T:function(){return n}});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}}},7692:function(t,e,i){"use strict";function n(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function l(t,e){var i=e.to,l=e.url,o=e.replace;if(i&&t){var s=t[o?"replace":"push"](i);s&&s.catch&&s.catch((function(t){if(t&&!n(t))throw t}))}else l&&(o?location.replace(l):location.href=l)}function o(t){l(t.parent&&t.parent.$router,t.props)}i.d(e,{BC:function(){return l},fz:function(){return o},g2:function(){return s}});var s={url:String,replace:Boolean,to:[String,Object]}},9099:function(t,e,i){i(1546),i(8150)},5626:function(t,e,i){i(1546),i(2251),i(4511),i(3987)},9928:function(t,e,i){i(1546),i(825),i(2251),i(4511),i(8507),i(6737),i(4919)}}]);
//# sourceMappingURL=470.6b458a62.js.map