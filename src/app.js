import "./app.css";

export default () => {
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "text");
  h3.innerHTML = "Hello world";
  return h3;
};