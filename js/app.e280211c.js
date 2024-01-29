(function(){var e={3508:function(e,t,n){"use strict";var r=n(144),i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{exclude:"Detail"}},[t("router-view")],1)],1)},o=[],a=n(9348),A=n.n(a),u=A(),c=n(1001),s=(0,c.Z)(u,i,o,!1,null,null,null),l=s.exports,d=n(8345);r.ZP.use(d.ZP);const f=[{path:"/",name:"main",component:()=>Promise.all([n.e(199),n.e(935)]).then(n.bind(n,1935)),redirect:"/home",children:[{path:"home",name:"home",component:()=>Promise.all([n.e(199),n.e(614),n.e(281),n.e(100)]).then(n.bind(n,6457))},{path:"mine",name:"mine",component:()=>Promise.all([n.e(199),n.e(614),n.e(782),n.e(627),n.e(470)]).then(n.bind(n,1469))}]},{path:"/detail/:id",name:"detail",component:()=>Promise.all([n.e(199),n.e(782),n.e(627),n.e(94)]).then(n.bind(n,2427))},{path:"/history",name:"history",component:()=>Promise.all([n.e(199),n.e(614),n.e(782),n.e(903),n.e(35)]).then(n.bind(n,2952))},{path:"/like",name:"like",component:()=>Promise.all([n.e(199),n.e(614),n.e(782),n.e(903),n.e(129)]).then(n.bind(n,5882))},{path:"/search",name:"search",component:()=>Promise.all([n.e(199),n.e(614),n.e(782),n.e(281),n.e(595)]).then(n.bind(n,8410))},{path:"/topic/:id/:title",name:"topic",component:()=>Promise.all([n.e(199),n.e(614),n.e(535)]).then(n.bind(n,1932))}],h=new d.ZP({routes:f});var m=h,p=n(629);r.ZP.use(p.ZP);let b=0;try{localStorage.tabIndex&&(b=localStorage.tabIndex)}catch(z){}var v=new p.ZP.Store({state:{tabIndex:b,playUrl:""},getters:{},mutations:{changeTabIndex(e,t){e.tabIndex=t;try{localStorage.tabIndex=t}catch(z){}},changePlayUrl(e,t){e.playUrl=t}},actions:{changeTabIndex(e,t){}},modules:{}}),g=n(5121);const y=g.Z.create({baseURL:"",timeout:2e4});y.interceptors.request.use((e=>e),(e=>Promise.reject(e))),y.interceptors.response.use((e=>e),(e=>{if(e.config&&e.response&&503===e.response.status){const{config:t}=e;if(t.__retryCount=t.__retryCount||0,t.__retryCount<3){t.__retryCount+=1;const e=new Promise((e=>{setTimeout((()=>{e()}),1e3)}));return e.then((()=>y(t)))}}return Promise.reject(e)}));var P=y;n(560);class S{constructor(){this.updateScreenSize(),this.espMap=new Map,this.espIndex=0,this.sourceIndex=0,this.playTitle="",this.app="zcgh",this.config={gw:"",shareText:"",adShow:1,adTime:5},window.addEventListener("resize",this.updateScreenSize.bind(this))}updateScreenSize(){this.screenWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.screenHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.vodCoverWidth=(this.screenWidth/50-.06-.4)/3,this.vodCoverHeight=this.vodCoverWidth/.75,this.vodlistWidth=(this.screenWidth/50-.4-.4)/3,this.vodlistHeight=this.vodlistWidth/.75}getNowDateString(){const e=new Date,t=new Intl.DateTimeFormat("en",{year:"numeric",month:"2-digit",day:"2-digit"}),[{value:n},,{value:r},,{value:i}]=t.formatToParts(e);return`${i}-${n}-${r}`}formatTimeSeconds(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60),i=n.toString().padStart(2,"0"),o=r.toString().padStart(2,"0");if(t>0){let e=t.toString().padStart(2,"0");return`${e}:${i}:${o}`}return`${i}:${o}`}chunkArray(e,t){let n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n}}const k=new S;var w=k,W=n(6940);r.ZP.config.productionTip=!1,r.ZP.prototype.$http=P,r.ZP.prototype.$utils=w,r.ZP.use(W.Z,{error:n(4878)}),r.ZP.directive("dblclick",{inserted:function(e,t){let n=0;e.addEventListener("click",(()=>{n?(clearTimeout(n),n=0,t.value()):n=setTimeout((()=>{n=0}),300)}))}}),new r.ZP({router:m,store:v,render:e=>e(l)}).$mount("#app")},9348:function(){},4878:function(e){"use strict";e.exports="data:image/png;base64,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"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],o=e[s][2];for(var A=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(A=!1,o<a&&(a=o));if(A){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{35:"bf054f69",94:"66bc7444",100:"da89848e",129:"8fb55467",199:"637df8a1",281:"4cfe95e7",470:"6b458a62",535:"d33003d5",595:"3be3146f",614:"b36cdf24",627:"77570c15",782:"a1b65843",903:"1baf6f31",935:"9c4d8564"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{35:"94db06ad",94:"183e74d9",100:"dc3db68f",129:"74baf2b2",199:"d2362c24",470:"058299e0",535:"7f0ebf87",595:"bb2c825b",935:"892776db"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jdzj:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var A,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){A=l;break}}A||(u=!0,A=document.createElement("script"),A.charset="utf-8",A.timeout=120,n.nc&&A.setAttribute("nonce",n.nc),A.setAttribute("data-webpack",t+o),A.src=r),e[r]=[i];var d=function(t,n){A.onerror=A.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],A.parentNode&&A.parentNode.removeChild(A),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=d.bind(null,A.onerror),A.onload=d.bind(null,A.onload),u&&document.head.appendChild(A)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),A=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+A+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=A,o.parentNode&&o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),A=n.p+a;if(t(a,A))return i();e(r,A,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={35:1,94:1,100:1,129:1,199:1,470:1,535:1,595:1,935:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else if(199!=t){var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),A=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;A.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",A.name="ChunkLoadError",A.type=o,A.request=a,i[1](A)}};n.l(a,u,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],A=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in A)n.o(A,i)&&(n.m[i]=A[i]);if(u)var s=u(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkjdzj"]=self["webpackChunkjdzj"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3508)}));r=n.O(r)})();
//# sourceMappingURL=app.e280211c.js.map