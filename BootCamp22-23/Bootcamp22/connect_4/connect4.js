/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

 const WIDTH = 7;
 const HEIGHT = 6;
 
 let currPlayer = 1; // active player: 1 or 2
 const board = []; // array of rows, each row is array of cells  (board[y][x]), where is this being fed into?
 
 /** makeBoard: create in-JS board structure:
  *    board = array of rows, each row is array of cells  (board[y][x])
  */
 //
 function makeBoard(rows) {
   // TODO: set "board" to empty HEIGHT x WIDTH matrix array
   //should set the global board variable to be an array of 6 arrays (height), each containing 7 items (width) - board[y][x]
   //for loop to populate subarrays  -- array of arrays
  let arr = [];
  for (let i=0;i<rows;i++) { //rows will reach 6 and stop, so it will end up with 6 rows of empty arrays - can pass in WIDTH constant as rows?
     arr[i] = []; //how to designate 7 empty spaces within this array? or does that not matter until it is in action - seems to be... working?
      arr[i].length = WIDTH;
  }
  return arr;
}
 
 /** makeHtmlBoard: make HTML table and row of column tops. */
 
 function makeHtmlBoard() {
   // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
    const htmlBoard = document.querySelector("#board");
   // TODO: add comment for this code
   const top = document.createElement("tr"); //add new table row with column top id to have a dashed border and hover feature with gold background then adding a click listener to the top row of the table. handleClick will populate the player's piece within the given "x" column
   top.setAttribute("id", "column-top");
   top.addEventListener("click", handleClick);

   for (let x = 0; x < WIDTH; x++) { 
     const headCell = document.createElement("td");
     headCell.setAttribute("id", x);
     top.append(headCell);
   }
   htmlBoard.append(top); //physically adding top row to htmlBoard element
 
   // TODO: add comment for this code
   for (let y = 0; y < HEIGHT; y++) { //If height = 6, this first for loop adds 6 new table rows
     const row = document.createElement("tr");
     for (let x = 0; x < WIDTH; x++) { // this second for loop sets the cells into the table row as td's with the y,x attribute which will populate into findSpotForCol
       const cell = document.createElement("td");
       cell.setAttribute("id", `${y}-${x}`);
       row.append(cell); //physically adds the new cells to each table row, 7 across because width = 7;
     }
     htmlBoard.append(row); //physically adds the new rows, 7 across, to the htmlBoard element
   }
 }
 
 /** findSpotForCol: given column x, return top empty y (null if filled) */
 //somewhere, need to update board variable to reflect htmlBoard -- I think?
 function findSpotForCol(x) {
   // TODO: write the real version of this, rather than always returning 0
   //this will run again for the next x it's given so return null if there are no empty y's
    //use board variable and get id with y,x array information, then add 1 to y to get the top empty y position -- fill board with player1 or player2 so you can check later if diag, horiz, or vert === currPlayer with each turn
    for (let y = HEIGHT - 1; y >= 0; y--) { //subtract 1 to work backwards
      if (!board[y][x]) {
        return y; //looking for y position
      }
    }
   return null; 
 }
 
 /** placeInTable: update DOM to place piece into HTML table of board */
 
 function placeInTable(y, x) {
   // TODO: make a div and insert into correct table cell 
   //create new div and add (toggle?) class based on player1 or player2 to determine color. setAtritribute for .piece and .player1 - to start
   //add div to correct "td" cell in the board. identify correct table cell from findSpotForCol based on id of board then append the new div 
   //need to add color to cell to "set" it as the currPlayer's cell when checking for tie/win


 }
 
 /** endGame: announce game end */
 
 function endGame(msg) {
   // TODO: pop up alert message
   alert(`${currPlayer} wins Connect4!`);
 }
 
 /** handleClick: handle click of column top to play piece */
 
 function handleClick(evt) {
   // get x from ID of clicked cell
   let x = +evt.target.id;
 
   // get next spot in column (if none, ignore click)
   const y = findSpotForCol(x);
   if (y === null) {
     return;
   }
 
   // place piece in board and add to HTML table
   // TODO: add line to update in-memory board
   placeInTable(y, x);
 
   // check for win
   if (checkForWin()) {
     return endGame(`Player ${currPlayer} won!`);
   }
 
   // check for tie
   // TODO: check if all cells in board are filled; if so call endGame
   //if htmlBoard is full, aka # of divs with id of .piece equals however many squares there are WIDTHxHEIGHT -- but we're checking the board constant.
 
   // switch players
   // TODO: switch currPlayer 1 <-> 2
   if (currPlayer == 1) { 
    currPlayer = 2;
      currPlayer.setAttribute(id, "player2");
    }; 
    if (currPlayer == 2) {
     currPlayer = 1;
     currPlayer.setAttribute(id, "player1");
    };
 }
 
 /** checkForWin: check board cell-by-cell for "does a win start here?" */
 
 function checkForWin() {
   function _win(cells) {
     // Check four cells to see if they're all color of current player
     //  - cells: list of four (y, x) cells
     //  - returns true if all are legal coordinates & all match currPlayer
 
     return cells.every(
       ([y, x]) =>
         y >= 0 &&
         y < HEIGHT &&
         x >= 0 &&
         x < WIDTH &&
         board[y][x] === currPlayer
     );
   }
 
   // TODO: read and understand this code. Add comments to help you.
 
   for (let y = 0; y < HEIGHT; y++) {
     for (let x = 0; x < WIDTH; x++) {
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
 
 makeBoard();
 makeHtmlBoard();