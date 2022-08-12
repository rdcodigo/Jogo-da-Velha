
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
        let gameOverPage = document.getElementById("gameOverPage");
        gameOverPage.innerHTML = `
            <img src="./images/${jogadores[playerTime]}.gif" alt="">

            <p id="gameOverMsg">
            Fim de jogo, os vencedores foram os ${jogadores[playerTime]}
            </p>

            <div onclick="restart()"  class="button"> JOGAR NOVAMENTE </div>

        `;
    }

    if(noWin()){

        let gameOverPage = document.getElementById("gameOverPage");
        gameOverPage.innerHTML = `
            <div>
                <img src="./images/cryMonkey.gif" alt="">
                <img src="./images/cryLeopard.gif" alt="">
            </div>
            <p id="gameOverMsg">
            Fim de jogo, ninguem venceu.
            </p>

            <div onclick="restart()"  class="button"> JOGAR NOVAMENTE </div>
        `;

        gameOverPage.style.display = "flex";
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
    plays = 0;

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