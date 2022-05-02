const leftPanel = document.querySelector(".leftPanel")
const rightPanel = document.querySelector('rightPanel')
const usernameInput = document.getElementById('usernameInput')
const startGameBtn = document.getElementById('startGameBtn')
const player1name = document.querySelector(".player1name")
const mainLeft = document.querySelector(".mainLeft")
const mainRight = document.querySelector(".mainRight")

let players = [];

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
}
function Player(username){
    this.username = username;
    this.ships = {
        1: 1,
        2: 2,
        3: 3,
        4: 4
    }
    this.selectedShip = undefined;

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

    
}
function shipSelection(type){
    let player = players[0];


    console.log(type)
    for(let i=1;i<=4;i++){
        document.getElementById(`ship${i}`).style.cssText = "border: 1px solid lightgray;"

    }
    document.getElementById(`ship${type}`).style.cssText = "border: 4px solid red;"
    players[0].selectedShip = type;

    if(type == 1){
        document.getElementsByClassName('cells').onclick = 
    }

}
function handleHit(i,j,p){
    console.log(i,j, p)
   
}