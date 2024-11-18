const rows = 5;
const cols = 5;
const gameBoard = document.getElementById('game-board');

// Initialize the game board
function initializeBoard() {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleSquare(i));
        gameBoard.appendChild(square);
    }
    randomizeBoard();
}

// Toggle the state of a square and its neighbors
function toggleSquare(index) {
    const row = Math.floor(index / cols);
    const col = index % cols;

    toggleSquareAt(row, col);
    toggleSquareAt(row - 1, col); // Top
    toggleSquareAt(row + 1, col); // Bottom
    toggleSquareAt(row, col - 1); // Left
    toggleSquareAt(row, col + 1); // Right

    checkWin();
}

function toggleSquareAt(row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
        const index = row * cols + col;
        const square = gameBoard.children[index];
        square.classList.toggle('is-off');
    }
}

// Randomize the board configuration
function randomizeBoard() {
    const numberOfClicks = Math.floor(Math.random() * (rows * cols));
    for (let i = 0; i < numberOfClicks; i++) {
        const randomIndex = Math.floor(Math.random() * (rows * cols));
        toggleSquare(randomIndex);
    }
}

// Check if the game is solved
function checkWin() {
    const allSquares = document.querySelectorAll('.square');
    const allOff = Array.from(allSquares).every(square => square.classList.contains('is-off'));
    if (allOff) {
        window.alert('You win!');
    }
}

// Initialize the game on page load
document.addEventListener('DOMContentLoaded', initializeBoard);
