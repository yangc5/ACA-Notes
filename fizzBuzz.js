'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['number'], function(error, result){
  var num = parseInt(result['number']);
  var output = '';
  if(num%3===0){
    output+='fizz';
  }
  if(num%5===0){
    output+='buzz';
  }
  console.log(output);
});
