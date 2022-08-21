import{o as _,m as j,l as F,e as H,c as M,i as V,n as G}from"./use-translate.c56bc05e.js";import{n as b,t as I,u as N,m as w,w as Y}from"./with-install.2d06a5b3.js";import{M as L,J as U,y as g,A as $,x as S,D as q,q as J,N as Z,L as Q,I as W,e as f,T as X,R as ee,F as oe,j as ne,v as te,B as ae}from"./vue-libs.a3cd7f61.js";import{H as se}from"./constant.80c6de18.js";import{c as ce}from"./interceptor.7caa5e9a.js";import{u as re}from"./use-expose.2dad0d8e.js";import{u as le}from"./use-touch.196fce0c.js";import{u as ie}from"./use-lazy-render.4c81c593.js";import{P as ue}from"./on-popup-reopen.a53db14c.js";import{u as de,I as fe}from"./index.bb072daf.js";import{O as ve}from"./index.a0b9e7c8.js";const T={show:Boolean,zIndex:b,overlay:I,duration:b,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:N,transitionAppear:Boolean,closeOnClickOverlay:I},ge=Object.keys(T);let y=0;const A="van-overflow-hidden";function me(e,n){const s=le(),c=i=>{s.move(i);const P=s.deltaY.value>0?"10":"01",p=j(i.target,e.value),{scrollHeight:u,offsetHeight:h,scrollTop:m}=p;let d="11";m===0?d=h>=u?"00":"01":m+h>=u&&(d="10"),d!=="11"&&s.isVertical()&&!(parseInt(d,2)&parseInt(P,2))&&F(i,!0)},t=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",c,{passive:!1}),y||document.body.classList.add(A),y++},r=()=>{y&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",c),y--,y||document.body.classList.remove(A))},v=()=>n()&&t(),l=()=>n()&&r();_(v),L(l),U(l),g(n,i=>{i?t():r()})}const ye=H({},T,{round:Boolean,position:w("center"),closeIcon:w("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:w("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[pe,B]=M("popup"),he=$({name:pe,inheritAttrs:!1,props:ye,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:s,slots:c}){let t,r;const v=S(),l=S(),i=ie(()=>e.show||!e.lazyRender),P=q(()=>{const o={zIndex:v.value};if(V(e.duration)){const a=e.position==="center"?"animationDuration":"transitionDuration";o[a]=`${e.duration}s`}return o}),p=()=>{t||(t=!0,v.value=e.zIndex!==void 0?+e.zIndex:de(),n("open"))},u=()=>{t&&ce(e.beforeClose,{done(){t=!1,n("close"),n("update:show",!1)}})},h=o=>{n("clickOverlay",o),e.closeOnClickOverlay&&u()},m=()=>{if(e.overlay)return f(ve,{show:e.show,class:e.overlayClass,zIndex:v.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:h},{default:c["overlay-content"]})},d=o=>{n("clickCloseIcon",o),u()},E=()=>{if(e.closeable)return f(fe,{role:"button",tabindex:0,name:e.closeIcon,class:[B("close-icon",e.closeIconPosition),se],classPrefix:e.iconPrefix,onClick:d},null)},z=()=>n("opened"),D=()=>n("closed"),R=o=>n("keydown",o),K=i(()=>{var x;const{round:o,position:a,safeAreaInsetTop:O,safeAreaInsetBottom:k}=e;return ne(f("div",ae({ref:l,style:P.value,role:"dialog",tabindex:0,class:[B({round:o,[a]:a}),{"van-safe-area-top":O,"van-safe-area-bottom":k}],onKeydown:R},s),[(x=c.default)==null?void 0:x.call(c),E()]),[[te,e.show]])}),C=()=>{const{position:o,transition:a,transitionAppear:O}=e,k=o==="center"?"van-fade":`van-popup-slide-${o}`;return f(X,{name:a||k,appear:O,onAfterEnter:z,onAfterLeave:D},{default:K})};return g(()=>e.show,o=>{o&&!t&&(p(),s.tabindex===0&&J(()=>{var a;(a=l.value)==null||a.focus()})),!o&&t&&(t=!1,n("close"))}),re({popupRef:l}),me(l,()=>e.show&&e.lockScroll),G("popstate",()=>{e.closeOnPopstate&&(u(),r=!1)}),Z(()=>{e.show&&p()}),Q(()=>{r&&(n("update:show",!0),r=!1)}),L(()=>{e.show&&e.teleport&&(u(),r=!0)}),W(ue,()=>e.show),()=>e.teleport?f(ee,{to:e.teleport},{default:()=>[m(),C()]}):f(oe,null,[m(),C()])}}),Ie=Y(he),Te=Ie;export{Ie as P,Te as V,ge as a,T as p};