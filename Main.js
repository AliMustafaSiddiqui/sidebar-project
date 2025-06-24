console.log("JS is connected!");
window.addEventListener("load", function () {
  document.querySelector(".Welcome-box").classList.add("visible");
});
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".side");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
