import{U as d}from"./index.b5016910.js";import{B as z}from"./index.77211d3e.js";import{u as V}from"./use-translate.33b17133.js";import{T as r}from"./function-call.af72b74c.js";import{z as y,C as n,r as w,o as A,a as U,e as t,w as i,A as e,h as _,t as b,d as B,F as D}from"./vue-libs.7d3cdfcb.js";import"./with-install.d00852e2.js";import"./use-expose.e553b263.js";import"./index.0a08d1ef.js";import"./function-call.b7bdcce9.js";import"./mount-component.4efac25f.js";import"./constant.80c6de18.js";import"./interceptor.926f5054.js";import"./index.b2b5faa5.js";import"./use-touch.ac1b49d9.js";import"./on-popup-reopen.aa8649f1.js";import"./utils.45a8bdb5.js";import"./index.ba1bb458.js";import"./useChildren.0ca62895.js";import"./useParent.9724c87d.js";import"./index.9f327319.js";import"./index.71250a43.js";import"./use-lazy-render.cbcc62ed.js";import"./index.89fdf2f6.js";import"./index.4f816a4f.js";import"./index.58fe8242.js";import"./index.02ce6e6d.js";import"./use-route.239dc794.js";const S={class:"preview-cover van-ellipsis"},se=y({setup(T){const u=V({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewCover:"Preview Cover",customPreviewImage:"Custom single prevew image",deleteMessage:"Before Delete"}}),p=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/tree.jpg"}]),m=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),f=n([]),c=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),v=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/sand.jpg",deletable:!0,beforeDelete:()=>{r(u("deleteMessage"))}},{url:"https://img.yzcdn.cn/vant/tree.jpg",deletable:!0,imageFit:"contain",previewSize:120}]),g=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:u("uploading")},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:u("failed")}]),F=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",file:{name:u("imageName")}}]),x=o=>o.type!=="image/jpeg"?(r(u("invalidType")),!1):!0,j=(o,a)=>{console.log(o,a)},E=o=>{o.status="uploading",o.message=u("uploading"),setTimeout(()=>{o.status="failed",o.message=u("failed")},1e3)},C=(o,a)=>{console.log(o,a),r(u("overSizeTip"))};return(o,a)=>{const s=w("demo-block");return A(),U(D,null,[t(s,{title:e(u)("basicUsage")},{default:i(()=>[t(e(d),{"after-read":j})]),_:1},8,["title"]),t(s,{title:e(u)("preview")},{default:i(()=>[t(e(d),{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value=l),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("status")},{default:i(()=>[t(e(d),{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=l=>g.value=l),"after-read":E},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("maxCount")},{default:i(()=>[t(e(d),{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=l=>m.value=l),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("maxSize")},{default:i(()=>[t(e(d),{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=l=>c.value=l),multiple:"","max-size":500*1024,onOversize:C},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customUpload")},{default:i(()=>[t(e(d),null,{default:i(()=>[t(e(z),{type:"primary",icon:"plus"},{default:i(()=>[_(b(e(u)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),t(s,{title:e(u)("previewCover")},{default:i(()=>[t(e(d),{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=l=>F.value=l)},{"preview-cover":i(({file:l})=>[B("div",S,b(l.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("beforeRead")},{default:i(()=>[t(e(d),{modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=l=>f.value=l),"before-read":x},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("disabled")},{default:i(()=>[t(e(d),{"after-read":j,disabled:""})]),_:1},8,["title"]),t(s,{title:e(u)("customPreviewImage")},{default:i(()=>[t(e(d),{modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=l=>v.value=l),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{se as default};