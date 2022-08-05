
document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        squares = document.querySelectorAll(".square");
        squares.forEach(
            (square)=>{
                square.addEventListener(
                    'click',
                    handleClick
                );
            }
        )
    }
)

function handleClick (event){
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(
            ()=>{
                alert("O jogo acabou, os vencedores foram os " + jogadores[playerTime])
            }
        ), 1500;
    }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


function restart(){
    let squares = document.querySelectorAll(".square");

    board = ['','','','','','','','',''];
    playerTime = 0;
    jogadores = ["Macacos", "Leopardos"];
    symbols = ['o', 'x'];
    gameOver = false;

    squares.forEach(
        (square)=>{
            square.innerHTML = '';
        }
    )
}