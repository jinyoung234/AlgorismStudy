/**
 * 기능 개발
 */
function solution(progresses, speeds) {
  let answer = [];
  // 작업이 완전히 사라질 때 까지 순회
  while (progresses.length) {
    let count = 0;
    // 작업들 순회
    for (let i = 0; i < progresses.length; i++) {
      // 기존 작업에 추가적으로 일한 것 추가
      progresses[i] += speeds[i];
    }
    // 만약 앞의 일의 작업량이 100이 넘어간다면
    while (progresses[0] >= 100) {
      // 일 종료
      progresses.shift();
      // 그 일의 작업 속도도 함께 제거
      speeds.shift();
      // 카운트 증가
      count++;
    }
    // 카운트가 0보다 크다면 answer에 추가
    if (count > 0) answer.push(count);
  }
  return answer;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
