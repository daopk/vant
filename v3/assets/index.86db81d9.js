import{c as V,h as k,B as w}from"./use-translate.33b17133.js";import{c as h,n as E,w as y}from"./with-install.d00852e2.js";import{u as _}from"./use-touch.ac1b49d9.js";import{L as $}from"./index.58fe8242.js";import{z as A,C as B,D as L,x as N,e as l,q as R}from"./vue-libs.7d3cdfcb.js";import{u as C}from"./index.71250a43.js";const[I,r,M]=V("pull-refresh"),D=50,U=["pulling","loosing","success"],Y={disabled:Boolean,modelValue:Boolean,headHeight:h(D),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:E,successDuration:h(500),animationDuration:h(300)};var q=A({name:I,props:Y,emits:["refresh","update:modelValue"],setup(a,{emit:f,slots:n}){let i;const m=B(),S=C(m),t=L({status:"normal",distance:0,duration:0}),u=_(),v=()=>{if(a.headHeight!==D)return{height:`${a.headHeight}px`}},d=()=>t.status!=="loading"&&t.status!=="success"&&!a.disabled,H=e=>{const s=+(a.pullDistance||a.headHeight);return e>s&&(e<s*2?e=s+(e-s)/2:e=s*1.5+(e-s*2)/4),Math.round(e)},o=(e,s)=>{const c=+(a.pullDistance||a.headHeight);t.distance=e,s?t.status="loading":e===0?t.status="normal":e<c?t.status="pulling":t.status="loosing"},g=()=>{const{status:e}=t;return e==="normal"?"":a[`${e}Text`]||M(e)},P=()=>{const{status:e,distance:s}=t;if(n[e])return n[e]({distance:s});const c=[];return U.includes(e)&&c.push(l("div",{class:r("text")},[g()])),e==="loading"&&c.push(l($,{class:r("loading")},{default:g})),c},b=()=>{t.status="success",setTimeout(()=>{o(0)},+a.successDuration)},T=e=>{i=w(S.value)===0,i&&(t.duration=0,u.start(e))},p=e=>{d()&&T(e)},j=e=>{if(d()){i||T(e);const{deltaY:s}=u;u.move(e),i&&s.value>=0&&u.isVertical()&&(k(e),o(H(s.value)))}},x=()=>{i&&u.deltaY.value&&d()&&(t.duration=+a.animationDuration,t.status==="loosing"?(o(+a.headHeight,!0),f("update:modelValue",!0),R(()=>f("refresh"))):o(0))};return N(()=>a.modelValue,e=>{t.duration=+a.animationDuration,e?o(+a.headHeight,!0):n.success||a.successText?b():o(0,!1)}),()=>{var s;const e={transitionDuration:`${t.duration}ms`,transform:t.distance?`translate3d(0,${t.distance}px, 0)`:""};return l("div",{ref:m,class:r()},[l("div",{class:r("track"),style:e,onTouchstart:p,onTouchmove:j,onTouchend:x,onTouchcancel:x},[l("div",{class:r("head"),style:v()},[P()]),(s=n.default)==null?void 0:s.call(n)])])}}});const O=y(q);export{O as P};