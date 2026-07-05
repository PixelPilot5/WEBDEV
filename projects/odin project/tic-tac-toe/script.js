const gameboard = (function gameboard() {
  let gameboardarray = ['', '', '', '', '', '', '', '', ''];
  const placemarker = (marker, index) => {
    gameboardarray[index] = marker;
    return gameboardarray;
  }

  const getgameboardrarray = () => {
    return gameboardarray;
  }

  const resetBoard = () => {
    gameboardarray = ['', '', '', '', '', '', '', '', ''];
  };


  return { placemarker, getgameboardrarray ,resetBoard};
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

  const resetGame = () => {
    roundnumber = 0;
  };

  return { getroundnumber, giveroundnumber, activeplayer, wincondition,resetGame };


})();
let player1 = createPlayer(prompt("enter player 1 name"));
let player2 = createPlayer(prompt("enter player 2 name"));
let names=document.querySelectorAll(".playersname div h2");
names[0].textContent="Player 1 ("+player1.name+") : O";
names[1].textContent="Player 2 ("+player2.name+") : X";
function playround(a){
  if (gamecontroller.getroundnumber() >= 9 || gamecontroller.wincondition()) return;


    if (gameboard.getgameboardrarray()[a] == "x" || gameboard.getgameboardrarray()[a] == "o") {
      console.log("already filled");
      return;
    }

    const currentMarker = gamecontroller.activeplayer();
  const currentPlayer = currentMarker === 'o' ? player1 : player2;


    gameboard.placemarker(currentMarker, a);
    displayarray();
    if (gamecontroller.wincondition()) {
      console.log(`${currentPlayer.name} wins`);
      alert(`${currentPlayer.name} wins`);
      return;
    }
    gamecontroller.giveroundnumber();
    
  if (gamecontroller.getroundnumber() === 9) {
    // console.log(gameboard.getgameboardrarray());
    console.log("draw");
    alert("draw");
    return;
  }
}


function displayarray() {
  const boardarray = gameboard.getgameboardrarray();
  for (let i = 0; i < boardarray.length; i++) {
    let cell=document.getElementById(i);
    if(cell) cell.textContent = boardarray[i];
  }
}

let cell = document.querySelectorAll(".cell");
cell.forEach((cell) => {
  cell.addEventListener("click", function () {
    playround(this.id);
  });
});

let restartgame=document.querySelector(".reset");
restartgame.addEventListener("click",function(){
  gameboard.resetBoard();
  gamecontroller.resetGame();
  displayarray();
})

