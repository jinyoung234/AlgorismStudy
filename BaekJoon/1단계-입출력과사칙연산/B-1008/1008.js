// 1000번과 동일
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map(i => Number(i));

const solution = (a, b) => {
    // 소수점 9번째 자리까지만 리턴
    return console.log((a / b).toFixed(9));
}

// hoisting이 안되기 때문에 함수 밑에서 호출
solution(input[0], input[1]); 
