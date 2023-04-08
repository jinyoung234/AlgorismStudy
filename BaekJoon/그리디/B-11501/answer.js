/**
 * 주식
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number))
  .filter((v) => v.length > 1);

function solution(stocks) {
  // 각 테스트 케이스 순회
  for (let i = 0; i < stocks.length; i++) {
    // sum은 0으로 초기화 후 각 테스트 케이스의 마지막 날의 주식 값을 lastDay로 설정
    let sum = 0;
    let lastDay = stocks[i][stocks[i].length - 1];
    // 테스트 케이스의 날들을 역으로 순회
    for (let j = stocks[i].length - 1; j >= 0; j--) {
      // 만약 마지막 날보다 작은 값의 주식이 있다면 기존 sum에서 lastDay에서 그 날의 주식을 뺀 값을 재 할당
      if (lastDay > stocks[i][j]) sum += lastDay - stocks[i][j];
      // 만약 마지막 날 보다 큰 값의 주식이 있다면 lastDay를 그 값으로 교체
      else if (lastDay < stocks[i][j]) lastDay = stocks[i][j];
    }
    // 날들을 순회 후 sum을 console에 출력
    console.log(sum);
  }
}

solution(input);
