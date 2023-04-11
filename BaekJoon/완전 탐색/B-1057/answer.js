/**
 * 토너먼트
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(n, jNum, hNum) {
  function match(a, b) {
    if ((a === jNum && b === hNum) || (a === hNum && b === jNum)) return true;
    return false;
  }
  // 1번 ~ n번까지 배열 생성
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  // 초기 answer = 0, 지민과 한수가 만났는지 확인하기 위한 ch는 false로 초기화
  let answer = 0;
  let ch = false;
  // 만날 때 까지 순회
  while (ch !== true) {
    // answer 1 증가
    answer++;
    // 떨어진 번호를 삭제 후 한 라운드가 끝날 때 arr에 재 할당하기 위한 copy본 생성
    let copy = [...arr];
    // 모든 번호를 매치 시킬 때 까지 순회
    for (let i = 1; i <= arr.length / 2; i++) {
      // 매치 시킬 변수 a , b 생성
      // (인덱스 번호가 2n - 1, 2n일 때 1 - 2 / 3 - 4 / 5 - 6 이렇게 만날 수 있다.)
      let a = arr[2 * i - 2];
      let b = arr[2 * i - 1];
      // 만약 a, b를 매치 시켰을 때 한수와 지민이 만나면 true로 변경
      if (match(a, b)) ch = true;
      // 만나지 못했을 경우
      else {
        // 만약 a가 지민이나 한수이면 b를 삭제
        if (a === jNum || a === hNum) copy.splice(copy.indexOf(b), 1);
        // 만약 b가 지민이나 한수면 a를 삭제
        else if (b === jNum || b === hNum) copy.splice(copy.indexOf(a), 1);
        // 둘다 해당안되면 a 삭제 (b로 해도 관계 x)
        else copy.splice(copy.indexOf(a), 1);
      }
    }
    // 라운드가 끝나면 탈락된 인원이 반영 된 copy본을 arr에 재 할당
    arr = copy;
  }
  // 지민과 한수가 만난 round의 값을 출력
  return answer;
}

console.log(solution(a, b, c));
