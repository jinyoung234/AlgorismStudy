// 1000번과 동일
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 문자열 배열 -> 숫자 배열로 변환
input = input[0];
input = input.split(' ').map(i => Number(i));

// 3. 함수 호출
solution(input[0],input[1],input[2]);

// 2. 첫번째 줄 (a+b)%c, 두번째줄 ((a%c)+(b%c))%c 
// 셋째줄(a*b)%c 넷째줄 ((a%c) × (b%c))%c 출력
function solution(a, b, c) {
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);
}