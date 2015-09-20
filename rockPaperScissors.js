'use strict';

var prompt = require('prompt');
prompt.start();

function rockPaperScissors(hands) {
  if(hands.indexOf('rock')!==-1 && hands.indexOf('scissors')!==-1){
    return 'rock';
  }
  if(hands.indexOf('paper')!==-1 && hands.indexOf('scissors')!==-1){
    return 'scissors';
  }
  if(hands.indexOf('rock')!==-1 && hands.indexOf('paper')!==-1){
    return 'paper';
  }
  return -1;
}

prompt.get(['hand1', 'hand2'], function(error, result){
  console.log('First Hand: '+result['hand1']);
  console.log('Second Hand: '+result['hand2']);
  var hands = [result.hand1, result.hand2];
  var winningHand = rockPaperScissors(hands);
  if (winningHand===hands[0]) {
    console.log("Player 1 wins");
  }
  else if(winningHand===hands[1]) {
    console.log("Player 2 wins");
  }
  else if(hands[0]===hands[1]){
    console.log("It's a tie!");
  }
});
