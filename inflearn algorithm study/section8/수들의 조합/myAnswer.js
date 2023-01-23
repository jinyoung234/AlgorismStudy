/**
 * 고려 사항
 * 1. n = 정수의 개수, k = 뽑는 정수 개수, m = 배수
 */

/**
 * 알고리즘
 * 1. 조합 알고리즘을 통해 combinations에 추가
 * 2. combi들을 reduce를 통해 값을 구하고 그 값이 m의 배수인지를 isPrime으로 여부 확인
 * 3. 만약 맞다면 answer 1 증가
 * 4. answer 반환
 */

function solution(n, k, arr, m) {
  const combinations = [];
  const combi = [];
  let answer = 0;
  function isPrime(num) {
    if (num % m === 0) answer++;
  }
  function DFS(l) {
    if (l > k + 2) return;
    if (combi.length === k) {
      let copy = [...combi];
      combinations.push(copy);
    } else {
      combi.push(arr[l]);
      DFS(l + 1);
      combi.pop();
      DFS(l + 1);
    }
  }
  DFS(0);
  combinations.forEach((combi) => {
    isPrime(combi.reduce((a, b) => a + b, 0));
  });
  return answer;
}

console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
