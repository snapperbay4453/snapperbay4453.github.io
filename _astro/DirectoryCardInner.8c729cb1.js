import{o as r}from"./jsxRuntime.module.5efcb3d3.js";import"./preact.module.ac6080a5.js";function l({children:o,onClick:t}){const e=()=>r("div",{class:`
          relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl
          hover:bg-zinc-200 dark:hover:bg-zinc-800
          cursor-pointer
          overflow-hidden
        `,children:o});return typeof t=="string"?r("a",{class:"block",href:t,children:e()}):r("button",{class:"block",onClick:t,children:e()})}function d({title:o,description:t,imagePath:e,backgroundColorPalette:n,onClick:s}){return r(l,{onClick:s,children:r("div",{class:`
        h-20 w-60 max-w-[80vw]
        sm:h-40
      `,children:[r("img",{class:`
            absolute
            -bottom-1 -right-1 h-auto w-14
            sm:-bottom-4 sm:-right-4 sm:h-auto sm:w-28
            object-contain
          `,src:e}),r("div",{class:`
          absolute
          top-0 left-0 w-40 pl-4 pt-2
          sm:top-0 sm:left-0 sm:w-40 sm:pl-4 sm:pt-4
        `,children:[r("span",{class:"block text-xl sm:text-2xl font-bold",children:o}),r("span",{class:"block text-lg sm:text-xl font-bold",children:t})]})]})})}export{d as default};
