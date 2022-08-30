window.addEventListener('DOMContentLoaded',() =>{
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');   
    
   let board = ['','','','','','','','',''];
   let currentPlayer = 'X';
   let isGameActive ='true';


   const PLAYERX_WON = 'PLAYERX_WON';
   const PLAYERO_WON = 'PLAYERO_WON';
   CONST TIE ='TIE';


   const winningConditions = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
      
];

function handleResultValidation(){
    let roundation = false;
    for(let i =0;i<=7;i++){
        const winCondition =winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if(a === '' || b === '' c === ''){
      continue;
        }
        if (a === b && === c){
           roundWon = true;
           break;
        }
    }

       if (roundWon){
        announcer(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
       }
        
       if (!board.includes(''))
       announcer(TIE)
}




 const announcer =(type) =>{
    switch(type){
        case PLAYERO_WON;
            announcer.innerHTML = 'player <span class ="playerO">O</span> Won';
            break;
        case PLAYERX_WON:
             announcer.innerHTML = 'player <span class="playerX">X </span> Won';
            break;
        case TIE:
             announcer.innerText = 'Tie';
    }
    announcer.classList.remove('hide');
  };

  const isvalidAction = (tile) =>{
if (tile.innerText === 'X' || tile.innerText ==='O'){
    return false;
}

  }


  const updateBoard = (index) =>{
    board['index'] =currentPlayer;
  }



 
const changePlayer = () => {
    playerDisplay.classlist.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classlist.add(`player${currentPlayer}`);
}




const  userAction =(tile , index) =>{
      if(isvalidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }}

    const resetBoard = () =>{
      board =['','','','','','','','',''];
      isGameActive = true;
      announcer.classlist.add('hide');

      if(currentPlayer === 'O'){
         changePlayer();
      }

      tiles.forEach(tile =>) {
         tile.innerText = '';
         tile.classList.remove('playerX');
         tile.classList.remove('playerO');
      }
    }

    tiles.forEach((tile , index) =>{
          tile.addEventListener('click', () => userAction(tile ,index));
    }
    resetButton.addEventListener('click', resetBoard);
});  