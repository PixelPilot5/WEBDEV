const gameboard = (function gameboard() {
  let gameboardarray = ['', '', '', '', '', '', '', '', ''];
  const placemarker = (marker, index) => {
    gameboardarray[index] = marker;
    return gameboardarray;
  }

  const getgameboardrarray = () => {
    return gameboardarray;
  }
  return { placemarker, getgameboardrarray };
})();

function createPlayer(name) {

  return { name };
}

const gamecontroller = (function gamecontroller() {


  let roundnumber = 0;
  const getroundnumber = () => roundnumber;
  const giveroundnumber = () => { roundnumber++; };

  const activeplayer = () => {
    if (roundnumber % 2 == 0) {
      return "o";
    } else {
      return "x";
    }
  };

  const wincondition = () => {
    const board = gameboard.getgameboardrarray();

    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winConditions.some(combination => {
      const [a, b, c] = combination;
      return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });

  }

  return { getroundnumber, giveroundnumber, activeplayer, wincondition };


})();
let player1 = createPlayer(prompt("enter player 1 name"));
let player2 = createPlayer(prompt("enter player 2 name"));

while (gamecontroller.getroundnumber() < 9) {
  console.log(gameboard.getgameboardrarray());
  let a = prompt("enter the index");
  if (gameboard.getgameboardrarray()[a] == "x" || gameboard.getgameboardrarray()[a] == "o") {
    console.log("already filled");
    continue;
  }
  gameboard.placemarker(gamecontroller.activeplayer(), a);
  if (gamecontroller.wincondition()) {
    console.log(gameboard.getgameboardrarray());

    if (gamecontroller.activeplayer() == 'o') {
      console.log(player1.name, " wins");
    } else {
      console.log(player2.name, " wins");
    }
    break;
  }
  gamecontroller.giveroundnumber();



}
if (!gamecontroller.wincondition()) {
  console.log(gameboard.getgameboardrarray());
  console.log("draw");
}