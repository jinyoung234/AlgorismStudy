let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").map(i => Number(i)).slice(1);

// 1. 입력받은 값들을 중복을 제거하기 위해 Set 객체로 변경
let arr = new Set(input);

// 2. 객체를 다시 배열로 변경하기 위해 Array.from 사용
let numArr = Array.from(arr);

// 3. 중복 제거된 numArr를 오름차순으로 정렬
numArr.sort((a,b) => a-b);

// 4. 빈 문자열 answer
let answer = '';

// 5. 정렬된 numArr -> 각 숫자들을 answer에 추가 후 개행 문자 처리
numArr.forEach(num => answer+= num + '\n');

// 6. 출력
console.log(answer);