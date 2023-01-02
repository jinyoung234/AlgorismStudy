// 1. 상품에 대해 총 가격이 낮은 순으로 정렬
// 2. 모든 상품에 대해 할인 받았다고 가정
// 3. 할인된 상품을 뺀 총 금액(지급 된 돈 - 할인된 상품의 총 가격), 초기 카운팅 1로 설정
// 4. 상품들 순회하며 상품의 총 가격이 살 수 있는 총 비용보다 낮은 경우 카운팅 1 증가 후 살 수 있는 총 비용을 상품 총 가격 만큼 빼줌
// (단, 순회하는 상품이 할안된 상품이면 안되며, 상품의 총 가격이 살 수 있는 총 가격보다 높은 경우 순회 종료)
// 5. answer과 카운팅된 것 비교하여 더 높은 값을 answer에 재 할당
// 6. answer 출력

let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// 살 수 있는 최대 돈, 학생들의 선물 가격 - 배송비가 있는 배열
let max = parseInt(input.slice(0, 1).join().split(" ")[1]);
let product = input
  .slice(1)
  .map((str) => str.split(" ").map((str) => parseInt(str)));

// priceArr를 총 가격에 대해 오름차순으로 다시 정렬(높은 가격의 상품을 늦게 더해야하기 때문)
product.sort((a, b) => {
  return a[0] + a[1] - (b[0] + b[1]);
});

let answer = 0;

// 모든 상품들 순회
for (let i = 0; i < product.length; i++) {
  // 상품의 i번째 요소가 할인 받았다고 가정
  // 총 금액에서 할인된 상품의 총금액을 뺀 가격을 money로 설정, cnt는 1로 설정(상품을 구매했다고 가정 하기 위해)
  let money = max - (product[i][0] / 2 + product[i][1]);
  let cnt = 1;
  // 다시 모든 상품들 순회
  for (let j = 0; j < product.length; j++) {
    // 할인 받았던 상품이 아니며 사용할 수 있는 비용이 상품의 총 가격 보다 작은 경우 종료
    if (j !== i && money < product[j][0] + product[j][1]) break;
    // 할인 받은 상품이 아니며 상품의 총 가격이 사용할 수 있는 비용보다 작거나 같은 경우 사용할 수 있는 가격에서 총 가격 빼 줌
    else if (j !== i && money >= product[j][0] + product[j][1]) {
      money -= product[j][0] + product[j][1];
      // cnt 1 증가
      cnt++;
    }
  }
  // 기존 살 수 있는 물건 수 보다 현재 살 수 있는 물건수를 비교하여 더 큰 경우 재 할당
  answer = Math.max(answer, cnt);
}

console.log(answer);
