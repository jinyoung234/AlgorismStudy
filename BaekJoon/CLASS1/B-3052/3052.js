let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');

// 0. 조건 설정
input.forEach(i => (i > 1000 || i < 0) && process.exit())

// 1. count 설정
const answer = [];

// 2. 입력 받은 요소를 42로 나눈 나머지 값을 answer에 추가
input.filter(i => answer.push(i%42));

// 3. answer배열에 대해 중복한 값을 하나의 값으로 만들기 위해 set 객체 생성
const setCollection = new Set(answer);

// 4. set 객체의 size 출력
console.log(setCollection.size);