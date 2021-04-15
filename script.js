const createLetterBtn = document.querySelector('#criar-carta');
const letterTextInput = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const misteryClass = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotationGroup: ['rotateleft', 'rotateright'],
  inclinationGroup: ['skewleft', 'skewright']
};

function randomArrayPosition(array) {
  const randomPosition = Math.round(Math.random()*(array.length - 1));
  return randomPosition;
}

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
      newSpan.classList.add(misteryClass.styleGroup[randomArrayPosition(misteryClass.styleGroup)]);
      newSpan.classList.add(misteryClass.sizeGroup[randomArrayPosition(misteryClass.sizeGroup)]);
      newSpan.classList.add(misteryClass.rotationGroup[randomArrayPosition(misteryClass.rotationGroup)]);
      newSpan.classList.add(misteryClass.inclinationGroup[randomArrayPosition(misteryClass.inclinationGroup)]);
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
