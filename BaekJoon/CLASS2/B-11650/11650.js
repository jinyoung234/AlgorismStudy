let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").slice(1);

let answerArr = [];

for(let i = 0; i < input.length; i++) {
   input[i] = input[i].split(' ');
   input[i][0] = Number(input[i][0])
   input[i][1] = Number(input[i][1])
   answerArr.push(input[i]);
}

let answer = '';

answerArr.sort((a,b) => {
    if(a[0] !== b[0]) {
        return a[0] - b[0]
    }
    return a[1] - b[1]
}).forEach(coord => {
    answer += `${coord[0]} ${coord[1]}\n`
})

console.log(answer);
