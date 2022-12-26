let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim()

// 1. 문장에서 공백 있을 때 마다 split
let strArr = input.split(' ');

// 2. 단어 세기 위한 변수
let countOfWords = 0;

// 3. 공백 없으면 count 증가
strArr.forEach(i => i !== '' && countOfWords++)

// 4. 출력
console.log(countOfWords)