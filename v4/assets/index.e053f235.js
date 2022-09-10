import{V as F}from"./index.fade8c54.js";import{V as k}from"./index.649b4224.js";import{c as J,e as L,a as K}from"./use-translate.c56bc05e.js";import{b as X,t as U,m as Q,n as W,w as Z}from"./with-install.2d06a5b3.js";import{H as q}from"./constant.80c6de18.js";import{T as G,a as Y}from"./index.1495687e.js";import{I as N}from"./index.bb072daf.js";import{A as j,x as T,y as $,e as a,Q as M,q as H,H as B,D as R,r as I,o as _,a as ee,w,C as l,d as te,t as le,F as oe}from"./vue-libs.a3cd7f61.js";import{d as ue}from"./deep-clone.ee344e6f.js";import"./index.8c710c0a.js";import"./use-route.7a9317f3.js";import"./use-id.5b8801cd.js";import"./use-expose.2dad0d8e.js";import"./interceptor.7caa5e9a.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./index.3ccbda83.js";import"./use-refs.a0fe18f0.js";import"./index.0d3f38fa.js";function ae(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!M(c)}const[ne,A,se]=J("cascader"),ie={title:String,options:X(),closeable:U,swipeable:U,closeIcon:Q("cross"),showHeader:U,modelValue:W,fieldNames:Object,placeholder:String,activeColor:String},re=j({name:ne,props:ie,emits:["close","change","finish","clickTab","update:modelValue"],setup(c,{slots:o,emit:f}){const i=T([]),v=T(0),{text:h,value:C,children:m}=L({text:"text",value:"value",children:"children"},c.fieldNames),V=(u,n)=>{for(const d of u){if(d[C]===n)return[d];if(d[m]){const s=V(d[m],n);if(s)return[d,...s]}}},y=()=>{const{options:u,modelValue:n}=c;if(n!==void 0){const d=V(u,n);if(d){let s=u;i.value=d.map(p=>{const g={options:s,selected:p},E=s.find(S=>S[C]===p[C]);return E&&(s=E[m]),g}),s&&i.value.push({options:s,selected:null}),H(()=>{v.value=i.value.length-1});return}}i.value=[{options:u,selected:null}]},b=(u,n)=>{if(u.disabled)return;if(i.value[n].selected=u,i.value.length>n+1&&(i.value=i.value.slice(0,n+1)),u[m]){const p={options:u[m],selected:null};i.value[n+1]?i.value[n+1]=p:i.value.push(p),H(()=>{v.value++})}const d=i.value.map(p=>p.selected).filter(Boolean);f("update:modelValue",u[C]);const s={value:u[C],tabIndex:n,selectedOptions:d};f("change",s),u[m]||f("finish",s)},x=()=>f("close"),e=({name:u,title:n})=>f("clickTab",u,n),r=()=>c.showHeader?a("div",{class:A("header")},[a("h2",{class:A("title")},[o.title?o.title():c.title]),c.closeable?a(N,{name:c.closeIcon,class:[A("close-icon"),q],onClick:x},null):null]):null,t=(u,n,d)=>{const{disabled:s}=u,p=!!(n&&u[C]===n[C]),g=u.color||(p?c.activeColor:void 0),E=o.option?o.option({option:u,selected:p}):a("span",null,[u[h]]);return a("li",{role:"menuitemradio",class:[A("option",{selected:p,disabled:s}),u.className],style:{color:g},tabindex:s?void 0:p?0:-1,"aria-checked":p,"aria-disabled":s||void 0,onClick:()=>b(u,d)},[E,p?a(N,{name:"success",class:A("selected-icon")},null):null])},O=(u,n,d)=>a("ul",{role:"menu",class:A("options")},[u.map(s=>t(s,n,d))]),P=(u,n)=>{const{options:d,selected:s}=u,p=c.placeholder||se("select"),g=s?s[h]:p;return a(Y,{title:g,titleClass:A("tab",{unselected:!s})},{default:()=>{var E,S;return[(E=o["options-top"])==null?void 0:E.call(o,{tabIndex:n}),O(d,s,n),(S=o["options-bottom"])==null?void 0:S.call(o,{tabIndex:n})]}})},z=()=>{let u;return a(G,{active:v.value,"onUpdate:active":n=>v.value=n,shrink:!0,animated:!0,class:A("tabs"),color:c.activeColor,swipeable:c.swipeable,onClickTab:e},ae(u=i.value.map(P))?u:{default:()=>[u]})};return y(),$(()=>c.options,y,{deep:!0}),$(()=>c.modelValue,u=>{u!==void 0&&i.value.map(d=>{var s;return(s=d.selected)==null?void 0:s[C]}).includes(u)||y()}),()=>a("div",{class:A()},[r(),z()])}}),de=Z(re),D=de,ce=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],ve=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}],me={class:"current-level"},$e=j({__name:"index",setup(c){const o=K({"zh-CN":{area:"\u5730\u533A",options:ce,selectArea:"\u8BF7\u9009\u62E9\u5730\u533A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncOptions:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",asyncOptions1:[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}],asyncOptions2:[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],currentLevel:x=>`\u5F53\u524D\u4E3A\u7B2C ${x} \u7EA7`,customContent:"\u81EA\u5B9A\u4E49\u9009\u9879\u4E0A\u65B9\u5185\u5BB9",customFieldNames:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},"en-US":{area:"Area",options:ve,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:x=>`Current level is ${x}`,customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),f=B({show:!1,value:"",result:""}),i=B({show:!1,value:void 0,result:""}),v=B({show:!1,value:void 0,result:"",options:o("asyncOptions1")}),h=B({show:!1,value:void 0,result:""}),C={text:"name",value:"code",children:"items"},m=B({show:!1,value:void 0,result:""}),V=R(()=>{const x=ue(o("options")),e=r=>{"text"in r&&(r.name=r.text,delete r.text),"value"in r&&(r.code=r.value,delete r.value),"children"in r&&(r.items=r.children,delete r.children,r.items.forEach(e))};return x.forEach(e),x}),y=({value:x})=>{x==="330000"&&setTimeout(()=>{v.options[0].children=o("asyncOptions2")},500)},b=(x,{value:e,selectedOptions:r})=>{const t=r.map(O=>O.text||O.name).join("/");x.show=!1,x.value=e,x.result=t};return(x,e)=>{const r=I("demo-block");return _(),ee(oe,null,[a(r,{card:"",title:l(o)("basicUsage")},{default:w(()=>[a(l(F),{modelValue:f.result,"onUpdate:modelValue":e[0]||(e[0]=t=>f.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[1]||(e[1]=t=>f.show=!0)},null,8,["modelValue","label","placeholder"]),a(l(k),{show:f.show,"onUpdate:show":e[5]||(e[5]=t=>f.show=t),round:"",teleport:"body",position:"bottom"},{default:w(()=>[a(l(D),{modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=t=>f.value=t),title:l(o)("selectArea"),options:l(o)("options"),onClose:e[3]||(e[3]=t=>f.show=!1),onFinish:e[4]||(e[4]=t=>b(f,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:l(o)("customColor")},{default:w(()=>[a(l(F),{modelValue:i.result,"onUpdate:modelValue":e[6]||(e[6]=t=>i.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[7]||(e[7]=t=>i.show=!0)},null,8,["modelValue","label","placeholder"]),a(l(k),{show:i.show,"onUpdate:show":e[11]||(e[11]=t=>i.show=t),round:"",teleport:"body",position:"bottom"},{default:w(()=>[a(l(D),{modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=t=>i.value=t),title:l(o)("selectArea"),options:l(o)("options"),"active-color":"#ee0a24",onClose:e[9]||(e[9]=t=>i.show=!1),onFinish:e[10]||(e[10]=t=>b(i,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:l(o)("asyncOptions")},{default:w(()=>[a(l(F),{modelValue:v.result,"onUpdate:modelValue":e[12]||(e[12]=t=>v.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[13]||(e[13]=t=>v.show=!0)},null,8,["modelValue","label","placeholder"]),a(l(k),{show:v.show,"onUpdate:show":e[17]||(e[17]=t=>v.show=t),round:"",teleport:"body",position:"bottom"},{default:w(()=>[a(l(D),{modelValue:v.value,"onUpdate:modelValue":e[14]||(e[14]=t=>v.value=t),title:l(o)("selectArea"),options:v.options,onClose:e[15]||(e[15]=t=>v.show=!1),onChange:y,onFinish:e[16]||(e[16]=t=>b(v,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:l(o)("customFieldNames")},{default:w(()=>[a(l(F),{modelValue:h.result,"onUpdate:modelValue":e[18]||(e[18]=t=>h.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[19]||(e[19]=t=>h.show=!0)},null,8,["modelValue","label","placeholder"]),a(l(k),{show:h.show,"onUpdate:show":e[23]||(e[23]=t=>h.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:w(()=>[a(l(D),{modelValue:h.value,"onUpdate:modelValue":e[20]||(e[20]=t=>h.value=t),title:l(o)("selectArea"),options:l(V),"field-names":C,onClose:e[21]||(e[21]=t=>h.show=!1),onFinish:e[22]||(e[22]=t=>b(h,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),a(r,{card:"",title:l(o)("customContent")},{default:w(()=>[a(l(F),{modelValue:m.result,"onUpdate:modelValue":e[24]||(e[24]=t=>m.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[25]||(e[25]=t=>m.show=!0)},null,8,["modelValue","label","placeholder"]),a(l(k),{show:m.show,"onUpdate:show":e[29]||(e[29]=t=>m.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:w(()=>[a(l(D),{modelValue:m.value,"onUpdate:modelValue":e[26]||(e[26]=t=>m.value=t),title:l(o)("selectArea"),options:l(V),"field-names":C,onClose:e[27]||(e[27]=t=>m.show=!1),onFinish:e[28]||(e[28]=t=>b(m,t))},{"options-top":w(({tabIndex:t})=>[te("div",me,le(l(o)("currentLevel",t)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{$e as default};