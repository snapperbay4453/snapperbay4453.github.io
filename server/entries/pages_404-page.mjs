import { jsxs, jsx } from "preact/jsx-runtime";
function Page() {
  return jsxs("section", {
    children: [jsx("h1", {
      children: "404: Not Found"
    }), jsx("p", {
      children: "It's gone :("
    })]
  });
}
export {
  Page
};
