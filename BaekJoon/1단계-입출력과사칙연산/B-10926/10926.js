// 1000번과 동일
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input[0]);

// 입력받은 값 + ??! 출력
function solution(a) {
    console.log(a + "??!");
}