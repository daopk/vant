import{c as g,a as T}from"./use-translate.fec5be1c.js";import{u as C,w as _}from"./with-install.6c9f4f06.js";import{T as x}from"./index.87c238a2.js";import{I as k}from"./index.a07b08cc.js";import{C as v}from"./index.bb5cccb6.js";import{a as V,R as B}from"./index.e33a6928.js";import{B as E}from"./index.414acf3c.js";import{z as f,e as o,C as S,r as b,o as h,c as I,w,B as u}from"./vue-libs.7ad34eae.js";import{T as p}from"./function-call.5ee3657a.js";import"./constant.80c6de18.js";import"./use-route.13c8c682.js";import"./Checker.92c3e531.js";import"./index.98a2059e.js";import"./mount-component.5701bbc6.js";import"./use-expose.9edd25e2.js";import"./index.e85fbeb3.js";import"./interceptor.2bcb0d63.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.7781bda0.js";const[y,a,D]=g("contact-list"),L={list:Array,addText:String,modelValue:C,defaultTagText:String},A=f({name:y,props:L,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const d=(e,i)=>{const c=()=>{t("update:modelValue",e.id),t("select",e,i)},s=()=>o(B,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(k,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,i)}},null),m=()=>{const l=[`${e.name}\uFF0C${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(x,{type:"danger",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(v,{key:e.id,isLink:!0,center:!0,class:a("item"),valueClass:a("item-value"),onClick:c},{icon:r,value:m,"right-icon":s})};return()=>o("div",{class:a()},[o(V,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(d)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(E,{round:!0,block:!0,type:"danger",class:a("add"),text:n.addText||D("addContact"),onClick:()=>t("add")},null)])])}}),N=_(A),R=N,ot=f({__name:"index",setup(n){const t=T({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),d=S("1"),e=()=>{p(t("add"))},i=s=>{p(t("edit")+s.id)},c=s=>{p(t("select")+s.id)};return(s,r)=>{const m=b("demo-block");return h(),I(m,{title:u(t)("basicUsage")},{default:w(()=>[o(u(R),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=l=>d.value=l),list:u(t)("list"),"default-tag-text":u(t)("defaultTagText"),onAdd:e,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{ot as default};