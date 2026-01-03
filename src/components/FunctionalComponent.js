import { h } from "vue";
export default function FunctionalComponent(props, context) {
  console.log("FunctionalComponent props:", props);
  console.log("FunctionalComponent context:", context);
  return h("div", { class: "functional-component" });
}
