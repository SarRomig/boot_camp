/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */



 class Player {
  constructor (id, color) {
    this.id = id;
    this.color = color;
  }
  //should have a constructor that takes a string color name (eg, “orange” or “#ff3366”) and store that on the player instance. The Game should keep track of the current player object, not the current player number. Update the code so that the player pieces are the right color for them, rather than being hardcoded in CSS as red or blue
  //form has id's of p1-color and p2-color
  //p1-color.value stored in an object (player.p1color.value)
  }

class Game { 
  constructor (height, width) { //what else needs to be automatically here for every game? the players?
    this.height = height; //why can't we just set the width/height initially?
    this.width = width;
    let colorP1 = document.querySelector("#p1-color").value;
    let colorP2 = document.querySelector("#p2-color").value;
    this.currPlayer = new Player (1, colorP1);
    this.otherPlayer = new Player (2, colorP2);
    this.gameOver = false; //add property for when game is over and make it so you can't continue to make moves after game has ended
    this.makeBoard();
    this.makeHtmlBoard();
  }

  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
      const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');

    top.addEventListener('click', this.handleClick.bind(this)); 

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);

      for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
      board.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);
  
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
    
  endGame(msg) {
    alert(msg);
    //top.removeEventListener("click", this.handleClick); this functionality isn't accurate in the sample exercise
  }

  handleClick(evt) {
    const x = +evt.target.id;
      const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    this.board[y][x] = this.currPlayer.id;
    this.placeInTable(y, x);
    
    if (this.checkForWin()) {
      this.gameOver = true;
      return this.endGame(`Player ${this.currPlayer.id} won!`);
    }
    
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    this.swapPlayers();

  if (this.endGame == false) {
    return;
  }

  }

  swapPlayers() {
    let temp = this.currPlayer;
    this.currPlayer = this.otherPlayer;
    this.otherPlayer = temp;
  }


  checkForWin() {
    const _win = (cells) => {
 
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer.id
      );
    }
  
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}


    document.querySelector("#start-btn").addEventListener("click", () => {
      new Game(6,7);
    });
  