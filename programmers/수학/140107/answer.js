/**
 * 점 찍기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=954b33beef274fc1a7dc1c90c4105b02&pm=s)
 */
function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    const max_y = Math.floor(Math.sqrt(d ** 2 - x ** 2));
    answer += Math.floor(max_y / k) + 1;
  }
  return answer;
}
