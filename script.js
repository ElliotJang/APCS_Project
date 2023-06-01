let currentPlayer = 'X';
let moves = 0;
let playerXScore = 0;
let playerOScore = 0;

function playMove(cellNumber) {
  const cell = document.getElementById(`cell${cellNumber}`);
  if (cell.innerHTML === '') {
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    cell.style.cursor = 'default';
    moves++;
    checkWin();
    switchPlayer();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    const cellA = document.getElementById(`cell${a}`).innerHTML;
    const cellB = document.getElementById(`cell${b}`).innerHTML;
    const cellC = document.getElementById(`cell${c}`).innerHTML;

    if (cellA !== '' && cellA === cellB && cellA === cellC) {
      document.getElementById('result-message').textContent = `Player ${cellA} wins!`;
      updateScore(cellA);
      resetBoard();
      break;
    } else if (moves === 9) {
      document.getElementById('result-message').textContent = "It's a draw!";
      resetBoard();
    }
  }
}

function updateScore(winningPlayer) {
  if (winningPlayer === 'X') {
    playerXScore++;
    document.getElementById('playerXScore').textContent = playerXScore;
  } else if (winningPlayer === 'O') {
    playerOScore++;
    document.getElementById('playerOScore').textContent = playerOScore;
  }
}

function resetBoard() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(`cell${i}`);
    cell.innerHTML = '';
    cell.classList.remove('x', 'o');
    cell.style.cursor = 'pointer';
  }

  currentPlayer = 'X';
  moves = 0;

  document.getElementById('result-message').textContent = '';
}


