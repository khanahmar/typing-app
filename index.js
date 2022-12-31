const quot = document.getElementsByClassName(".texts");
const inp = document.getElementById("typing");

inp.addEventListener("input", (char, index) => {
  console.log(char);
  console.log(char[index]);
});
