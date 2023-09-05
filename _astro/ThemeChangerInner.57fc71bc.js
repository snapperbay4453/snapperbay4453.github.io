import{h as n,p as g}from"./hooks.module.6eb5c72e.js";import{o as r}from"./jsxRuntime.module.c6f75409.js";import{k as p}from"./preact.module.346aa314.js";function x({children:t,onClick:e}){return typeof e=="string"?r("a",{class:"flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-4 rounded-full text-2xl",href:e,children:t}):r("button",{class:"flex justify-center items-center gap-1 text-white bg-indigo-500 hover:bg-indigo-400 px-2 py-2 rounded-full text-2xl",onClick:e,children:t})}const b=()=>{let t=navigator.userAgent,e;return t.match(/samsung/i)?e="Samsung":t.match(/edg/i)?e="Edge":t.match(/chrome|chromium|crios/i)?e="Chrome":t.match(/firefox|fxios/i)?e="Firefox":t.match(/safari/i)?e="Safari":t.match(/opr\//i)?e="Opera":t.match(/android/i)?e="Android":t.match(/iphone/i)?e="iPhone":e="Unknown",e},i=["auto","light","dark"],k=()=>{localStorage.theme==="auto"||!("theme"in localStorage)?window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"):localStorage.theme==="dark"?document.documentElement.classList.add("dark"):localStorage.theme==="light"&&document.documentElement.classList.remove("dark")},c=t=>{switch(t){case"dark":localStorage.theme="dark";break;case"light":localStorage.theme="light";break;case"auto":default:localStorage.theme="auto";break}k()},m=()=>localStorage.theme;function T(){const[t,e]=n(!1),[s,l]=n(m()),[d,u]=n("Unknown"),h=()=>{const a=Math.max(i.findIndex(f=>f===s),0),o=i[(a+1)%i.length];l(o),c(o)};return g(()=>{const a=b();u(a);const o=m();l(o),c(o),e(!0)},[]),r(p,{children:t&&d!=="Samsung"&&r(x,{onClick:()=>h(),children:(()=>{switch(s){case"auto":return r("i",{class:"icon-[material-symbols--night-sight-auto-outline-rounded] fill-current"});case"light":return r("i",{class:"icon-[material-symbols--sunny-outline-rounded] fill-current"});case"dark":return r("i",{class:"icon-[material-symbols--mode-night-outline-rounded] fill-current"});default:return r("i",{class:"icon-[material-symbols--fiber-manual-record-outline] fill-current"})}})()})})}export{T as default};
