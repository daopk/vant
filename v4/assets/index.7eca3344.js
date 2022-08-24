import{c as P,e as y,H as C,p as U,a as _}from"./use-translate.8036e41d.js";import{c as s,w}from"./with-install.6887218d.js";import{s as S,a as x,p as b}from"./utils.fb2a252d.js";import{P as B}from"./index.8f7dbc5a.js";import{A as g,x as c,D as E,y as k,e as a,B as H,r as N,o as M,a as R,w as f,C as n,F as O}from"./vue-libs.a040eeb8.js";import"./Picker.dda88093.js";import"./constant.80c6de18.js";import"./use-expose.1f17c8d6.js";import"./index.e68b0dfb.js";import"./use-touch.ee9512d6.js";const[A]=P("time-picker"),D=y({},S,{minHour:s(0),maxHour:s(23),minMinute:s(0),maxMinute:s(59),minSecond:s(0),maxSecond:s(59),columnsType:{type:Array,default:()=>["hour","minute"]}}),I=g({name:A,props:D,emits:["confirm","cancel","change","update:modelValue"],setup(u,{emit:t,slots:T}){const i=c(u.modelValue),V=E(()=>u.columnsType.map(e=>{const{filter:d,formatter:l}=u;switch(e){case"hour":return x(+u.minHour,+u.maxHour,e,l,d);case"minute":return x(+u.minMinute,+u.maxMinute,e,l,d);case"second":return x(+u.minSecond,+u.maxSecond,e,l,d);default:throw new Error(`[Vant] DatePicker: unsupported columns type: ${e}`)}}));k(i,e=>{C(e,u.modelValue)||t("update:modelValue",e)},{immediate:!0}),k(()=>u.modelValue,e=>{C(e,i.value)||(i.value=e)});const h=(...e)=>t("change",...e),F=(...e)=>t("cancel",...e),v=(...e)=>t("confirm",...e);return()=>a(B,H({modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,columns:V.value,onChange:h,onCancel:F,onConfirm:v},U(u,b)),T)}}),z=w(I),p=z,Y=g({__name:"index",setup(u){const t=_({"zh-CN":{hour:"\u65F6",minute:"\u5206",timeRange:"\u65F6\u95F4\u8303\u56F4",chooseTime:"\u9009\u62E9\u65F6\u95F4",columnsType:"\u9009\u9879\u7C7B\u578B",optionsFilter:"\u8FC7\u6EE4\u9009\u9879",optionsFormatter:"\u683C\u5F0F\u5316\u9009\u9879"},"en-US":{hour:"h",minute:"m",timeRange:"Time Range",chooseTime:"Choose Time",columnsType:"Columns Type",optionsFilter:"Options Filter",optionsFormatter:"Options Formatter"}}),T=c(["12","00"]),i=c(["12","00","00"]),V=c(["12","35"]),h=c(["12"," 00"]),F=c(["12","00"]),v=["hour","minute","second"],e=(l,o)=>l==="minute"?o.filter(r=>Number(r.value)%10===0):o,d=(l,o)=>(l==="hour"&&(o.text+=t("hour")),l==="minute"&&(o.text+=t("minute")),o);return(l,o)=>{const r=N("demo-block");return M(),R(O,null,[a(r,{card:"",title:n(t)("basicUsage")},{default:f(()=>[a(n(p),{modelValue:T.value,"onUpdate:modelValue":o[0]||(o[0]=m=>T.value=m),title:n(t)("chooseTime")},null,8,["modelValue","title"])]),_:1},8,["title"]),a(r,{card:"",title:n(t)("columnsType")},{default:f(()=>[a(n(p),{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=m=>i.value=m),title:n(t)("chooseTime"),"columns-type":v},null,8,["modelValue","title"])]),_:1},8,["title"]),a(r,{card:"",title:n(t)("timeRange")},{default:f(()=>[a(n(p),{modelValue:V.value,"onUpdate:modelValue":o[2]||(o[2]=m=>V.value=m),title:n(t)("chooseTime"),"min-hour":10,"max-hour":20,"min-minute":30,"max-minute":40},null,8,["modelValue","title"])]),_:1},8,["title"]),a(r,{card:"",title:n(t)("optionsFormatter")},{default:f(()=>[a(n(p),{modelValue:F.value,"onUpdate:modelValue":o[3]||(o[3]=m=>F.value=m),title:n(t)("chooseTime"),formatter:d},null,8,["modelValue","title"])]),_:1},8,["title"]),a(r,{card:"",title:n(t)("optionsFilter")},{default:f(()=>[a(n(p),{modelValue:h.value,"onUpdate:modelValue":o[4]||(o[4]=m=>h.value=m),title:n(t)("chooseTime"),filter:e},null,8,["modelValue","title"])]),_:1},8,["title"])],64)}}});export{Y as default};