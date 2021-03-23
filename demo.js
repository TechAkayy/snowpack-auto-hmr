// Test: Update msg from "Original" to "Updated" & click button on index.html, the new msg should be displayed automatically
let demo = { msg: "Original" };
export { demo };

// HMR
// Remove this section to re-test with the snowpack-plugin-hmr-inject plugin
if (import.meta.hot) {
  import.meta.hot.accept(({ module }) => {
    demo = module.demo;
  });
}
