'use strict';

var fib_array=[1,2];
var sum=0;

function fibonacci() {
  var last_item = fib_array[fib_array.length-1]+fib_array[fib_array.length-2];
  if (last_item<=4000000) {
    fib_array.push(last_item);
    // console.log(fib_array);
    fibonacci();
  }
}

fibonacci();

console.log(fib_array);

for(var i=0; i<fib_array.length; i++) {
  if(fib_array[i]%2===0) {
    sum+=fib_array[i];
  }
}

console.log(sum);
