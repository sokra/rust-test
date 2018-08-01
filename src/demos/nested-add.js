import { nested_add } from "../nested/src/lib.rs";

const element = document.createElement("div");
element.innerHTML = `nested_add(2, 3) = ${nested_add(2, 3)}`;

export default element;