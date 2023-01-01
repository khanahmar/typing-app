async function gettingText() {
  const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
  const response = await fetch(RANDOM_QUOTE_API_URL);
  const data = await response.json();
  return (text = data.content);
}

const inp = document.getElementById("typing");
const quoteDisplayElement = document.getElementById("texts");

let splitText = text.split("");
console.log(splitText);
splitText.forEach((char) => {
  let spanEl = document.createElement("span");
  spanEl.innerText = char;
  quoteDisplayElement.appendChild(spanEl);
});

console.log(quoteDisplayElement);

inp.addEventListener("input", (e) => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = inp.value.split("");

  console.log(arrayQuote);
  console.log(arrayValue);

  let correct = true;
  arrayQuote.forEach((charSpan, index) => {
    const char = arrayValue[index];
    if (char == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      correct = false;
    } else if (char == charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
    } else {
      charSpan.classList.remove("correct");
      charSpan.classList.add("incorrect");
      correct = false;
    }
  });
  if (correct) {
    inp.value = "";
  }
});
