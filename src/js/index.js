import '../scss/style.scss';
import { Game } from './game';
import {
  renderResult,
  clearResults,
  buttonsIndicateEndGame,
  restoreButtonsInitialLook,
  saveScore,
  renderOverallScore
} from './ui';

const currentScore = {
  user: 0,
  computer: 0
};

document.addEventListener('click', (evt) => {
  if (evt.target.closest('[data-game]') && game.areRoundsLeft()) {
    restoreButtonsInitialLook();
    const button = evt.target.closest('[data-game]');
    game.makeRound(button.getAttribute('data-game'));
    renderResult(game.getRoundData());
    saveScore(game.getCurrentWinner(), currentScore);

    if (!game.areRoundsLeft()) {
      renderOverallScore(currentScore.user, currentScore.computer);
      buttonsIndicateEndGame();
      currentScore.user = 0;
      currentScore.computer = 0;
    }
  } else if (evt.target.id === 'btn-reset') {
    restoreButtonsInitialLook();
    game.resetGame();
    clearResults();
  }
});

const game = new Game();
