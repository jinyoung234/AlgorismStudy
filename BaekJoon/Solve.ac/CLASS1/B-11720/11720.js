let input = require('fs').readFileSync(__dirname+'/input.txt').toString();

// 1. 입력 받은 숫자를 split을 통해 배열로 만듬
let num = input.split('\n')

// 2. 입력으로 주어진 숫자 N개에 대한 값만 가져와 각 자리수를 숫자로 변환
let numberOfnum = num[1].split('').map(i => Number(i));

// 3. 각 자리 수를 더 할 변수 count 추가 후 반복문을 통해 각 자리수 더함
let count = 0;
for(let i = 0; i < numberOfnum.length; i++) {
    count += numberOfnum[i];
}

// 4. count 출력
console.log(count);