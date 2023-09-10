import{o as t}from"./jsxRuntime.module.1b1126d6.js";import"./preact.module.4d513d4a.js";function d({title:o,description:s,imagePath:l,backgroundColorPalette:n,onClick:r}){const e=()=>t("div",{class:`
        relative border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl
        hover:bg-zinc-200 dark:hover:bg-zinc-800
        h-20 w-60 max-w-[80vw]
        sm:h-40
        overflow-hidden
      `,children:[t("img",{class:`
              absolute
              -bottom-1 -right-1 h-auto w-14
              sm:-bottom-4 sm:-right-4 sm:h-auto sm:w-28
              object-contain
            `,src:l}),t("div",{class:`
          absolute
          top-0 left-0 w-40 pl-4 pt-2
          sm:top-0 sm:left-0 sm:w-40 sm:pl-4 sm:pt-4
        `,children:[t("span",{class:"block text-xl sm:text-2xl font-bold",children:o}),t("span",{class:"block text-lg sm:text-xl font-bold",children:s})]})]});return typeof r=="string"?t("a",{class:"block",href:r,children:e()}):t("button",{class:"block",onClick:r,children:e()})}export{d as default};
