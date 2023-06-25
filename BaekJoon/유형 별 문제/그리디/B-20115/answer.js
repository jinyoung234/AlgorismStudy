/**
 * 에너지 드링크
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = require("fs").readFileSync(filePath).toString().split("\n");

function solution(drinks) {
  // 에너지 드링크를 내림 차순으로 정렬
  drinks.sort((a, b) => a - b);
  // drinks가 1개 남을 때 까지 1 - 3의 과정 반복
  while (drinks.length !== 1) {
    // 1. 에너지 드링크 중 가장 양이 많은 드링크를 largeDrink에 할당
    const largeDrink = drinks.pop();
    // 2. 에너지 드링크 중 그 다음으로 작은 드링크를 2로 나누어 smallDrink에 할당
    const smallDrink = drinks.pop() / 2;
    // 3. largeDrink + smallDrink를 더하여 가장 큰 드링크로 만든 후 다시 drinks에 추가
    drinks.push(largeDrink + smallDrink);
  }
  // 가장 양이 많은 드링크 완성
  return drinks[0];
}

console.log(solution(b.split(" ").map(Number)));
