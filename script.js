let btn = document.querySelector(".searchlogo");
let searchbox1 = document.querySelector(".searchbox1");
let cross = document.querySelector("#cross");
let cross2 = document.querySelector("#cross2");
btn.addEventListener("click", function run() {
  searchbox1.style.display = "block";
  btn.innerHTML = '<i class="far fa-times-circle"></i>';
});
cross2.addEventListener("click", function run() {
  searchbox1.style.display = "none";
  btn.innerHTML = '<i class="fas fa-search" id="cross2"></i>';
});
let login = document.querySelector(".login");
let loginbox = document.querySelector(".loginbox");
let logcross = document.querySelector(".loginbox i");
let submit = document.querySelector(".submit");
let logsign = document.querySelector(".logsign");
login.addEventListener("click", function run() {
  loginbox.style.display = "block";
});
logcross.addEventListener("click", function run() {
  loginbox.style.display = "none";
});
submit.addEventListener("click", function run() {
  loginbox.style.display = "none";
  logsign.innerHTML = '<i class="fas fa-user-circle"></i>';
});
let clickhere = document.querySelector("#clickhere");
let bngla = document.querySelector(".bngla");
let ok = document.querySelector(".ok");

clickhere.addEventListener("click", function run() {
  bngla.style.display = "block";
  loginbox.style.display = "none";
});
ok.addEventListener("click", function run() {
  bngla.style.display = "none";
});
let menu = document.querySelector(".menu");
let menubox = document.querySelector(".menubox");
menu.addEventListener("click", function run() {
  menubox.style.display = "block";
});
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");
let g = document.querySelector("#g");
a.addEventListener("click", function run() {
  menubox.style.display = "none";
});
b.addEventListener("click", function run() {
  menubox.style.display = "none";
});
c.addEventListener("click", function run() {
  menubox.style.display = "none";
});
d.addEventListener("click", function run() {
  menubox.style.display = "none";
});
e.addEventListener("click", function run() {
  menubox.style.display = "none";
});
f.addEventListener("click", function run() {
  menubox.style.display = "none";
});
g.addEventListener("click", function run() {
  menubox.style.display = "none";
});
window.onscroll = () => {
  menubox.style.display = "none";
};
