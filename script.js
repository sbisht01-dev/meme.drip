window.onload = function () {
let herotext = document.querySelector(".txt");
let rimg = document.querySelector("#rimg");
let limg = document.querySelector("#limg");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  herotext.style.marginTop = value * 1.2 + "px";
  console.log(value);

});
}
