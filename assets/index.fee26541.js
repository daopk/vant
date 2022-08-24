import{c as x,e as C,a as k}from"./use-translate.8ba7ae4e.js";import{d as _,b as g,n as B,t as F,w as h}from"./with-install.1c49d2eb.js";import{B as A}from"./index.ef8d6da0.js";import{R as S,a as w}from"./index.e23bd8ed.js";import{T as v}from"./index.fb4d8a97.js";import{I as L}from"./index.1d88bb58.js";import{C as y}from"./index.07b0068c.js";import{z as T,e as u,Q as E,C as V,r as I,o as j,c as $,w as P,B as r}from"./vue-libs.d483629c.js";import{T as p}from"./function-call.f9cdb205.js";import"./constant.80c6de18.js";import"./use-route.e59fb0a1.js";import"./index.8aa02b57.js";import"./Checker.d80df5fe.js";import"./mount-component.994f3c20.js";import"./use-expose.30c76c17.js";import"./index.b7859217.js";import"./interceptor.5ac8596d.js";import"./use-touch.2a7e3be3.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.76aa749c.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const[O,c]=x("address-item"),R=T({name:O,props:{address:_(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:i}){const m=()=>{e.switchable&&i("select"),i("click")},l=()=>u(L,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),i("edit"),i("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return u(v,{type:"danger",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:s,switchable:n}=e,o=[u("div",{class:c("name")},[`${d.name} ${d.tel}`,f()]),u("div",{class:c("address")},[d.address])];return n&&!s?u(S,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var s;const{disabled:d}=e;return u("div",{class:c({disabled:d}),onClick:m},[u(y,{border:!1,valueClass:c("value")},{value:a,"right-icon":l}),(s=t.bottom)==null?void 0:s.call(t,C({},e.address,{disabled:d}))])}}});function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const[U,b,q]=x("address-list"),G={list:g(),modelValue:B,switchable:F,disabledText:String,disabledList:g(),addButtonText:String,defaultTagText:String},J=T({name:U,props:G,emits:["add","edit","select","click-item","edit-disabled","select-disabled","update:modelValue"],setup(e,{slots:t,emit:i}){const m=(a,d,s)=>{const n=()=>i(s?"edit-disabled":"edit",a,d),o=()=>i("click-item",a,d),D=()=>{i(s?"select-disabled":"select",a,d),s||i("update:modelValue",a.id)};return u(R,{key:a.id,address:a,disabled:s,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:n,onClick:o,onSelect:D},{bottom:t["item-bottom"],tag:t.tag})},l=(a,d)=>{if(a)return a.map((s,n)=>m(s,n,d))},f=()=>u("div",{class:[b("bottom"),"van-safe-area-bottom"]},[u(A,{round:!0,block:!0,type:"danger",text:e.addButtonText||q("add"),class:b("add"),onClick:()=>i("add")},null)]);return()=>{var n,o;const a=l(e.list),d=l(e.disabledList,!0),s=e.disabledText&&u("div",{class:b("disabled-text")},[e.disabledText]);return u("div",{class:b()},[(n=t.top)==null?void 0:n.call(t),u(w,{modelValue:e.modelValue},z(a)?a:{default:()=>[a]}),s,d,(o=t.default)==null?void 0:o.call(t),f()])}}}),Q=h(J),H=Q,Te=T({__name:"index",setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),i=V("1"),m=()=>{p(t("add"))},l=(f,a)=>{p(`${t("edit")}:${a}`)};return(f,a)=>{const d=I("demo-block");return j(),$(d,{title:r(t)("basicUsage")},{default:P(()=>[u(r(H),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),list:r(t)("list"),"disabled-list":r(t)("disabledList"),"disabled-text":r(t)("disabledText"),"default-tag-text":r(t)("defaultTagText"),onAdd:m,onEdit:l},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{Te as default};