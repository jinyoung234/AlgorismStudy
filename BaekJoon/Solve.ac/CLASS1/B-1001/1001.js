// 1000번과 동일
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map(i => Number(i));

// 이번엔 solution 함수를 arrow function 형태로 정의
const solution = (a, b) => {
    return console.log(a - b);
}

// hoisting이 안되기 때문에 함수 밑에서 호출
solution(input[0], input[1]); 
