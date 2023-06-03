/**
 * k진수에서 소수 개수 구하기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=e048d03b581b4dca8ab6222b524c9e65&pm=s)
 */
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(n, k) {
  let answer = 0;
  const transformNumArr = n.toString(k).split("0");
  transformNumArr.forEach((n) => {
    if (isPrime(Number(n))) {
      answer++;
    }
  });
  return answer;
}
