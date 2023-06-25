/**
 * 폴리오미노
 */
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// input의 있는 문자열 교체 함수
function solution(n) {
  // XXXX인 부분을 모두 AAAA로 교체
  n = n.replace(/XXXX/g, "AAAA");
  // XX인 부분을 모두 BB로 교체a
  n = n.replace(/XX/g, "BB");
  // 교체 후 n을 배열로 쪼개었을 때 X가 존재하면 -1 리턴 아니면 그대로 리턴
  return n.split("").includes("X") ? -1 : n;
}

const answer = solution(input);

console.log(answer);
