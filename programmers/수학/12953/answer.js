/**
 * N개의 최소공배수
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0)
 */
const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);
function solution(arr) {
  let answer = arr.reduce((acc, cur) => lcm(acc, cur));
  return answer;
}
