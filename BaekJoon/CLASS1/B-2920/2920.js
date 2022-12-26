let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ').map(i => Number(i));

// count 설정
let count = 0;

// 1-1. input의 첫번째 요소가 1인 경우
if(input[0] === 1) {
  // 1-2 input 배열 순회
  for(let i = 0; i < input.length; i++) {
    // 1-3 input의 첫번째 요소가 0이면 count 증가
    if(input.indexOf(input[i]) === 0) {
      count++;
    // 1-4 input 전 요소 + 1의 값이 input 다음 요소의 값과 같다면 count 증가
    } else if(input[i-1]+1 === input[i]) {
      count++;
    }
  }

// 2-1 input의 첫번째 요소가 8인 경우
} else if(input[0] === 8) {
  // 2-2 요소 순회
  for(let i = 0; i < input.length; i++) {
    // 2-3 첫 인덱스는 무조건 count 감소
    if(input.indexOf(input[i]) === 0) {
      count--;
    // 2-4 전 요소가 현재 요소의 +1한 값과 같다면 count 감소
    } else if (input[i-1] === input[i]+1) {
      count--;
    }
  }
}

// 3. count가 8이면 ascending -8이면 descending 그 외엔 mixed 출력
if (count === 8) {
  console.log("ascending");
} else if(count === -8) {
  console.log("descending");
} else {
  console.log("mixed");
}