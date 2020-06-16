import h3 from "./app";
import pnpm from "./assets/pnpm.png";
import "./app.css";

const h1 = document.createElement("h1");
h1.innerHTML = "Hello world";
const root = document.getElementById("root");
root.appendChild(h1);
root.appendChild(h3());

const img = document.createElement("img");
img.setAttribute("class", "svg");
img.setAttribute("src", pnpm);
img.setAttribute("alt", "pnpm logo");

root.appendChild(img);
