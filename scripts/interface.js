
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
                let gameOverPage = document.getElementById("gameOverPage");
                gameOverPage.innerHTML = `

                <img src="./images/${jogadores[playerTime]}.gif" alt="">

                <p id="gameOverMsg">
                Fim de jogo, os vencedores foram os ${jogadores[playerTime]}
                </p>

                <div onclick="restart()"  class="button"> JOGAR NOVAMENTE </div>

                `;
            }
        ), 2000;
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

    let gameOverPage = document.getElementById("gameOverPage");
    gameOverPage.style.display = "none";
    gameOverPage.innerHTML = ``;
    return true;
}