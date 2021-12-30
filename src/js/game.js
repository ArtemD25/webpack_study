class Game {
  constructor() {
    this.round = 0;
    this.numberOfTurns = 3;
    this.options = {
      Rock: {
        name: 'Rock',
        beats: 'Scissors',
        losses: 'Paper'
      },
      Paper: {
        name: 'Paper',
        beats: 'Rock',
        losses: 'Scissors'
      },
      Scissors: {
        name: 'Scissors',
        beats: 'Paper',
        losses: 'Rock'
      }
    };
    this.score = {};
  }
  makeRound(userTurn) {
    if (this.areRoundsLeft()) {
      this.round++;
      const computerTurn = this.getComputerTurn();
      this.score['round' + this.round] = {
        user: userTurn,
        computer: computerTurn,
        result: this.calcResult(userTurn, computerTurn)
      };
    }
  }
  calcResult(userTurn, computerTurn) {
    if (userTurn === computerTurn) {
      return 'draw';
    } else if (this.options[userTurn].beats === computerTurn) {
      return 'user';
    } else if (this.options[userTurn].losses === computerTurn) {
      return 'computer';
    }
  }
  getResultString() {
    const currentRound = this.score['round' + this.round];
    if (currentRound.result === 'user') {
      return 'You`ve WON';
    } else if (currentRound.result === 'computer') {
      return 'You`ve LOST';
    }
    return 'it`s a DRAW';
  }
  areRoundsLeft() {
    return this.round + 1 <= this.numberOfTurns;
  }
  getRoundData() {
    const currentRound = this.score['round' + this.round];
    return {
      round: this.round,
      user: currentRound.user,
      computer: currentRound.computer,
      string: this.getResultString()
    };
  }
  resetGame() {
    this.round = 0;
    this.score = {};
  }
  getComputerTurn() {
    const keysArr = [...Object.keys(this.options)];
    return keysArr[Math.floor(Math.random() * keysArr.length)];
  }
  getCurrentWinner() {
    return this.score['round' + this.round].result;
  }
}

export { Game };
