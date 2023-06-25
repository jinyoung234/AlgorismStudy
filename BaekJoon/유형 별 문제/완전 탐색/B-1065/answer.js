/**
 * 한수
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    // 100 미만은 무조건 한수이기 때문에 answer 증가
    if (i < 100) answer++;
    else {
      // boolean인 ch 설정
      let ch = true;
      // 등차수열 계산을 위한 첫번째 값을 prev로 설정
      let prev = -Number(String(i)[0]) + Number(String(i)[1]);
      // 각 자리수를 순회하며 일정한 등차 수열인지 확인
      for (let j = 2; j < String(i).length; j++) {
        let current = -Number(String(i)[j - 1]) + Number(String(i)[j]);
        // 만약 일정하지 않다면 ch를 false로 변경
        if (prev !== current) ch = false;
      }
      // 만약 일정한 등차 수열이라면 answer 1증가
      if (ch === true) answer++;
    }
  }
  return answer;
}

console.log(solution(n));
