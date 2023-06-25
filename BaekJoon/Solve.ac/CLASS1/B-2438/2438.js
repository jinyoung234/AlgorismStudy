const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 입력 받은 값 숫자로 변환
let num = Number(input);

// 2. 별 저장
let star = "";

// 3. 반복문이 돌아가는 동안 기존 star에 *를 더한 후 출력
for (let i = 0; i < num; i++) {
  star += "*"
  console.log(star); 
}