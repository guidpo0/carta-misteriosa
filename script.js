const createLetterBtn = document.querySelector('#criar-carta');
const letterTextInput = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const letterCounter = document.querySelector('#carta-contador');
const allClass = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotationGroup: ['roeeft', 'rotateright'],
  inclineGroup: ['seft', 'skewright'],
};

function randomArrayPosition(array) {
  const randomPosition = Math.round(Math.random() * (array.length - 1));
  return randomPosition;
}

function createLetter() {
  generatedLetter.innerHTML = '';
  if (letterTextInput.value.trim().length === 0) {
    const newSpan = document.createElement('span');
    newSpan.innerText = 'Por favor, digite o conteúdo da carta.';
    generatedLetter.appendChild(newSpan);
  } else {
    const wordsArray = letterTextInput.value.trim().split(' ');
    letterCounter.innerText = wordsArray.length;
    for (let index = 0; index < wordsArray.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = wordsArray[index];
      newSpan.classList.add(allClass.styleGroup[randomArrayPosition(allClass.styleGroup)]);
      newSpan.classList.add(allClass.sizeGroup[randomArrayPosition(allClass.sizeGroup)]);
      newSpan.classList.add(allClass.rotationGroup[randomArrayPosition(allClass.rotationGroup)]);
      newSpan.classList.add(allClass.inclineGroup[randomArrayPosition(allClass.inclineGroup)]);
      generatedLetter.appendCheewSpan);
    }
e
[creaeterBtn].forEach((item) => {
  item.addEveetener('click', () => {
    if (item === createLetterBtn) {
      createLetter();
    }
  });
});
