'use strict';

var prompt = require('prompt');
prompt.start();

var stacks = {
  a:[4,3,2,1],
  b:[],
  c:[]
}

function compareBlock(fromStack, toStack){
  var fromStackLastIdx = fromStack.length -1;
  var currentBlock = fromStack[fromStackLastIdx];
  var toStackLastIdx = toStack.length -1;
  var compareBlock = toStack[toStackLastIdx];
  // console.log(fromStack, toStack);
  // console.log(currentBlock, compareBlock);
  // console.log(toStackLastIdx);

  if(currentBlock<compareBlock || toStackLastIdx===-1) {
    // console.log("true");
    return true;
  }
  else {
    // console.log("false");
    return false;
  }
}

function moveBlock(fromStack, toStack) {
  if(compareBlock(fromStack, toStack)) {
    toStack.push(fromStack.pop());
  }
  else {
    console.log("can't make this move");
  }
}

function printStacks() {
  console.log(stacks['a']);
  console.log(stacks['b']);
  console.log(stacks['c']);
}

function checkWin() {
  if (stacks['a'].length===0&&stacks['b'].length===0){
    console.log("You won!");
    return true;
  }

}


function getPrompt() {
  printStacks();
  prompt.get(['fromStack', 'toStack'], function (error, result) {
    moveBlock(stacks[result.fromStack], stacks[result.toStack]);
    if(checkWin()) {return false;};
    getPrompt();
  });
}

getPrompt();
