"use strict";
let test;
function displayElement(element) {
  console.log(element.textContent);
}

function listMethods(id, name) {
  // document.querySelectorAll(id + name);
  test = document.querySelectorAll(id + name).forEach(displayElement);
}
listMethods("#", "modify>ul>li");
console.log(test);
listMethods("#", "modify>ul>li");
console.log(test);
listMethods("#", "modify>ul>li");
console.log(test);
// TODO: Create listMethods function
