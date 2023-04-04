/**
 * 2+1 세일
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  let productPrices = input.slice(1).map(Number);
  solution(n, productPrices);
  process.exit();
});

function solution(n, productPrices) {
  let answer = 0;
  // 초기 cnt 1로 설정
  let cnt = 1;
  // 정렬 꼭 해주기
  productPrices.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    // 만약 유제품이 3의 배수의 유제품이 아니라면 answer에 i번째 productPrices 가격 만큼 추가
    if (cnt % 3 !== 0) {
      answer += productPrices[i];
    }
    // 가격 할당 후 cnt 증가
    cnt++;
  }
  // 순회 종료 시 answer 리턴
  console.log(answer);
}
