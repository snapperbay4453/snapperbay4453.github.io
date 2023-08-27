import { renderToString } from "preact-render-to-string";
import { createContext } from "preact";
import "preact/hooks";
import { jsx, jsxs } from "preact/jsx-runtime";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const Context = createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
const PageShell$1 = "";
function PageShell({
  pageContext,
  children
}) {
  return jsxs(PageContextProvider, {
    pageContext,
    children: [jsx(Header, {
      url: pageContext.urlPathname
    }), jsx("main", {
      children
    })]
  });
}
function Header({
  url
}) {
  return jsx("header", {
    children: jsxs("nav", {
      children: [jsx("a", {
        href: "/",
        class: url == "/" && "active",
        children: "Home"
      }), jsx("a", {
        href: "/404",
        class: url == "/404" && "active",
        children: "404"
      })]
    })
  });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = renderToString(jsx(PageShell, {
    pageContext,
    children: jsx(Page, {
      ...pageProps
    })
  }));
  const {
    documentProps
  } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR + Preact";
  const desc = documentProps && documentProps.description || "Preact app with Vite and vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="color-scheme" content="light dark" />
			<meta name="description" content="${desc}" />
			<title>${title}</title>
		</head>
		<body>
			<div id="app">${dangerouslySkipEscape(pageHtml)}</div>
		</body>
		</html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
