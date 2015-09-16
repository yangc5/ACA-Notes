'use strict';
var prompt = require('prompt');
prompt.start();
prompt.get(['name'],function(error, result) {
    var firstLetter = result.name[0];
    var newName = result.name.replace(firstLetter, '') + firstLetter + 'ay';
    console.log(newName);
});
