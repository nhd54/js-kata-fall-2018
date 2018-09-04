let str;
let imageName = "#_chapter.txt";
let replace = "1";

function replaceName(name, res) {
  imageName = name;
  replace = res;
}

replaceName("mit_navn_#", "10");

console.log(imageName.replace("#", replace));

//console.log(imageName.replace("#", replace));
