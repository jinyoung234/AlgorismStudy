/**
 * 124 나라의 숫자
 * (https://www.notion.so/124-d2a452a64e434e77988e625fdeddc8a6)
 */
function solution(n) {
  let answer = "";
  const allNumber = [..."412"];
  while (n) {
    answer = allNumber[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}
