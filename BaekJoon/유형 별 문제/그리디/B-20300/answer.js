/**
 * 서강 근육맨
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = require("fs").readFileSync(filePath).toString().split("\n");

function solution(n, machines) {
  function compare() {
    // 운동 기구 다 쓸 때까지 순회
    while (machines.length > 0) {
      // 가장 큰 소모 값 제외 후 가장 큰 근손실량 + 작은 근손실량 = sum
      const sum = machines.shift() + machines.pop();
      // BigInt는 Math를 사용할 수 없기에 3항 연산자로 해결
      answer = sum > answer ? sum : answer;
    }
  }
  let answer = 0n;
  // BigInt의 내림차순 처리
  machines.sort((a, b) => (a < b ? -1 : 1));
  // 만약 운동 기구가 홀수개라면
  if (n % 2 !== 0) {
    // 가장 큰 값 answer에 할당
    answer = machines.pop();
    // compare 함수를 통해 최솟값 M을 answer에 할당
    compare();
    // 운동 기구가 짝수개라면
  } else if (n % 2 === 0) {
    // compare 함수를 통해 최솟값 M을 answer에 할당
    compare();
  }
  // answer를 String의 형태로 리턴
  return String(answer);
}

console.log(solution(Number(a), b.split(" ").map(BigInt)));
