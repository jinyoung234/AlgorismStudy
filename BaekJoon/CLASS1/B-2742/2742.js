let input = require('fs').readFileSync(__dirname+'/input.txt').toString();

// 1. 입력 받은 값을 숫자로 변환 한 것을 변수 count에 저장
let count = Number(input);

// 2. 하나씩 출력하면 시간 초과의 이유로 문자열에 결과값과 개행 문자를 넣어
// 마지막에 출력하기 위한 변수 answer 
let answer = '';

// 3. i를 최댓값으로 하여 i를 감소 시키며 answer에 추가
for(let i = count; i > 0; --i) {
    answer += i + "\n";
}

// 4. answer 출력
console.log(answer);