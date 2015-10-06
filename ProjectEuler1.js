"use strict";

var sum=0;
//put the limit here
var max=1000;

for(var i=1; i<max; i++) {
  if(i%3===0 || i%5===0) {
    sum+=i;
  }
}

console.log(sum);
