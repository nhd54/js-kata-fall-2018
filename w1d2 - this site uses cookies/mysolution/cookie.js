document.addEventListener("DOMContentLoaded", cookie);

function cookie() {
  document.querySelector("#slidedown").addEventListener("click", slidedown);
}

function slidedown() {
  document.querySelector(".cookie").classList.add("clicked");
}
