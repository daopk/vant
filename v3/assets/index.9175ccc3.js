import{c,e as h}from"./use-translate.33b17133.js";import{c as j,w as d,n as P}from"./with-install.d00852e2.js";import{z as l,e as n}from"./vue-libs.7d3cdfcb.js";import{u as k}from"./useChildren.0ca62895.js";import{r as A,u as C}from"./use-route.239dc794.js";import{B as x}from"./index.0a08d1ef.js";import{u as B}from"./useParent.9724c87d.js";const[m,I]=c("sidebar"),u=Symbol(m),V={modelValue:j(0)};var w=l({name:m,props:V,emits:["change","update:modelValue"],setup(s,{emit:r,slots:t}){const{linkChildren:i}=k(u),a=()=>+s.modelValue;return i({getActive:a,setActive:e=>{e!==a()&&(r("update:modelValue",e),r("change",e))}}),()=>{var e;return n("div",{class:I()},[(e=t.default)==null?void 0:e.call(t)])}}});const q=d(w),[N,p]=c("sidebar-item"),_=h({},A,{dot:Boolean,title:String,badge:P,disabled:Boolean});var E=l({name:N,props:_,emits:["click"],setup(s,{emit:r,slots:t}){const i=C(),{parent:a,index:o}=B(u);if(!a)return;const e=()=>{s.disabled||(r("click",o.value),a.setActive(o.value),i())};return()=>{const{dot:b,badge:f,title:v,disabled:g}=s,S=o.value===a.getActive();return n("a",{class:p({select:S,disabled:g}),onClick:e},[n(x,{dot:b,content:f,class:p("text")},{default:()=>[t.title?t.title():v]})])}}});const F=d(E);export{q as S,F as a};