import{h as r,p}from"./hooks.module.c1775b87.js";import{o as e}from"./jsxRuntime.module.5efcb3d3.js";import"./preact.module.ac6080a5.js";function h({className:t=""}){return e("div",{className:["relative h-10 w-10",t].join(" "),children:[e("div",{className:["absolute","bg-neutral-500","rounded-full","animate-[pulse_1s_infinite_100ms]","h-[16%]","w-[16%]","top-[42%]","left-[16%]"].join(" ")}),e("div",{className:["absolute","bg-neutral-500","rounded-full","animate-[pulse_1s_infinite_300ms]","h-[16%]","w-[16%]","top-[42%]","left-[42%]"].join(" ")}),e("div",{className:["absolute","bg-neutral-500","rounded-full","animate-[pulse_1s_infinite_500ms]","h-[16%]","w-[16%]","top-[42%]","left-[68%]"].join(" ")})]})}function _({src:t,alt:d,height:l,width:a,fade:n=!0,loadingIcon:o=!0,rounded:u=!0}){const[s,c]=r(!1),[i,m]=r(!1),f=()=>{m(!0)};return p(()=>{c(!0)},[]),e("div",{class:"relative",children:[e("div",{class:`
        ${n?"transition-all duration-1000":""} ${i?"opacity-100":"opacity-0"}`,style:{height:`${l}px`,width:a?`${a}px`:"auto"},children:e("img",{class:`
          ${u?"rounded-3xl":""}`,src:t,alt:d??"",height:l,width:a??"auto",onLoad:f,loading:"lazy",decoding:"async"})}),e("div",{class:`
        absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center 
        ${n?"transition-all duration-1000":""} ${o&&s&&!i?"delay-500":""} ${o&&s&&!i?"opacity-100":"opacity-0"}
      `,children:e(h,{})})]})}export{_ as default};
