// <내 풀이>
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").map(i => Number(i));

// 1. 입력 받은 값을 모두 곱한 후 각 자리수에 대한 배열로 생성
let eachDigit = input.reduce((a,b) =>  a * b).toString().split('').map(i => Number(i));

// 2. 각 자리수를 count 하기 위한 배열
let count = [0,0,0,0,0,0,0,0,0,0];

// 3. 각 자리수를 순회하며 해당하는 자릿수(count[i])의 count 증가
eachDigit.forEach(
    i => ++count[i]
)

// 4. 빈 문자열
let str = '';

// 5. count 배열 순회하며 빈 문자열에 각 자릿수 값 + 개행문자
for(let i = 0; i < count.length; i++) {
    str += count[i] + '\n';
}

// 6. 출력
console.log(str);

// // <다른 사람 풀이>
// let num = String(input[0] * input[1] * input[2]);

// for(let i = 0; i <= 9; i++) {
//    let count = 0;
//    for(let j = 0; i < num.length; i++) {
//     if(Number(num[j]) === i) {
//         count++;
//     }
//    }
//    console.log(count);
// }