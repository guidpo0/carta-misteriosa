const createLetterBtn = document.querySelector('#criar-carta');
const letterTextInput = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');

function createLetter() {
  generatedLetter.innerHTML = '';
  if (letterTextInput.value.trim().length === 0) {
    const newSpan = document.createElement('span');
    newSpan.innerText = 'Por favor, digite o conteúdo da carta.';
    generatedLetter.appendChild(newSpan);
  } else {
    const wordsArray = letterTextInput.value.split(' ');
    for (let index = 0; index < wordsArray.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = wordsArray[index].concat(' ');
      generatedLetter.appendChild(newSpan);
    }
  }
}

[createLetterBtn].forEach((item) => {
  item.addEventListener('click', () => {
    if (item === createLetterBtn) {
      createLetter();
    }
  });
});
