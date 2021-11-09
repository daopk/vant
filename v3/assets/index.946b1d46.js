import{F}from"./index.488ff9be.js";import{P as g}from"./index.9f327319.js";import{c as L,e as J,u as K}from"./use-translate.33b17133.js";import{b as X,t as S,m as W,n as Z,w as q}from"./with-install.d00852e2.js";import{H as G}from"./constant.80c6de18.js";import{T as Q,a as Y}from"./index.f6404c91.js";import{I as U}from"./index.0a08d1ef.js";import{z as N,C as T,x as $,e as s,L as M,q as P,D as B,B as R,r as I,o as _,a as ee,w as C,A as e,d as te,t as le,F as oe}from"./vue-libs.7d3cdfcb.js";import{d as ue}from"./deep-clone.6c0cb266.js";import"./index.34cf0753.js";import"./use-route.239dc794.js";import"./use-expose.e553b263.js";import"./index.02ce6e6d.js";import"./useParent.9724c87d.js";import"./interceptor.926f5054.js";import"./use-touch.ac1b49d9.js";import"./index.ba1bb458.js";import"./utils.45a8bdb5.js";import"./index.71250a43.js";import"./use-lazy-render.cbcc62ed.js";import"./on-popup-reopen.aa8649f1.js";import"./index.89fdf2f6.js";import"./index.b2b5faa5.js";import"./useChildren.0ca62895.js";import"./use-refs.eed71367.js";import"./index.2081208f.js";function se(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!M(c)}const[ae,w,ne]=L("cascader"),ie={title:String,options:X(),closeable:S,swipeable:S,closeIcon:W("cross"),modelValue:Z,fieldNames:Object,placeholder:String,activeColor:String};var re=N({name:ae,props:ie,emits:["close","change","finish","click-tab","update:modelValue"],setup(c,{slots:o,emit:m}){const i=T([]),p=T(0),{text:x,value:h,children:v}=J({text:"text",value:"value",children:"children"},c.fieldNames),E=(u,a)=>{for(const d of u){if(d[h]===a)return[d];if(d[v]){const n=E(d[v],a);if(n)return[d,...n]}}},V=()=>{const{options:u,modelValue:a}=c;if(a!==void 0){const d=E(u,a);if(d){let n=u;i.value=d.map(b=>{const j={options:n,selected:b},y=n.find(O=>O[h]===b[h]);return y&&(n=y[v]),j}),n&&i.value.push({options:n,selected:null}),P(()=>{p.value=i.value.length-1});return}}i.value=[{options:u,selected:null}]},A=(u,a)=>{if(u.disabled)return;if(i.value[a].selected=u,i.value.length>a+1&&(i.value=i.value.slice(0,a+1)),u[v]){const b={options:u[v],selected:null};i.value[a+1]?i.value[a+1]=b:i.value.push(b),P(()=>{p.value++})}const d=i.value.map(b=>b.selected).filter(Boolean);m("update:modelValue",u[h]);const n={value:u[h],tabIndex:a,selectedOptions:d};m("change",n),u[v]||m("finish",n)},f=()=>m("close"),t=({name:u,title:a})=>m("click-tab",u,a),r=()=>s("div",{class:w("header")},[s("h2",{class:w("title")},[o.title?o.title():c.title]),c.closeable?s(U,{name:c.closeIcon,class:[w("close-icon"),G],onClick:f},null):null]),l=(u,a,d)=>{const n=a&&u[h]===a[h],b=u.color||(n?c.activeColor:void 0),j=o.option?o.option({option:u,selected:n}):s("span",null,[u[x]]);return s("li",{class:[w("option",{selected:n,disabled:u.disabled}),u.className],style:{color:b},onClick:()=>A(u,d)},[j,n?s(U,{name:"success",class:w("selected-icon")},null):null])},k=(u,a,d)=>s("ul",{class:w("options")},[u.map(n=>l(n,a,d))]),z=(u,a)=>{const{options:d,selected:n}=u,b=c.placeholder||ne("select"),j=n?n[x]:b;return s(Y,{title:j,titleClass:w("tab",{unselected:!n})},{default:()=>{var y,O;return[(y=o["options-top"])==null?void 0:y.call(o,{tabIndex:a}),k(d,n,a),(O=o["options-bottom"])==null?void 0:O.call(o,{tabIndex:a})]}})},H=()=>{let u;return s(Q,{active:p.value,"onUpdate:active":a=>p.value=a,animated:!0,class:w("tabs"),color:c.activeColor,swipeThreshold:0,swipeable:c.swipeable,"onClick-tab":t},se(u=i.value.map(z))?u:{default:()=>[u]})};return V(),$(()=>c.options,V,{deep:!0}),$(()=>c.modelValue,u=>{u!==void 0&&i.value.map(d=>{var n;return(n=d.selected)==null?void 0:n[h]}).includes(u)||V()}),()=>s("div",{class:w()},[r(),H()])}});const D=q(re);var de=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],ce=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}];const pe={class:"current-level"},He=N({setup(c){const o=K({"zh-CN":{area:"\u5730\u533A",options:de,selectArea:"\u8BF7\u9009\u62E9\u5730\u533A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncOptions:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",asyncOptions1:[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}],asyncOptions2:[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],currentLevel:f=>`\u5F53\u524D\u4E3A\u7B2C ${f} \u7EA7`,customContent:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9",customFieldNames:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},"en-US":{area:"Area",options:ce,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:f=>`Current level is ${f}`,customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),m=B({show:!1,value:"",result:""}),i=B({show:!1,value:null,result:""}),p=B({show:!1,value:null,result:"",options:o("asyncOptions1")}),x=B({show:!1,value:null,result:""}),h={text:"name",value:"code",children:"items"},v=B({show:!1,value:null,result:""}),E=R(()=>{const f=ue(o("options")),t=r=>{"text"in r&&(r.name=r.text,delete r.text),"value"in r&&(r.code=r.value,delete r.value),"children"in r&&(r.items=r.children,delete r.children,r.items.forEach(t))};return f.forEach(t),f}),V=({value:f})=>{f==="330000"&&setTimeout(()=>{p.options[0].children=o("asyncOptions2")},500)},A=(f,{value:t,selectedOptions:r})=>{const l=r.map(k=>k.text||k.name).join("/");f.show=!1,f.value=t,f.result=l};return(f,t)=>{const r=I("demo-block");return _(),ee(oe,null,[s(r,{card:"",title:e(o)("basicUsage")},{default:C(()=>[s(e(F),{modelValue:e(m).result,"onUpdate:modelValue":t[0]||(t[0]=l=>e(m).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[1]||(t[1]=l=>e(m).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(g),{show:e(m).show,"onUpdate:show":t[5]||(t[5]=l=>e(m).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(D),{modelValue:e(m).value,"onUpdate:modelValue":t[2]||(t[2]=l=>e(m).value=l),title:e(o)("selectArea"),options:e(o)("options"),onClose:t[3]||(t[3]=l=>e(m).show=!1),onFinish:t[4]||(t[4]=l=>A(e(m),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(o)("customColor")},{default:C(()=>[s(e(F),{modelValue:e(i).result,"onUpdate:modelValue":t[6]||(t[6]=l=>e(i).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[7]||(t[7]=l=>e(i).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(g),{show:e(i).show,"onUpdate:show":t[11]||(t[11]=l=>e(i).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(D),{modelValue:e(i).value,"onUpdate:modelValue":t[8]||(t[8]=l=>e(i).value=l),title:e(o)("selectArea"),options:e(o)("options"),"active-color":"#1989fa",onClose:t[9]||(t[9]=l=>e(i).show=!1),onFinish:t[10]||(t[10]=l=>A(e(i),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(o)("asyncOptions")},{default:C(()=>[s(e(F),{modelValue:e(p).result,"onUpdate:modelValue":t[12]||(t[12]=l=>e(p).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[13]||(t[13]=l=>e(p).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(g),{show:e(p).show,"onUpdate:show":t[17]||(t[17]=l=>e(p).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[s(e(D),{modelValue:e(p).value,"onUpdate:modelValue":t[14]||(t[14]=l=>e(p).value=l),title:e(o)("selectArea"),options:e(p).options,onClose:t[15]||(t[15]=l=>e(p).show=!1),onChange:V,onFinish:t[16]||(t[16]=l=>A(e(p),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(o)("customFieldNames")},{default:C(()=>[s(e(F),{modelValue:e(x).result,"onUpdate:modelValue":t[18]||(t[18]=l=>e(x).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[19]||(t[19]=l=>e(x).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(g),{show:e(x).show,"onUpdate:show":t[23]||(t[23]=l=>e(x).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:C(()=>[s(e(D),{modelValue:e(x).value,"onUpdate:modelValue":t[20]||(t[20]=l=>e(x).value=l),title:e(o)("selectArea"),options:e(E),"field-names":h,onClose:t[21]||(t[21]=l=>e(x).show=!1),onFinish:t[22]||(t[22]=l=>A(e(x),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(o)("customContent")},{default:C(()=>[s(e(F),{modelValue:e(v).result,"onUpdate:modelValue":t[24]||(t[24]=l=>e(v).result=l),"is-link":"",readonly:"",label:e(o)("area"),placeholder:e(o)("selectArea"),onClick:t[25]||(t[25]=l=>e(v).show=!0)},null,8,["modelValue","label","placeholder"]),s(e(g),{show:e(v).show,"onUpdate:show":t[29]||(t[29]=l=>e(v).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:C(()=>[s(e(D),{modelValue:e(v).value,"onUpdate:modelValue":t[26]||(t[26]=l=>e(v).value=l),title:e(o)("selectArea"),options:e(E),"field-names":h,onClose:t[27]||(t[27]=l=>e(v).show=!1),onFinish:t[28]||(t[28]=l=>A(e(v),l))},{"options-top":C(({tabIndex:l})=>[te("div",pe,le(e(o)("currentLevel",l)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{He as default};