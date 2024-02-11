const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");


const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "cooooooonste corazón de melón, my san valentín <3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  var musica = document.getElementById("Musica");
  if(musica.paused){
    musica.play();
  }else{
    musica.pause();
  }
  catImg.style.width = `30rem`;
  catImg.style.height = `45rem`;
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "nooooooooooo?",
    "Seguuuuuuuuuura?",
    "Por favoooooor",
    "mmmmmm ok, comprendo",
    "ya odiáme y escupeme",
    "me detestas y me odias con toda tu vida, ok",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `monito-${image}.jpeg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
