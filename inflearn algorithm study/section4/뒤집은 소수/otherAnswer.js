// 소수 판별 함수
export function isPrime(num) {
  // 2 ~ 매개변수로 받은 숫자의 제곱근 까지 순회
  for (let i = 2; i < Math.sqrt(num); i++) {
    // 만약 i로 나눈 나머지가 0이라면 false
    if (num % i === 0) return false;
  }
  // 0이 아니라면 true
  return true;
}

function solution(arr) {
  let answer = [];
  for (x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
