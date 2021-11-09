import{c as K,C as ve,h as fe,w as E}from"./use-translate.33b17133.js";import{t as A,n as U,c as R,w as F}from"./with-install.d00852e2.js";import{u as he}from"./use-touch.ac1b49d9.js";import{u as G}from"./use-expose.e553b263.js";import{o as de}from"./on-popup-reopen.aa8649f1.js";import{i as J,d as I}from"./utils.45a8bdb5.js";import{u as Y}from"./index.ba1bb458.js";import{C as $,z as Q,D as Z,B as v,x as T,E as ee,P as me,N as we,O as ge,e as C,q as pe}from"./vue-libs.7d3cdfcb.js";import{u as be}from"./useChildren.0ca62895.js";import{u as ye}from"./useParent.9724c87d.js";var M,N;function Se(){if(!M){M=$(0),N=$(0);var t=()=>{J&&(M.value=window.innerWidth,N.value=window.innerHeight)};t(),Y("resize",t),Y("orientationchange",t)}return{width:M,height:N}}function xe(){var t=$("visible"),h=()=>{J&&(t.value=document.hidden?"hidden":"visible")};return h(),Y("visibilitychange",h),t}const[te,O]=K("swipe"),Te={loop:A,width:U,height:U,vertical:Boolean,autoplay:R(0),duration:R(500),touchable:A,lazyRender:Boolean,initialSwipe:R(0),indicatorColor:String,showIndicators:A,stopPropagation:A},ie=Symbol(te);var Ce=Q({name:te,props:Te,emits:["change"],setup(t,{emit:h,slots:f}){const u=$(),e=Z({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),c=he(),P=Se(),{children:d,linkChildren:D}=be(ie),a=v(()=>d.length),l=v(()=>e[t.vertical?"height":"width"]),r=v(()=>t.vertical?c.deltaY.value:c.deltaX.value),m=v(()=>e.rect?(t.vertical?e.rect.height:e.rect.width)-l.value*a.value:0),k=v(()=>Math.ceil(Math.abs(m.value)/l.value)),b=v(()=>a.value*l.value),z=v(()=>(e.active+a.value)%a.value),W=v(()=>{const i=t.vertical?"vertical":"horizontal";return c.direction.value===i}),ae=v(()=>{const i={transitionDuration:`${e.swiping?0:t.duration}ms`,transform:`translate${t.vertical?"Y":"X"}(${e.offset}px)`};if(l.value){const o=t.vertical?"height":"width",n=t.vertical?"width":"height";i[o]=`${b.value}px`,i[n]=t[n]?`${t[n]}px`:""}return i}),ne=i=>{const{active:o}=e;return i?t.loop?E(o+i,-1,a.value):E(o+i,0,k.value):o},X=(i,o=0)=>{let n=i*l.value;t.loop||(n=Math.min(n,-m.value));let s=o-n;return t.loop||(s=E(s,m.value,0)),s},w=({pace:i=0,offset:o=0,emitChange:n})=>{if(a.value<=1)return;const{active:s}=e,g=ne(i),x=X(g,o);if(t.loop){if(d[0]&&x!==m.value){const B=x<m.value;d[0].setOffset(B?b.value:0)}if(d[a.value-1]&&x!==0){const B=x>0;d[a.value-1].setOffset(B?-b.value:0)}}e.active=g,e.offset=x,n&&g!==s&&h("change",z.value)},j=()=>{e.swiping=!0,e.active<=-1?w({pace:a.value}):e.active>=a.value&&w({pace:-a.value})},oe=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},_=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let H;const y=()=>clearTimeout(H),S=()=>{y(),t.autoplay>0&&a.value>1&&(H=setTimeout(()=>{_(),S()},+t.autoplay))},p=(i=+t.initialSwipe)=>{var o,n;if(!!u.value){if(!ve(u)){const s={width:u.value.offsetWidth,height:u.value.offsetHeight};e.rect=s,e.width=+((o=t.width)!=null?o:s.width),e.height=+((n=t.height)!=null?n:s.height)}a.value&&(i=Math.min(a.value-1,i)),e.active=i,e.swiping=!0,e.offset=X(i),d.forEach(s=>{s.setOffset(0)}),S()}},V=()=>p(e.active);let L;const se=i=>{!t.touchable||(c.start(i),L=Date.now(),y(),j())},ce=i=>{t.touchable&&e.swiping&&(c.move(i),W.value&&(fe(i,t.stopPropagation),w({offset:r.value})))},q=()=>{if(!t.touchable||!e.swiping)return;const i=Date.now()-L,o=r.value/i;if((Math.abs(o)>.25||Math.abs(r.value)>l.value/2)&&W.value){const s=t.vertical?c.offsetY.value:c.offsetX.value;let g=0;t.loop?g=s>0?r.value>0?-1:1:0:g=-Math[r.value>0?"ceil":"floor"](r.value/l.value),w({pace:g,emitChange:!0})}else r.value&&w({pace:0});e.swiping=!1,S()},le=(i,o={})=>{j(),c.reset(),I(()=>{let n;t.loop&&i===a.value?n=e.active===0?0:i:n=i%a.value,o.immediate?I(()=>{e.swiping=!1}):e.swiping=!1,w({pace:n-e.active,emitChange:!0})})},re=(i,o)=>{const n=o===z.value,s=n?{backgroundColor:t.indicatorColor}:void 0;return C("i",{style:s,class:O("indicator",{active:n})},null)},ue=()=>{if(f.indicator)return f.indicator({active:z.value});if(t.showIndicators&&a.value>1)return C("div",{class:O("indicators",{vertical:t.vertical})},[Array(a.value).fill("").map(re)])};return G({prev:oe,next:_,state:e,resize:V,swipeTo:le}),D({size:l,props:t,count:a,activeIndicator:z}),T(()=>t.initialSwipe,i=>p(+i)),T(a,()=>p(e.active)),T(()=>t.autoplay,S),T([P.width,P.height],V),T(xe(),i=>{i==="visible"?S():y()}),ee(p),me(()=>p(e.active)),de(()=>p(e.active)),we(y),ge(y),()=>{var i;return C("div",{ref:u,class:O()},[C("div",{style:ae.value,class:O("track",{vertical:t.vertical}),onTouchstart:se,onTouchmove:ce,onTouchend:q,onTouchcancel:q},[(i=f.default)==null?void 0:i.call(f)]),ue()])}}});const Ye=F(Ce),[Pe,ze]=K("swipe-item");var je=Q({name:Pe,setup(t,{slots:h}){let f;const u=Z({offset:0,inited:!1,mounted:!1}),{parent:e,index:c}=ye(ie);if(!e)return;const P=v(()=>{const a={},{vertical:l}=e.props;return e.size.value&&(a[l?"height":"width"]=`${e.size.value}px`),u.offset&&(a.transform=`translate${l?"Y":"X"}(${u.offset}px)`),a}),d=v(()=>{const{loop:a,lazyRender:l}=e.props;if(!l||f)return!0;if(!u.mounted)return!1;const r=e.activeIndicator.value,m=e.count.value-1,k=r===0&&a?m:r-1,b=r===m&&a?0:r+1;return f=c.value===r||c.value===k||c.value===b,f}),D=a=>{u.offset=a};return ee(()=>{pe(()=>{u.mounted=!0})}),G({setOffset:D}),()=>{var a;return C("div",{class:ze(),style:P.value},[d.value?(a=h.default)==null?void 0:a.call(h):null])}}});const Ne=F(je);export{Ye as S,Ne as a,Se as u};