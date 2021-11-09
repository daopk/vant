import{c as v,e as d,o as g,u as _}from"./use-translate.33b17133.js";import{w as C}from"./with-install.d00852e2.js";import{C as S}from"./index.34cf0753.js";import{F as B}from"./index.d5d08194.js";import{F as b}from"./index.488ff9be.js";import{B as j}from"./index.77211d3e.js";import{S as D}from"./index.15474581.js";import{z as x,D as w,x as E,e as a,C as y,r as V,o as k,c as F,w as T,A as u}from"./vue-libs.7d3cdfcb.js";import{T as h}from"./function-call.af72b74c.js";import"./use-route.239dc794.js";import"./index.0a08d1ef.js";import"./constant.80c6de18.js";import"./use-expose.e553b263.js";import"./useChildren.0ca62895.js";import"./index.02ce6e6d.js";import"./useParent.9724c87d.js";import"./index.58fe8242.js";import"./mount-component.4efac25f.js";import"./index.9f327319.js";import"./interceptor.926f5054.js";import"./use-touch.ac1b49d9.js";import"./index.ba1bb458.js";import"./utils.45a8bdb5.js";import"./index.71250a43.js";import"./use-lazy-render.cbcc62ed.js";import"./on-popup-reopen.aa8649f1.js";import"./index.89fdf2f6.js";const[A,s,l]=v("contact-edit"),m={tel:"",name:""},L={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:g}};var U=x({name:A,props:L,emits:["save","delete","change-default"],setup(t,{emit:n}){const e=w(d({},m,t.contactInfo)),i=()=>{t.isSaving||n("save",e)},c=()=>n("delete",e),f=()=>a("div",{class:s("buttons")},[a(j,{block:!0,round:!0,type:"danger",text:l("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(j,{block:!0,round:!0,text:l("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(D,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>n("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(S,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return E(()=>t.contactInfo,o=>d(e,m,o)),()=>a(B,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:l("name"),rules:[{required:!0,message:l("nameEmpty")}],maxlength:"30",placeholder:l("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:l("tel"),rules:[{validator:t.telValidator,message:l("telInvalid")}],placeholder:l("tel")},null)]),r(),f()]})}});const I=C(U);const de=x({setup(t){const n=_({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({}),i=()=>h(n("save")),c=()=>h(n("delete"));return(f,p)=>{const r=V("demo-block");return k(),F(r,{title:u(n)("basicUsage")},{default:T(()=>[a(u(I),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(n)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{de as default};