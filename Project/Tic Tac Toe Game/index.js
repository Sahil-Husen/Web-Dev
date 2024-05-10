const boxes = document.querySelectorAll(".box")
const game_Info = document.querySelector(".gameInfo")
const newGameBtn = document.querySelector(".btn")

let currentPlayer;
let gameGrid;

const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box,index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all"
    })
    newGameBtn.classList.remove('active');
    game_Info.innerText = `Current Player - ${currentPlayer}`
}
initGame();
 function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;
        boxes[index].style.pointerEvents = "none"
        gameGrid[index] = currentPlayer;
        swapTurn();
        checkGameOver();
    }
 }
 
boxes.forEach((box,index)=>{
    box.addEventListener('click' ,()=>{
        handleClick(index)
    })
})

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "o"
    }
    else{
        currentPlayer = "X"
    }
}

function checkGameOver(){
        let answer = "";
       winningPosition((position)=>{)
       })
}

newGameBtn.addEventListener('click', initGame);