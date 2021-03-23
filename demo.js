// Update msg from "Original" to "Updated" & click button on index.html
let demo = { msg: "Original" };
export { demo };

// HMR
if (import.meta.hot) {
  import.meta.hot.accept(({ module }) => {
    demo = module.demo;
  });
}
