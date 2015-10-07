'use strict';

var prompt = require('prompt');
prompt.start();

var board = [];
var solution = 'ghab';

function printboard(){
  for (var i=0; i<board.length; i++) {
    console.log(board[i]);
  }
}

function generateHints(solution, guess){
  var solutionArray = solution.split('');
  var guessArray = guess.split('');

  var correctLetters=0;
  var correctLetterPositions=0;

  for (var i=0; i<solutionArray.length; i++) {
    if(solutionArray[i]===guessArray[i]) {
      correctLetterPositions++;
      solutionArray[i]=null;
    }
  }

  for (var i=0; i<guessArray.length; i++) {
    var j=solutionArray.indexOf(guessArray[i]);
    if(j>-1) {
      correctLetters++;
      solutionArray[j]=null;
    }
  }

  return correctLetterPositions+' '+correctLetters;
}

function insertCode(guess) {
  board.push(guess+' '+generateHints(solution, guess));
}

function checkWin(solution, guess) {
  return solution===guess;
}

function getPrompt() {
  prompt.get(['guess'], function (error, result) {
    insertCode(result.guess);
    printboard();
    if(checkWin(solution, result.guess)) {
      console.log('you won!');
      return false;
    } 
    getPrompt();
  });
}

getPrompt();
