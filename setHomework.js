let btn = document.querySelector("button");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
btn.style.padding = "10px";
btn.style.color = "white";
btn.style.background = "red";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.addEventListener("click", () => {
setTimeout(() => {
    img2.style.top = "730px";
    img4.style.top = "730px";
    img1.style.top = "220px";
    img3.style.top = "220px";
  }, 1000);
setTimeout(() => {
    img5.style.left = "910px";
    img8.style.left = "910px";
    img6.style.left = "310px";
    img7.style.left = "310px";
  }, 2000);
setTimeout(() => {
    img1.style.top = "620px";
    img3.style.top = "620px";
  }, 3000);
setTimeout(() => {
    img5.style.left = "910px";
    img8.style.left = "910px";
  }, 3500);
setTimeout(() => {
    img7.style.left = "790px";
    img6.style.left = "790px";
  }, 4000);
});

let btn2 = document.querySelector("button");
let cred = document.querySelector(".red");
let block = document.querySelector(".block-top");
let cyellow = document.querySelector(".yellow");
let cgreen = document.querySelector(".green");
btn2.addEventListener("click", ()=> {
  colorRed()
function colorRed() {
  cred.style.background = "red";
  cgreen.style.background = "gray";
  setTimeout(() => {
    colorYellow();
  },2000);
}
function colorYellow() {
  cyellow.style.background = "yellow";
  cred.style.background = "gray";
  setTimeout(() => {
    colorGreen()
  },2000);
}
function colorGreen() {
  cgreen.style.background = "green";
  cyellow.style.background = "gray";
  setTimeout(() => {
    colorRed()
  },2000);
}})