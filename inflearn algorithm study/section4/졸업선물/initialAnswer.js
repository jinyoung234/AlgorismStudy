// 1. 입력으로 받은 상품의 가격들을 비교하여 가장 높은 가격을 찾아 50% 할인 시킴
// 2. 배송비, 상품 가격을 모두 더하여 누적합을 만듬
// 3. 누적합과 최대 살 수 있는 금액 비교 하여 누적합이 작으면 구매 가능한 학생 수 1 증가
// 4. 살 수 있는 금액을 초과하면 학생수 리턴

let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// 살 수 있는 최대 돈, 학생들의 선물 가격 - 배송비가 있는 배열
let max = parseInt(input.slice(0, 1).join().split(" ")[1]);
let productArr = input
  .slice(1)
  .map((str) => str.split(" ").map((str) => parseInt(str)));

// priceArr를 총 가격에 대해 오름차순으로 다시 정렬(높은 가격의 상품을 늦게 더해야하기 때문)
productArr.sort((a, b) => {
  return a[0] + a[1] - (b[0] + b[1]);
});

// 가장 높은 가격의 상품의 가격을 50% 할인된 가격으로 변경
productArr[productArr.length - 1][0] = productArr[productArr.length - 1][0] / 2;

// 상품 가격 더하면서 만약 살 수 있는 금액을 초과하지 않았을 경우에만 answer 1 증가
let answer = 0;
productArr.reduce((prev, cur) => {
  if (prev >= max) return prev;
  else {
    prev = prev + cur[0] + cur[1];
    answer++;
    return prev;
  }
}, 0);

// answer 리턴
console.log(answer);

/** 오답 원인
 * 총 금액이 가장 높은 상품이 무조건 할인 받아서 가장 맨 마지막에 계산되면 될 것이라고 판단했기 때문
 */

/** 해결
 * 모든 상품에 대해 할인 받는 경우를 생각 후 그 중 가장 많이 살 수 있는 경우로 코드를 짜기
 */
