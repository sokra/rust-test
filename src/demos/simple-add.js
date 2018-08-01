import { add } from "../adder/src/lib.rs";

const element = document.createElement("div");
element.innerHTML = `add(2, 3) = ${add(2, 3)}`;

export default element;