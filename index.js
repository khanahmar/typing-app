const inp = document.getElementById("typing");
const quotDisplay = document.getElementById("texts");

const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";

async function gettingText() {
  const fetched = await fetch(RANDOM_QUOTE_API_URL);
  const response = await fetched.json();
  const text = response.content;
  console.log(text);
  let splitText = text.split("");
  splitText.forEach((char) => {
    const spanEl = document.createElement("span");
    spanEl.innerText = char;
    quotDisplay.appendChild(spanEl);
  });

  cheching();
}

gettingText();

function cheching() {
  inp.addEventListener("input", () => {
    const quotArray = quotDisplay.querySelectorAll("span");
    const inpArray = inp.value.split("");
    let correct = true;
    quotArray.forEach((charSpan, index) => {
      const char = inpArray[index];
      if (char == null) {
        charSpan.classList.remove("correct");
        charSpan.classList.remove("incorrect");
        correct = false;
      } else if (char === charSpan.innerText) {
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
      quotDisplay.innerHTML = "";
      gettingText();
    }
  });
}
