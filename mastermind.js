'use strict';

var board = [
  [ ],
  [ ],
  [ ],
  [ ],
  [ ]
];

function printboard(){
  for (var i=0; i<board.length; i++) {
    console.log(board[i]);
  }
}

var solution = 'ghab';
var guess = 'abcb';

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
