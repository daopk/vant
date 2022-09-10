import{c as L,i as W,r as I,Y as M,l as O,F as j,a as V}from"./use-translate.82d1675a.js";import{c as X,n as P,w as Y}from"./with-install.1e1e6f3a.js";import{c as $}from"./interceptor.693bb092.js";import{u as G}from"./use-touch.2a7e3be3.js";import{u as J}from"./use-expose.0b7af251.js";import{z as A,C as _,H as K,D as R,e as l,r as Q,o as Z,a as ee,w as s,B as t,F as te}from"./vue-libs.d483629c.js";import{B as p}from"./index.228fc332.js";import{C as q}from"./index.13f9e298.js";import{C as oe}from"./index.963463da.js";import{c as le}from"./index.f7fe2ea8.js";import{D as ae}from"./function-call.4ca91a16.js";import"./constant.80c6de18.js";import"./use-route.e59fb0a1.js";import"./index.1aafb839.js";import"./index.185a61a8.js";import"./index.8b8a028c.js";import"./index.433e0923.js";import"./mount-component.55786c8c.js";import"./index.d942910e.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.a7d685e6.js";import"./index.b3814e6a.js";import"./use-placeholder.aeeff3ae.js";import"./use-height.65a2922d.js";const[ne,b]=L("swipe-cell"),re={name:X(""),disabled:Boolean,leftWidth:P,rightWidth:P,beforeClose:Function,stopPropagation:Boolean};var se=A({name:ne,props:re,emits:["open","close","click"],setup(a,{emit:o,slots:f}){let i,u,m;const d=_(),w=_(),k=_(),n=K({offset:0,dragging:!1}),g=G(),y=e=>e.value?I(e).width:0,h=R(()=>W(a.leftWidth)?+a.leftWidth:y(w)),C=R(()=>W(a.rightWidth)?+a.rightWidth:y(k)),T=e=>{n.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:a.name,position:e}))},v=e=>{n.offset=0,i&&(i=!1,o("close",{name:a.name,position:e}))},H=e=>{const r=Math.abs(n.offset),c=.15,z=i?1-c:c,S=e==="left"?h.value:C.value;S&&r>S*z?T(e):v(e)},N=e=>{a.disabled||(m=n.offset,g.start(e))},U=e=>{if(a.disabled)return;const{deltaX:r}=g;g.move(e),g.isHorizontal()&&(u=!0,n.dragging=!0,(!i||r.value*m<0)&&O(e,a.stopPropagation),n.offset=j(r.value+m,-C.value,h.value))},B=()=>{n.dragging&&(n.dragging=!1,H(n.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&$(a.beforeClose,{args:[{name:a.name,position:e}],done:()=>v(e)})},D=(e,r)=>c=>{r&&c.stopPropagation(),E(e)},F=(e,r)=>{const c=f[e];if(c)return l("div",{ref:r,class:b(e),onClick:D(e,!0)},[c()])};return J({open:T,close:v}),M(d,()=>E("outside"),{eventName:"touchstart"}),()=>{var r;const e={transform:`translate3d(${n.offset}px, 0, 0)`,transitionDuration:n.dragging?"0s":".6s"};return l("div",{ref:d,class:b(),onClick:D("cell",u),onTouchstart:N,onTouchmove:U,onTouchend:B,onTouchcancel:B},[l("div",{class:b("wrapper"),style:e},[F("left",w),(r=f.default)==null?void 0:r.call(f),F("right",k)])])}}});const x=Y(se);const Re=A({__name:"index",setup(a){const o=V({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),f=le("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(m=>{ae.confirm({title:o("confirm")}).then(()=>{m(!0)})})}};return(u,m)=>{const d=Q("demo-block");return Z(),ee(te,null,[l(d,{title:t(o)("basicUsage")},{default:s(()=>[l(t(x),null,{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:s(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("customContent")},{default:s(()=>[l(t(x),null,{right:s(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(f)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("beforeClose")},{default:s(()=>[l(t(x),{"before-close":i},{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Re as default};