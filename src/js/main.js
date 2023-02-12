import "../style/style.css";

const toggleSwitch = document.querySelector("#toggle");
toggleSwitch.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
});
