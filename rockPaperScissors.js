'use strict';

var prompt = require('prompt');
prompt.start();

function rockPaperScissors(hands) {
  if(hands.contains('rock')!==-1 && hands.contains('scissors')!==-1){
    return 'rock';
  }
  if(hands.contains('paper')!==-1 && hands.contains('scissors')!==-1){
    return 'scissors';
  }
  if(hands.contains('rock')!==-1 && hands.contains('paper')!==-1){
    return 'paper';
  }
}

prompt.get(['hand1', 'hand2'], function(error, result){
  console.log('First Hand: '+result['hand1']);
  console.log('Second Hand: '+result['hand2']);
  //player 1 is rock
  if(result['hand1']==='rock'){
    if(result.hand2==='scissors'){
      console.log('Player 1 wins');
    }
    else if(result.hand2==='paper'){
      console.log('Player 2 wins');
    }
    else if(result.hand2==='rock'){
      console.log("It's a tie!");
    }
  }
//player 1 is paper
  if(result.hand1==='paper'){
    if(result.hand2==='scissors'){
      console.log('Player 2 wins');
    }
    else if(result.hand2==='paper'){
      console.log("It's a tie!");
    }
    else if(result.hand2==='rock'){
      console.log("Player 1 wins");
    }
  }
//player 1 is scissors
  if(result.hand1==='scissors'){
    if(result.hand2==='scissors'){
      console.log("It's a tie!");
    }
    else if(result.hand2==='paper'){
      console.log('Player 1 wins');
    }
    else if(result.hand2==='rock'){
      console.log("Player 2 wins");
    }
  }





});
