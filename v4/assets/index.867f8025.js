import{c as L,b as ce,P as le,S as ue,T as re,Q as _,l as ve,U as M,F as k,u as fe}from"./use-translate.8036e41d.js";import{t as $,n as W,c as R,w as U}from"./with-install.6887218d.js";import{u as he}from"./use-touch.ee9512d6.js";import{u as q}from"./use-expose.1f17c8d6.js";import{o as de}from"./on-popup-reopen.2164636b.js";import{A as F,x as me,H as J,D as h,y as P,N as K,L as we,M as ge,J as pe,e as C,q as Q}from"./vue-libs.a040eeb8.js";const[j,z]=L("swipe"),ye={loop:$,width:W,height:W,vertical:Boolean,autoplay:R(0),duration:R(500),touchable:$,lazyRender:Boolean,initialSwipe:R(0),indicatorColor:String,showIndicators:$,stopPropagation:$},G=Symbol(j),Se=F({name:j,props:ye,emits:["change"],setup(a,{emit:y,slots:d}){const u=me(),e=J({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),c=he(),{children:m,linkChildren:D}=ce(G),i=h(()=>m.length),n=h(()=>e[a.vertical?"height":"width"]),r=h(()=>a.vertical?c.deltaY.value:c.deltaX.value),f=h(()=>e.rect?(a.vertical?e.rect.height:e.rect.width)-n.value*i.value:0),A=h(()=>Math.ceil(Math.abs(f.value)/n.value)),S=h(()=>i.value*n.value),g=h(()=>(e.active+i.value)%i.value),B=h(()=>{const t=a.vertical?"vertical":"horizontal";return c.direction.value===t}),Z=h(()=>{const t={transitionDuration:`${e.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${e.offset}px)`};if(n.value){const s=a.vertical?"height":"width",o=a.vertical?"width":"height";t[s]=`${S.value}px`,t[o]=a[o]?`${a[o]}px`:""}return t}),ee=t=>{const{active:s}=e;return t?a.loop?k(s+t,-1,i.value):k(s+t,0,A.value):s},E=(t,s=0)=>{let o=t*n.value;a.loop||(o=Math.min(o,-f.value));let v=s-o;return a.loop||(v=k(v,f.value,0)),v},w=({pace:t=0,offset:s=0,emitChange:o})=>{if(i.value<=1)return;const{active:v}=e,l=ee(t),x=E(l,s);if(a.loop){if(m[0]&&x!==f.value){const O=x<f.value;m[0].setOffset(O?S.value:0)}if(m[i.value-1]&&x!==0){const O=x>0;m[i.value-1].setOffset(O?-S.value:0)}}e.active=l,e.offset=x,o&&l!==v&&y("change",g.value)},I=()=>{e.swiping=!0,e.active<=-1?w({pace:i.value}):e.active>=i.value&&w({pace:-i.value})},te=()=>{I(),c.reset(),M(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},V=()=>{I(),c.reset(),M(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let Y;const b=()=>clearTimeout(Y),T=()=>{b(),a.autoplay>0&&i.value>1&&(Y=setTimeout(()=>{V(),T()},+a.autoplay))},p=(t=+a.initialSwipe)=>{if(!u.value)return;const s=()=>{var o,v;if(!_(u)){const l={width:u.value.offsetWidth,height:u.value.offsetHeight};e.rect=l,e.width=+((o=a.width)!=null?o:l.width),e.height=+((v=a.height)!=null?v:l.height)}i.value&&(t=Math.min(i.value-1,t)),e.active=t,e.swiping=!0,e.offset=E(t),m.forEach(l=>{l.setOffset(0)}),T()};_(u)?Q().then(s):s()},H=()=>p(e.active);let N;const ae=t=>{!a.touchable||(c.start(t),N=Date.now(),b(),I())},ie=t=>{a.touchable&&e.swiping&&(c.move(t),B.value&&(ve(t,a.stopPropagation),w({offset:r.value})))},X=()=>{if(!a.touchable||!e.swiping)return;const t=Date.now()-N,s=r.value/t;if((Math.abs(s)>.25||Math.abs(r.value)>n.value/2)&&B.value){const v=a.vertical?c.offsetY.value:c.offsetX.value;let l=0;a.loop?l=v>0?r.value>0?-1:1:0:l=-Math[r.value>0?"ceil":"floor"](r.value/n.value),w({pace:l,emitChange:!0})}else r.value&&w({pace:0});e.swiping=!1,T()},ne=(t,s={})=>{I(),c.reset(),M(()=>{let o;a.loop&&t===i.value?o=e.active===0?0:t:o=t%i.value,s.immediate?M(()=>{e.swiping=!1}):e.swiping=!1,w({pace:o-e.active,emitChange:!0})})},oe=(t,s)=>{const o=s===g.value,v=o?{backgroundColor:a.indicatorColor}:void 0;return C("i",{style:v,class:z("indicator",{active:o})},null)},se=()=>{if(d.indicator)return d.indicator({active:g.value,total:i.value});if(a.showIndicators&&i.value>1)return C("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(oe)])};return q({prev:te,next:V,state:e,resize:H,swipeTo:ne}),D({size:n,props:a,count:i,activeIndicator:g}),P(()=>a.initialSwipe,t=>p(+t)),P(i,()=>p(e.active)),P(()=>a.autoplay,T),P([le,ue],H),P(re(),t=>{t==="visible"?T():b()}),K(p),we(()=>p(e.active)),de(()=>p(e.active)),ge(b),pe(b),()=>{var t;return C("div",{ref:u,class:z()},[C("div",{style:Z.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:ae,onTouchmove:ie,onTouchend:X,onTouchcancel:X},[(t=d.default)==null?void 0:t.call(d)]),se()])}}}),be=U(Se),Oe=be,[Te,xe]=L("swipe-item"),Pe=F({name:Te,setup(a,{slots:y}){let d;const u=J({offset:0,inited:!1,mounted:!1}),{parent:e,index:c}=fe(G);if(!e)return;const m=h(()=>{const n={},{vertical:r}=e.props;return e.size.value&&(n[r?"height":"width"]=`${e.size.value}px`),u.offset&&(n.transform=`translate${r?"Y":"X"}(${u.offset}px)`),n}),D=h(()=>{const{loop:n,lazyRender:r}=e.props;if(!r||d)return!0;if(!u.mounted)return!1;const f=e.activeIndicator.value,A=e.count.value-1,S=f===0&&n?A:f-1,g=f===A&&n?0:f+1;return d=c.value===f||c.value===S||c.value===g,d}),i=n=>{u.offset=n};return K(()=>{Q(()=>{u.mounted=!0})}),q({setOffset:i}),()=>{var n;return C("div",{class:xe(),style:m.value},[D.value?(n=y.default)==null?void 0:n.call(y):null])}}}),Ce=U(Pe),ke=Ce;export{be as S,Oe as V,Ce as a,ke as b};