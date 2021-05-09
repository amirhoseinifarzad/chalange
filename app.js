/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// variable

var roundScore , scoure , dice , activePlayer , inp, power;

init();




 inp = document.querySelector('.final-score') ;




 // disply dices function 
function disply() {
   document.getElementById('dice-1').style.display = 'block' ; 
   document.getElementById('dice-2').style.display = 'block' ; 
   document.getElementById('dice-1').src = 'dice-' + dice +'.png' ;
   document.getElementById('dice-2').src = 'dice-' + dice2 +'.png' ;
   
}

//// init disply 0
function init() {

   activePlayer = 0 ;

   scoure = [0 , 0] ;

   power = true ;
   
   document.querySelector('#score-0').textContent = '0' ;
   document.querySelector('#score-1').textContent = '0' ;
   
   document.querySelector('#current-0').textContent = '0' ;
   document.querySelector('#current-1').textContent = '0' ;
   
   document.getElementById('dice-1').style.display = 'none' ; 
   document.getElementById('dice-2').style.display = 'none' ; 

   document.querySelector('.player-0-panel').classList.remove('active') ;
   document.querySelector('.player-1-panel').classList.remove ('active')  ;
   
   document.querySelector('.player-0-panel').classList.add('active') ;
   document.querySelector('.player-0-panel').classList.remove('winner') ;
   document.querySelector('.player-1-panel').classList.remove('winner') ;

   
}


/// roul dice clik 

document.getElementById('btn-roll').addEventListener('click',function () {

   if (power){
      dice = Math.floor(Math.random()*6) + 1 ;
      dice2 = Math.floor(Math.random()*6) + 1 ;
      var sum = dice + dice2 ;
      roundScore += sum 

      if (dice !==1 && dice2 !==1) {
         
      
         disply() ;
         document.getElementById('current-'+ activePlayer).textContent = roundScore ;




      }else  {

         activePlayer ===1 ? activePlayer = 0 : activePlayer =1  ;

         disply() ;
         roundScore = 0

         document.querySelector('#current-0').textContent = '0' ;
         document.querySelector('#current-1').textContent = '0' ;

         document.querySelector('.player-0-panel').classList.toggle('active') ;
         document.querySelector('.player-1-panel').classList.toggle ('active')  ;
   }
   
      
   }


   
})

//hold bottm 

document.querySelector('#btn-hold').addEventListener('click',function () {

   scoure[activePlayer] += roundScore ;

   
   document.querySelector('#score-'+activePlayer).textContent = scoure[activePlayer]  ;
   roundScore = 0 ;

   if (scoure[activePlayer] >= inp.value) {

      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner') ;
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active') ;
      document.getElementById('dice-1').style.display = 'none' ; 
      document.getElementById('dice-2').style.display = 'none' ; 

      power = false ;

     
      
   }else{
      disply() ;
   }

   

})


/// reset btn 

document.querySelector('#btn-res').addEventListener('click',function () {
   init()
   
})