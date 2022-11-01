var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fans.addEventListener("mouseleave", function () {
  fans.innerText = "???";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

var themeSwitch = document.querySelector("#toggle");
var body = document.querySelector("body");
var ball = document.querySelector(".ball");
var title = document.querySelector("h1");

themeSwitch.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    title.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    title.innerText = "Party Quincy";
  }
});
