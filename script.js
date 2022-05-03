const leftPanel = document.querySelector(".leftPanel")
const rightPanel = document.querySelector('rightPanel')
const usernameInput = document.getElementById('usernameInput')
const startGameBtn = document.getElementById('startGameBtn')
const player1name = document.querySelector(".player1name")
const mainLeft = document.querySelector(".mainLeft")
const mainRight = document.querySelector(".mainRight")

let players = [];
let gameboards = [];

function  Ship(length,position){
    this.length = length;
    this.position = position;
    this.isHit = [];
    this.isSunken = false;
    function hit(num){
        isHit.push(num)
    }
    function isSunk(position, isHit){
        if(isHit === position){
            isSunken = true;
        }
    }
}
function Gameboard(){
    this.missedAttacks = [];
    this.areShipsSunken = false;
    this.board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]
}
function Player(username){
    this.username = username;
 
}
function createUIgameboard(who){
    let p;
    const boardUI = document.createElement('div')
    boardUI.classList.add('board')
    if(who ==="AI"){
        mainRight.appendChild(boardUI)
        p = 'AI';
    } else {

        
        mainLeft.appendChild(boardUI)
        p = 'player';
    }

    for(let i=0;i<=9;i++){
        for(let j=0;j<=9;j++){
                const cell = document.createElement('div')
                cell.classList.add('cells')
                cell.setAttribute('id',`cell${i}x${j}`);
                cell.setAttribute('onclick',`handleHit(${i},${j},'${p}')`)
                boardUI.appendChild(cell)
        }
    }
}
function startGame(){
    let player1 = new Player(usernameInput.value);
    players.push(player1)
    console.log([player1])
    player1name.innerHTML = usernameInput.value;
    let enemy = new Player('Enemy AI');
    players.push(enemy)
    console.log(enemy)
    createUIgameboard('player');
    let playerGameboard = new Gameboard('player');
    console.log(playerGameboard)
    let enemyGameboard = new Gameboard('AI');
    createUIgameboard('AI')
    console.log(enemyGameboard);
    gameboards.push(playerGameboard)
    gameboards.push(enemyGameboard)
    showShips(0)

    
}
let shipCounter = 0;
function handleHit(i,j,p){
    if(p==='player'){
    if(shipCounter === 0){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's' || gameboards[0].board[i-2][j] === 's' || gameboards[0].board[i-3][j] === 's' || i<=2){
            console.log("You can't place your ship there!");
        }else {
    document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-1}x${j}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-2}x${j}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-3}x${j}`).style.cssText = "background-color: lightgray";

    gameboards[0].board[i][j] = 's';
    gameboards[0].board[i-1][j] = 's';
    gameboards[0].board[i-2][j] = 's';
    gameboards[0].board[i-3][j] = 's';
    showShips(1)
    shipCounter++;
        }
    } else if(shipCounter === 1){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's' || gameboards[0].board[i-2][j] === 's' || i<=1){
            console.log("You can't place your ship there!");
        }else {
            document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-1}x${j}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-2}x${j}`).style.cssText = "background-color: lightgray";
        
            gameboards[0].board[i][j] = 's';
            gameboards[0].board[i-1][j] = 's';
            gameboards[0].board[i-2][j] = 's';
            showShips(2)

            shipCounter++;
        }
    }else if(shipCounter === 2){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's' || gameboards[0].board[i-2][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
            document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-1}x${j}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-2}x${j}`).style.cssText = "background-color: lightgray";
        
            gameboards[0].board[i][j] = 's';
            gameboards[0].board[i-1][j] = 's';
            gameboards[0].board[i-2][j] = 's';
            showShips(3)

            shipCounter++;
        }
    }else if(shipCounter === 3){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
        document.getElementById(`cell${i-1}x${j}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        gameboards[0].board[i-1][j] = 's';
        showShips(4)

        shipCounter++;
        }
    }else if(shipCounter === 4){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
        document.getElementById(`cell${i-1}x${j}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        gameboards[0].board[i-1][j] = 's';
        showShips(5)

        shipCounter++;
        }
    }else if(shipCounter === 5){
        if(gameboards[0].board[i][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        showShips(6)

        shipCounter++;
        }
    }else if(shipCounter === 6){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        showShips(7);    
        shipCounter++;
        }
    }else if(shipCounter === 7){
        startRound();
    }
}



}
function showShips(counter){
    const shipContainer = document.querySelector('.shipContainer')
    const shipCounter = document.querySelector('.counter')
    const shipImg = document.getElementById('shipImg')
    if(counter==0){
        shipImg.setAttribute('src','./imgs/ship1.png')
    }else if(counter==1 || counter==2){
        shipImg.setAttribute('src','./imgs/ship2.png')
    }else if(counter==3 || counter == 4){
        shipImg.setAttribute('src','./imgs/ship3.png')
    }else if(counter==5 || counter == 6){
        shipImg.setAttribute('src','./imgs/ship4.png')
    }else if(counter==7){shipImg.removeAttribute('src')}
}
function startRound(){
    console.log('The round has started!')
}