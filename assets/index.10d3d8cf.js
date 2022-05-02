import{a as $,T as it}from"./index.187ce2d8.js";import{c as U,L as st,b as ct,i as rt,n as at,l as lt,N as ut,K,G as X,y as dt,x as Y,u as ft,e as ht,t as mt,a as pt}from"./use-translate.fbf36f21.js";import{t as xt,n as q,a as gt,w as G}from"./with-install.251697cd.js";import{u as vt}from"./use-touch.9de12470.js";import{u as Q}from"./use-expose.8d47dba2.js";import{z as L,D as b,C as w,N as yt,x as z,e as c,R as Tt,Q as Ct,q as St,H as kt,o as A,c as bt,w as y,B as o,a as D,b as V,d as j,F,h as It,t as At}from"./vue-libs.bf80eadf.js";import{f as _t}from"./constant.80c6de18.js";import{C as T}from"./index.e9ec9dce.js";import"./use-id.139c5032.js";import"./use-route.9fd68ea8.js";import"./index.47538ae0.js";import"./on-popup-reopen.e08ee506.js";import"./interceptor.12fa8767.js";import"./use-refs.1bd4ff6f.js";import"./index.1a890101.js";import"./index.f1bbf430.js";function wt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ct(e)}function Lt(){const e="A".charCodeAt(0);return Array(26).fill("").map((n,l)=>String.fromCharCode(e+l))}const[Z,_]=U("index-bar"),Bt={sticky:xt,zIndex:q,teleport:[String,Object],highlightColor:String,stickyOffsetTop:gt(0),indexList:{type:Array,default:Lt}},J=Symbol(Z);var Ot=L({name:Z,props:Bt,emits:["select","change"],setup(e,{emit:r,slots:n}){const l=b(),d=b(""),p=vt(),u=st(l),{children:x,linkChildren:i}=ct(J);i({props:e});const C=w(()=>{if(rt(e.zIndex))return{zIndex:+e.zIndex+1}}),S=w(()=>{if(e.highlightColor)return{color:e.highlightColor}}),W=(t,s)=>{for(let a=x.length-1;a>=0;a--){const h=a>0?s[a-1].height:0,f=e.sticky?h+e.stickyOffsetTop:0;if(t+f>=s[a].top)return a}return-1},B=()=>{if(ut(l))return;const{sticky:t,indexList:s}=e,a=K(u.value),h=X(u),f=x.map(I=>I.getRect(u.value,h)),g=W(a,f);d.value=s[g],t&&x.forEach((I,v)=>{const{state:m,$el:nt}=I;if(v===g||v===g-1){const k=nt.getBoundingClientRect();m.left=k.left,m.width=k.width}else m.left=null,m.width=null;if(v===g)m.active=!0,m.top=Math.max(e.stickyOffsetTop,f[v].top-a)+h.top;else if(v===g-1){const k=f[g].top-a;m.active=k>0,m.top=k+h.top-f[v].height}else m.active=!1})},O=()=>{St(B)};at("scroll",B,{target:u}),yt(O),z(()=>e.indexList,O),z(d,t=>{t&&r("change",t)});const tt=()=>e.indexList.map(t=>{const s=t===d.value;return c("span",{class:_("index",{active:s}),style:s?S.value:void 0,"data-index":t},[t])}),R=t=>{t=String(t);const s=x.find(a=>String(a.index)===t);s&&(s.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&dt(Y()-e.stickyOffsetTop),r("select",s.index))},E=t=>{const{index:s}=t.dataset;s&&R(s)},et=t=>{E(t.target)};let N;const ot=t=>{if(p.move(t),p.isVertical()){lt(t);const{clientX:s,clientY:a}=t.touches[0],h=document.elementFromPoint(s,a);if(h){const{index:f}=h.dataset;f&&N!==f&&(N=f,E(h))}}},P=()=>c("div",{class:_("sidebar"),style:C.value,onClick:et,onTouchstart:p.start,onTouchmove:ot},[tt()]);return Q({scrollTo:R}),()=>{var s;let t;return c("div",{ref:l,class:_()},[e.teleport?c(Tt,{to:e.teleport},wt(t=P())?t:{default:()=>[t]}):P(),(s=n.default)==null?void 0:s.call(n)])}}});const M=G(Ot),[Rt,Et]=U("index-anchor"),Nt={index:q};var Pt=L({name:Rt,props:Nt,setup(e,{slots:r}){const n=kt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),l=b(),{parent:d}=ft(J);if(!d)return;const p=()=>n.active&&d.props.sticky,u=w(()=>{const{zIndex:i,highlightColor:C}=d.props;if(p())return ht(mt(i),{left:n.left?`${n.left}px`:void 0,width:n.width?`${n.width}px`:void 0,transform:n.top?`translate3d(0, ${n.top}px, 0)`:void 0,color:C})});return Q({state:n,getRect:(i,C)=>{const S=X(l);return n.rect.height=S.height,i===window||i===document.body?n.rect.top=S.top+Y():n.rect.top=S.top+K(i)-C.top,n.rect}}),()=>{const i=p();return c("div",{ref:l,style:{height:i?`${n.rect.height}px`:void 0}},[c("div",{style:u.value,class:[Et({sticky:i}),{[_t]:i}]},[r.default?r.default():e.index])])}}});const H=G(Pt),Jt=L({setup(e){const r=pt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),n=b(0),l=[],d=[1,2,3,4,5,6,8,9,10],p="A".charCodeAt(0);for(let u=0;u<26;u++)l.push(String.fromCharCode(p+u));return(u,x)=>(A(),bt(o(it),{active:n.value,"onUpdate:active":x[0]||(x[0]=i=>n.value=i)},{default:y(()=>[c(o($),{title:o(r)("basicUsage")},{default:y(()=>[c(o(M),null,{default:y(()=>[(A(),D(F,null,V(l,i=>j("div",{key:i},[c(o(H),{index:i},null,8,["index"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o($),{title:o(r)("customIndexList")},{default:y(()=>[c(o(M),{"index-list":d},{default:y(()=>[(A(),D(F,null,V(d,i=>j("div",{key:i},[c(o(H),{index:i},{default:y(()=>[It(At(o(r)("title")+i),1)]),_:2},1032,["index"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{Jt as default};