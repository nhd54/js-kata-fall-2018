"use strict";

addEventListener("DOMContentLoaded", hideModal);

document.querySelector(".Details1").addEventListener("click", showModal);
document.querySelector(".Details2").addEventListener("click", showModal);
document.querySelector(".Details3").addEventListener("click", showModal);
document.querySelector(".Details4").addEventListener("click", showModal);
document.querySelector(".Details5").addEventListener("click", showModal);
document.querySelector("#closebutton").addEventListener("click", hideModal);

function showModal() {
  document.querySelector("#modal_container").classList.remove("hidden");
  console.log("Show modal");
}

function hideModal() {
  document.querySelector("#modal_container").classList.add("hidden");
  console.log("Hide modal");
}

// expected output: "The index of the first "dog" from the beginning is 41"
