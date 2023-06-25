// input 값 불러오기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 문자열 배열을 숫자열 배열로 변환
const number = input.map(a => Number(a));

// 2. 불러온 값 - 543
console.log(number[0]-543);