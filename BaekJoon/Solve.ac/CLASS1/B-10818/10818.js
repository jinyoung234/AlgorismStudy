let input = (require('fs').readFileSync(__dirname+'/input.txt').toString());

let num = input.split("\n")

// 1. 두 번째 라인을 숫자 배열으로 만들기
let numArr = num[1].split(' ').map(i => Number(i));

// 2. 최대값
let max = Math.max(...numArr);

// 3. 최소값
let min = Math.min(...numArr);

// 4. 출력
console.log(`${min} ${max}`);