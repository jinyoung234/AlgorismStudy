/**
 * 동전 0
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, ...b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(n, k, coins) {
  // answer, sum 0으로 초기화
  let answer = 0;
  let sum = 0;
  // coins 배열의 가장 마지막 인덱스 부터 순회하기 위해 n-1로 초기화
  let cnt = n - 1;
  // sum이 k와 같지 않을 때 까지 순회
  while (sum !== k) {
    // 만약 기존 sum에서 동전을 더한 값이 k보다 작거나 같다면
    if (sum + coins[cnt] <= k) {
      // sum에 그 동전 만큼 더한 후 동전 개수 1 증가
      sum += coins[cnt];
      answer++;
      // 아니라면 다음 동전으로 이동
    } else cnt--;
  }
  // 최소 동전 개수 리턴
  return answer;
}

console.log(
  solution(
    a.split(" ").map(Number)[0],
    a.split(" ").map(Number)[1],
    b.map(Number)
  )
);
