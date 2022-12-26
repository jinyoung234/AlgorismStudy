let input = Number(require('fs').readFileSync(__dirname+'/input.txt').toString().trim())

// 1번째 수
let firstNum = 0;
// 2번째 수
let secondNum = 1;

// 3번째 수 부터를 위한 sum, prevNum, currNum 초기화 
let sum = 0;
let prevNum = 0;
let currNum = 0;

// 1~입력받은 수 +1 순회
for (let i = 1; i <= input+1; i++) {
     // 첫번째 수는 firstNum을 더함
     if(i === 1) {
          sum = firstNum;
     // 두번째 수는 secondNum을 더함
     } else if (i === 2) {
          sum = secondNum;
     } else if (i === 3) {
          // 3번째 부턴 피보나치 수열 이용
          sum = firstNum + secondNum;
          // 이전 값 저장
          prevNum = secondNum;
          // 현재 값 저장
          currNum = sum;
     } else {
          // 피보나치 => 2번째 이전 값 + 이전 값
          sum = prevNum + currNum;
          // 이전 값을 저장
          prevNum = currNum;
          // 현재 값을 저장
          currNum = sum;
     }
}

// 피보나치 수열의 최종 값 출력
console.log(sum);