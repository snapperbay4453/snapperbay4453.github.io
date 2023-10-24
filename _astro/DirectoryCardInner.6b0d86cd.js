import{o as r}from"./jsxRuntime.module.5efcb3d3.js";import s from"./ImageFader.d29dddd4.js";import"./preact.module.ac6080a5.js";import"./hooks.module.c1775b87.js";function d({children:o,onClick:e}){const t=()=>r("div",{class:`
          relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl
          hover:bg-zinc-200 dark:hover:bg-zinc-800
          cursor-pointer
          overflow-hidden
        `,children:o});return typeof e=="string"?r("a",{class:"block",href:e,children:t()}):r("button",{class:"block",onClick:e,children:t()})}function m({title:o,description:e,imagePath:t,backgroundColorPalette:n,onClick:l}){return r(d,{onClick:l,children:r("div",{class:`
        h-20 w-60 max-w-[80vw]
        sm:h-40
      `,children:[r("div",{class:`
            block sm:hidden
            absolute
            -bottom-1 -right-1 h-auto w-14
          `,children:r(s,{src:t??"",height:52,rounded:!1})}),r("div",{class:`
            hidden sm:block
            absolute
            sm:-bottom-2 sm:-right-2 sm:h-auto sm:w-28
          `,children:r(s,{src:t??"",height:104,rounded:!1})}),r("div",{class:`
          absolute
          top-0 left-0 w-40 pl-4 pt-2
          sm:top-0 sm:left-0 sm:w-40 sm:pl-4 sm:pt-4
        `,children:[r("span",{class:"block text-xl sm:text-2xl font-bold break-keep",children:o}),r("span",{class:"block text-lg sm:text-xl font-bold break-keep",children:e})]})]})})}export{m as default};
