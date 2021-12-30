const resultList = document.querySelector('#result-list');
const resetBtn = document.querySelector('#btn-reset');
const gameBtns = [...document.querySelectorAll('.game__button')];
const scoreUser = document.querySelector('#score-user');
const scoreComp = document.querySelector('#score-comp');

function renderResult(result) {
  const li = document.createElement('li');
  li.innerText = `Round ${result.round}, ${result.user} vs ${result.computer}, ${result.string}!`;
  resultList.append(li);
}

function clearResults() {
  while (resultList.firstChild) {
    resultList.removeChild(resultList.lastChild);
  }
}

function buttonsIndicateEndGame() {
  if (!resetBtn.classList.contains('game__reset--active')) {
    resetBtn.classList.add('game__reset--active');
  }
  gameBtns.forEach((item) => {
    if (!item.classList.contains('game__button--disabled')) {
      item.classList.add('game__button--disabled');
    }
  });
}

function restoreButtonsInitialLook() {
  if (resetBtn.classList.contains('game__reset--active')) {
    resetBtn.classList.remove('game__reset--active');
  }
  gameBtns.forEach((item) => {
    if (item.classList.contains('game__button--disabled')) {
      item.classList.remove('game__button--disabled');
    }
  });
}

function saveScore(winner, scoreObject) {
  if (winner === 'user') {
    scoreObject.user += 1;
  } else if (winner === 'computer') {
    scoreObject.computer += 1;
  }
}

function renderOverallScore(user, comp) {
  if (user > comp) {
    scoreUser.innerText = +scoreUser.innerText + 1;
  } else if (user < comp) {
    scoreComp.innerText = +scoreComp.innerText + 1;
  }
}

export {
  renderResult,
  clearResults,
  buttonsIndicateEndGame,
  restoreButtonsInitialLook,
  saveScore,
  renderOverallScore
};
