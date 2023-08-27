import { jsxs, jsx } from "preact/jsx-runtime";
const preactLogo = "/assets/static/preact.48177e6f.svg";
const style = "";
function Page() {
  return jsxs("div", {
    children: [jsx("a", {
      href: "https://preactjs.com",
      target: "_blank",
      children: jsx("img", {
        src: preactLogo,
        alt: "Preact logo",
        height: "160",
        width: "160"
      })
    }), jsx("h1", {
      children: "Get Started building Vite-powered Preact Apps "
    }), jsxs("section", {
      children: [jsx(Resource, {
        title: "Learn Preact",
        description: "If you're new to Preact, try the interactive tutorial to learn important concepts",
        href: "https://preactjs.com/tutorial"
      }), jsx(Resource, {
        title: "Differences to React",
        description: "If you're coming from React, you may want to check out our docs to see where Preact differs",
        href: "https://preactjs.com/guide/v10/differences-to-react"
      }), jsx(Resource, {
        title: "Learn Vite",
        description: "To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation",
        href: "https://vitejs.dev"
      })]
    })]
  });
}
function Resource(props) {
  return jsxs("a", {
    href: props.href,
    target: "_blank",
    class: "resource",
    children: [jsx("h2", {
      children: props.title
    }), jsx("p", {
      children: props.description
    })]
  });
}
export {
  Page
};
