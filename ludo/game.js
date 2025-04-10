document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');
  const rollDiceBtn = document.getElementById('rollDiceBtn');
  const diceResult = document.getElementById('diceResult');

  // Generate Ludo board
  for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    board.appendChild(square);
  }

  // Roll Dice functionality
  rollDiceBtn.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `You rolled a ${roll}`;
    // Add game logic for moving pieces based on the roll
  });
});
