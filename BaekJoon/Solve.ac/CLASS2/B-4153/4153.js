let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");

input.pop();

for(let i = 0; i < input.length; i++) {

   input[i] = input[i].split(' ');
   input[i].sort((a,b) => a-b);
   let a = Math.pow(input[i][0], 2);
   let b = Math.pow(input[i][1], 2);
   let c = Math.pow(Math.max(...input[i]), 2);

   if( a+b === c ) {
        console.log("right");
   } else if( a+b !== c ) {
        console.log("wrong");
   }

}