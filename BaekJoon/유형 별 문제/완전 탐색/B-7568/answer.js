/**
 * 덩치
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));

function solution(n, persons) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    // 등수 매기기 위한 변수 cnt
    let cnt = 1;
    // 만약 몸무게와 키가 i보다 j가 더 크다면 cnt 1 증가
    for (let j = 0; j < n; j++) {
      if (persons[i][0] < persons[j][0] && persons[i][1] < persons[j][1]) cnt++;
    }
    // 측정된 등수를 answer에 추가
    answer += `${cnt} `;
  }
  return answer;
}

console.log(solution(n, arr));
