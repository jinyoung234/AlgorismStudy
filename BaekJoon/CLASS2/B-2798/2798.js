let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");

/* 브루트 포스(완전 탐색) 알고리즘 */
// 가능한 모든 경우의 수를 구하여 문제를 푸는 방법

// M(넘지 않거나 같아야하는 값)
let maxNum = Number(input[0].split(' ')[1]);

// 입력으로 받은 숫자들을 배열로 저장
let numArr = input[1].split(' ').map(number => Number(number));

// 카드 3장을 뽑은 값을 sumArr에 저장
let sumArr = [];

// 모든 경우의 수 조사 (이때, i는 0, j는 i+1, k는 j+1인 것이 핵심)
for(i = 0; i < numArr.length; i++) {
     for(j = i+1; j < numArr.length; j++) {
          for(k = j+1; k < numArr.length; k++) {
               // 뽑은 3장의 카드를 더 함
               let sum = numArr[i] + numArr[j] + numArr[k];
               // 이때, 뽑은 카드가 같으면 안되어 같은 카드를 뽑을 경우 continue
               if((i === j) || (i === k) || (j == k)) {
                    continue;
               }
               // 만약 maxNum과 같거나 작을 경우 sumArr에 저장
               if(maxNum >= sum) {
                    sumArr.push(sum);
               }
          }
     }
}

// sumArr에 있는 값 중 가장 큰 값을 answer에 저장 후 출력
const answer = Math.max(...sumArr);

console.log(answer);