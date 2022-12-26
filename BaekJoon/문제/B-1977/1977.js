let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").map(i => Number(i))

// 1. M 이상 N 이하를 나타내기 위해 M, N을 변수로 설정
let M = input[0];
let N = input[1];

// 1-1 완전제곱수 담기 위한 빈 배열 생성
let answerArr = [];

// 2. M이상 N이하의 자연수 중 완전 제곱수를 찾기 위해 순회
for(let i = M; i <= N; i++) {
     // 2-1. 해당 범위에 있는 모든 i값들에 대해 제곱근으로 변경
     let num = Math.sqrt(i);
     // 2-2. 제곱근으로 바꾼 숫자가 실수인지 정수인지 확인
     // 만약 정수이면 answerArr에 추가
     const isSquared = Number.isInteger(num);
     if(isSquared) {
          answerArr.push(i);
     }
}

// 3. 출력된 완전 제곱수를 다 더함
let sum = 0;
answerArr.forEach(num => sum+=num);

if(answerArr.length === 0) {
     // 4. 만약 완전제곱 수가 없다면 -1 출력
     console.log(-1)
} else {
     // 5. 모두 더한 값, 완전 제곱수 중 가장 최솟값 출력
     console.log(sum);
     console.log(Math.min(...answerArr));
}
