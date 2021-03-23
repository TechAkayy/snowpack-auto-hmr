import { demo } from "./demo.js";

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("demo").innerHTML = demo.msg;
});
