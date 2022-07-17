// input 값 불러오기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// input[0]의 값을 input에 저장
input = input[0];

// split -> 배열에 있는 ['1 2']를 -> ['1', '2']로 만듬
// map -> 각 배열의 요소를 number 값으로 바꿈
input = input.split(' ').map(i => Number(i));

// solution 호출
solution(input[0], input[1]);

// 두 입력값을 받아 연산 후 출력
function solution(a, b) {
    console.log(a*b);
}