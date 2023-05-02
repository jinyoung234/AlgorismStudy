/**
 * 최댓값과 최솟값
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=ec1a87f6d8354954b5c7cc7dcaf78864&pm=s)
 */
function solution(s) {
  const strArr = s.split(" ").map(Number);
  let answer = "";
  answer += `${Math.min(...strArr)} ${Math.max(...strArr)}`;
  return answer;
}
