import{E as c,q as m,P as l,G as b,N as w,R as E,x,A as o}from"./vue-libs.7d3cdfcb.js";import{i as A}from"./utils.45a8bdb5.js";function L(a){var t;c(()=>{a(),m(()=>{t=!0})}),l(()=>{t&&a()})}function M(a,t,i){if(i===void 0&&(i={}),!!A){var{target:r=window,passive:u=!1,capture:d=!1}=i,s,f=n=>{var e=o(n);e&&!s&&(e.addEventListener(a,t,{capture:d,passive:u}),s=!0)},v=n=>{var e=o(n);e&&s&&(e.removeEventListener(a,t,d),s=!1)};b(()=>v(r)),w(()=>v(r)),L(()=>f(r)),E(r)&&x(r,(n,e)=>{v(e),f(n)})}}export{L as o,M as u};