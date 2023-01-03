/** 고려 사항
 *  1. 1, 2, 3번 수포자가 찍는 방식이 모두 다르다.
 *  2. 가장 높은 점수가 여러명이면 오름차순으로 정렬
 */

/** 알고리즘
 *  1. 반복되는 패턴을 찾아 1,2,3번 수포자의 초기 정답 값으로 생성
 *  2. 만약 1,2,3번 각각의 초기 정답 개수가 문제 개수보다 작으면 반복되는 패턴을 정답 배열에 추가
 *  3. 카운팅할 테이블 생성 후 찍은 답과 정답 비교하며 카운팅
 *  4. 최다 정답 수를 확인 후 수포자가 최다 정답 수와 일치하면 answer에 추가
 *  5. answer 리턴
 */

function solution(answers) {
  // 반복되는 첫 번째 패턴을 초기 배열 값으로 설정
  let a = ["1", "2", "3", "4", "5"];
  let b = ["2", "1", "2", "3", "2", "4", "2", "5"];
  let c = ["3", "3", "1", "1", "2", "2", "4", "4", "5", "5"];
  // 만약 1,2,3번 각각의 첫 번째 패턴 수가 문제 개수보다 작으면 개수가 맞을 때까지 반복되는 패턴 추가
  while (a.length < answers.length) {
    a.push(..."12345".split(""));
  }
  while (b.length < answers.length) {
    b.push(..."21232425".split(""));
  }
  while (c.length < answers.length) {
    c.push(..."3311224455".split(""));
  }
  // 카운팅할 테이블 생성
  let table = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);
  for (let i = 0; i < answers.length; i++) {
    // 찍은 문제와 정답과 비교하여 정답일 경우 해당 키에 대한 정답 횟수 1 증가
    if (answers[i] === parseInt(a[i])) table.set(1, table.get(1) + 1);
    if (answers[i] === parseInt(b[i])) table.set(2, table.get(2) + 1);
    if (answers[i] === parseInt(c[i])) table.set(3, table.get(3) + 1);
  }

  // 최대 정답 개수와 많이 마춘 사람에 대한 빈 배열 생성
  let max = Math.max(...table.values());
  let answer = [];
  // 수포자들의 정답 개수가 최대 정답 개수면 answer에 수포자 추가(자동 오름 차순)
  for (let [k, v] of table) {
    if (v === max) answer.push(k);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
