/**
 * 프린터
 */
function solution(priorities, location) {
  // queue와 queue 카피본 생성
  let queue = Array.from({ length: priorities.length }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  let copy = [...queue];
  // 인쇄 완료 된 것 추가
  let finish = [];
  // count 0으로 초기화
  let count = 0;
  // queue에 있는 모든 요소가 인쇄 완료 될 때 까지 순회
  while (queue.length) {
    // 중요도가 가장 높은 값을 target으로 설정
    let target = Math.max(...priorities);
    // 우선 순위, 큐 배열에서 꺼낸 것을 각각 n과 s라고 설정
    let n = priorities.shift();
    let s = queue.shift();
    // 만약 n이 중요도가 가장 큰 값이라면
    if (n === target) {
      // count 증가 후 s를 인쇄 완료 처리
      count++;
      finish.push(s);
      // n이 가장 큰 값이 아니라면
    } else {
      // n과 s를 가장 마지막 요소로 이동
      priorities.push(n);
      queue.push(s);
    }
  }
  // 인쇄를 요청한 문서가 몇 번째로 인쇄 되었는지 리턴
  for (let i = 0; i < answer.length; i++) {
    if (copy[location] === answer[i]) return i + 1;
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 2));
