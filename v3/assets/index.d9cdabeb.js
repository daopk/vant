import{c as h,e as v,p as P}from"./use-translate.33b17133.js";import{n as p,b as G,t as j,w as _}from"./with-install.d00852e2.js";import{u as f}from"./use-expose.e553b263.js";import{z as b,x as k,e as x,B as O,H as S}from"./vue-libs.7d3cdfcb.js";import{u as w}from"./useChildren.0ca62895.js";import{u as C}from"./index.02ce6e6d.js";import{c as y,C as B}from"./Checker.eacf7118.js";import{u as E}from"./useParent.9724c87d.js";const[V,z]=h("checkbox-group"),A={max:p,disabled:Boolean,iconSize:p,direction:String,modelValue:G(),checkedColor:String},g=Symbol(V);var q=b({name:V,props:A,emits:["change","update:modelValue"],setup(a,{emit:s,slots:l}){const{children:c,linkChildren:i}=w(g),t=e=>s("update:modelValue",e),u=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:r,skipDisabled:d}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&d?o.checked.value:r!=null?r:!o.checked.value:!1).map(o=>o.name);t(n)};return k(()=>a.modelValue,e=>s("change",e)),f({toggleAll:u}),C(()=>a.modelValue),i({props:a,updateValue:t}),()=>{var e;return x("div",{class:z([a.direction])},[(e=l.default)==null?void 0:e.call(l)])}}});const[H,K]=h("checkbox"),N=v({},y,{bindGroup:j});var $=b({name:H,props:N,emits:["change","update:modelValue"],setup(a,{emit:s,slots:l}){const{parent:c}=E(g),i=e=>{const{name:r}=a,{max:d,modelValue:m}=c.props,n=m.slice();if(e)!(d&&n.length>=d)&&!n.includes(r)&&(n.push(r),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(r);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},t=O(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),u=(e=!t.value)=>{c&&a.bindGroup?i(e):s("update:modelValue",e)};return k(()=>a.modelValue,e=>s("change",e)),f({toggle:u,props:a,checked:t}),C(()=>a.modelValue),()=>x(B,S({bem:K,role:"checkbox",parent:c,checked:t.value,onToggle:u},a),P(l,["default","icon"]))}});const J=_($);export{J as C,q as _};