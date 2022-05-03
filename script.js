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
                cell.setAttribute('id',`cell${i}x${j}x${p}`);
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
    AI();
    

    
}
let shipCounter = 0;
function handleHit(i,j,p){
    if(p=="AI"){
        console.log("AI")
    }else if(p=="player"){console.log('player')}



    if(p==='player'){
    if(shipCounter === 0){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's' || gameboards[0].board[i-2][j] === 's' || gameboards[0].board[i-3][j] === 's' || i<=2){
            console.log("You can't place your ship there!");
        }else {
    document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-2}x${j}x${p}`).style.cssText = "background-color: lightgray";
    document.getElementById(`cell${i-3}x${j}x${p}`).style.cssText = "background-color: lightgray";

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
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-2}x${j}x${p}`).style.cssText = "background-color: lightgray";
        
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
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: lightgray";
            document.getElementById(`cell${i-2}x${j}x${p}`).style.cssText = "background-color: lightgray";
        
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
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
        document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        gameboards[0].board[i-1][j] = 's';
        showShips(4)

        shipCounter++;
        }
    }else if(shipCounter === 4){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
        document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        gameboards[0].board[i-1][j] = 's';
        showShips(5)

        shipCounter++;
        }
    }else if(shipCounter === 5){
        if(gameboards[0].board[i][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        showShips(6)

        shipCounter++;
        }
    }else if(shipCounter === 6){
        if(gameboards[0].board[i][j] === 's' || gameboards[0].board[i-1][j] === 's'){
            console.log("You can't place your ship there!")
        }else {
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: lightgray";
    
        gameboards[0].board[i][j] = 's';
        showShips(7);    
        shipCounter++;
        }
    }else if(shipCounter === 7){
        startRound();
    } 
}else if(p=='AI'){
    if(gameboards[1].board[i][j]=='s'){
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: green";
    } else {
        document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: black";
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
let aiShipCounter = 0;
function AI(){
    let p='AI'
        console.log("The AI is running")
        let i;
        let j;
        function getNumbers(){
            i = Math.floor(Math.random() * (9 - 2 + 1) + 2);    
            j = Math.floor(Math.random() * (9 - 2 + 1) + 2);    
        }
        
        if(aiShipCounter === 0){
            getNumbers();
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || gameboards[1].board[i-2][j] === 's' || gameboards[1].board[i-3][j] === 's'){
                console.log("You can't place your ship there!");
                getNumbers();
                AI();
            }else {
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-2}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-3}x${j}x${p}`).style.cssText = "background-color: red";
        
            gameboards[1].board[i][j] = 's';
            gameboards[1].board[i-1][j] = 's';
            gameboards[1].board[i-2][j] = 's';
            gameboards[1].board[i-3][j] = 's';
            aiShipCounter++;
            AI()
                }
            

        }else if(aiShipCounter === 1||aiShipCounter===2){
            getNumbers();
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || gameboards[1].board[i-2][j] === 's' || i<=2){
                console.log("You can't place your ship there!");
                getNumbers();
                AI()
            }else {
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-2}x${j}x${p}`).style.cssText = "background-color: red";
        
            gameboards[1].board[i][j] = 's';
            gameboards[1].board[i-1][j] = 's';
            gameboards[1].board[i-2][j] = 's';
            aiShipCounter++;
            AI()
                
            }   

        }else if(aiShipCounter === 3||aiShipCounter===4){
            getNumbers();
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || gameboards[1].board[i-2][j] === 's' || i<=2){
                console.log("You can't place your ship there!");
                getNumbers();
                AI()
            }else {
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: red";
            document.getElementById(`cell${i-1}x${j}x${p}`).style.cssText = "background-color: red";
        
            gameboards[1].board[i][j] = 's';
            gameboards[1].board[i-1][j] = 's';
            aiShipCounter++;
            AI()
                
            }   

        }else if(aiShipCounter === 5||aiShipCounter===6){
            getNumbers();
            if(gameboards[1].board[i][j] === 's' || gameboards[1].board[i-1][j] === 's' || i<=2){
                console.log("You can't place your ship there!");
                getNumbers();
                AI()
            }else {
            document.getElementById(`cell${i}x${j}x${p}`).style.cssText = "background-color: red";
        
            gameboards[1].board[i][j] = 's';
            aiShipCounter++;
            AI()
            }   

        }else {console.log("The AI has finished placing his ships!")}


}




function startRound(){
    console.log('The round has started!')
}