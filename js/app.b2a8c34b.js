(function(){"use strict";var n={5844:function(n,t,e){var r=e(9242),o=e(3396);const a={class:"navbar navbar-inverse"},u=(0,o._)("a",{class:"navbar-brand",href:"#"},"Title",-1),l={class:"nav navbar-nav"},i={class:"active"};function s(n,t,e,r,s,c){const f=(0,o.up)("router-link"),h=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",a,[u,(0,o._)("ul",l,[(0,o._)("li",i,[(0,o.Wm)(f,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(f,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About us")])),_:1})])])]),(0,o.Wm)(h)],64)}e(7658);var c={name:"App",data(){return{isOpenCha:!1,isSuccess:!1,data:[{code:"B12454",name:"Hoàng Anh",email:"anh@gmail.com"}]}},methods:{addAccount(n){this.data.push(n.account),this.isSuccess=n.message,this.isOpenCha=!1}}},f=e(89);const h=(0,f.Z)(c,[["render",s]]);var d=h,v=e(2483),m=e(7139);const p=(0,o._)("h1",null,"Home",-1),b=(0,o._)("hr",null,null,-1),_={class:"table table-hover"},g=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"ID"),(0,o._)("th",null,"Name"),(0,o._)("th")])],-1),w=(0,o._)("td",null,[(0,o._)("a",{href:"",class:"btn btn-sm btn-primary"},"Sửa"),(0,o._)("a",{href:"",class:"btn btn-sm btn-danger"},"Xóa")],-1);function y(n,t,e,r,a,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[p,b,(0,o._)("table",_,[g,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categories,((n,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,m.zw)(n.id),1),(0,o._)("td",null,(0,m.zw)(n.name),1),w])))),128))])])],64)}var O=e(4161),H={name:"HomeComponent",data(){return{categories:[]}},methods:{async getData(){const n=await O.Z.get("http://127.0.0.1:8000/api/category");this.categories=n.data.result}},mounted(){this.getData()}};const k=(0,f.Z)(H,[["render",y]]);var D=k;const C=(0,o._)("h1",null,"About",-1);function W(n,t,e,r,a,u){const l=(0,o.up)("my-header");return(0,o.wg)(),(0,o.iD)(o.HY,null,[C,(0,o.Wm)(l)],64)}var j={name:"AboutComponent"};const A=(0,f.Z)(j,[["render",W]]);var Y=A;const Z=[{path:"",component:D},{path:"/about",component:Y}],x=(0,v.p7)({history:(0,v.PO)(),routes:Z});var I=x;const P=(0,o._)("h1",null,"Header Component",-1);function S(n,t,e,r,a,u){const l=(0,o.up)("H2");return(0,o.wg)(),(0,o.iD)(o.HY,null,[P,(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.WI)(n.$slots,"title")])),_:3}),(0,o._)("p",null,[(0,o.WI)(n.$slots,"content")])],64)}var T={name:"HeaderComponent"};const z=(0,f.Z)(T,[["render",S]]);var U=z,$={install(n){n.component("my-header",U)}},B=(0,r.ri)(d);B.use($),B.use(I),B.mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,a){if(!r){var u=1/0;for(c=0;c<n.length;c++){r=n[c][0],o=n[c][1],a=n[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&a||u>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[i])}))?r.splice(i--,1):(l=!1,a<u&&(u=a));if(l){n.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,u=r[0],l=r[1],i=r[2],s=0;if(u.some((function(t){return 0!==n[t]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(i)var c=i(e)}for(t&&t(r);s<u.length;s++)a=u[s],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(c)},r=self["webpackChunkmyvue"]=self["webpackChunkmyvue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5844)}));r=e.O(r)})();
//# sourceMappingURL=app.b2a8c34b.js.map