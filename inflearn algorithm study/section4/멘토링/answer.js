/* ex
  1 => 3 4 2
  2 => 4 3 4
  3 => 1 2 1
  4 => 2 1 3

  1 => 다 x
  2 => 다 x
  3 => 4빼고 전부 다
  4 => 2번만 가능

  [[3, 1], [3, 2], [4, 2]] 
*/

// 1. 멘토, 멘티 번호 찾음 (단, 멘토 - 멘티 번호가 일치하면 안됨)
// 2. 각 테스트 마다 멘토, 멘티의 시험 등수 찾음
// 3. 모든 테스트에서 멘토 - 멘티 조건이 만족하면 answer 1 증가

let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// 학생 수, 테스트 결과에 대한 변수 값
const allStudent = Number(input.slice(0, 1).join().split(" ")[0]);
const test = input.slice(1).map((str) => str.split(" "));

function solution(test) {
  let answer = 0;
  // 멘토 - 멘티의 모든 경우의 수 찾기
  for (let i = 1; i <= allStudent; i++) {
    for (let j = 1; j <= allStudent; j++) {
      // 멘토 - 멘티의 번호가 서로 같으면 pass
      if (i === j) continue;
      // 멘토 - 멘티 등수 확인 위한 해시 맵 생성
      const mantoManteeTable = new Map();
      let cnt = 0;
      // 멘토 - 멘티 등수 확인을 위해 test 순회
      for (let k = 0; k < test.length; k++) {
        for (let s = 0; s < allStudent; s++) {
          // 만약 테스트에 있는 멘토와 경우의 수로 뒀던 멘토가 일치할 경우 해시 맵에 추가
          if (Number(test[k][s]) === i) mantoManteeTable.set(i, s);
          // 멘티도 마찬가지
          if (Number(test[k][s]) === j) mantoManteeTable.set(j, s);
        }
        // 만약 멘토의 등수가 멘티 등수 보다 높으면 cnt 1 증가
        if (mantoManteeTable.get(i) > mantoManteeTable.get(j)) cnt++;
      }
      // 만약 모든 테스트에서 cnt가 증가했다면 answer 1증가
      if (test.length === cnt) answer++;
    }
  }
  // answer 리턴
  return answer;
}

console.log(solution(test));
