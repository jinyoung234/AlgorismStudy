let [n, k] = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(peopleCount, targetNumber) {
  const result = [];

  // 원형 테이블에 사람들 모아놓음
  const circleTable = Array.from({ length: peopleCount }, (_, i) => i + 1);

  // 순서는 1부터 시작
  let count = 1;
  // 원형 테이블에 사람 없을 때 까지 순회
  while (circleTable.length !== 0) {
    // 원형 테이블에서 사람 꺼냄
    const targetPeople = circleTable.shift();
    // 만약 순서에 맞는 사람을 꺼냈다면 result에 추가
    if (count % targetNumber === 0) {
      result.push(targetPeople);
    } else {
      // 순서에 맞지 않은 사람을 꺼냈다면 다시 원형 테이블에 추가
      circleTable.push(targetPeople);
    }
    // count 1 증가
    count += 1;
  }

  // 원하는 결과 형태로 format하여 반환
  return `<${result.join(', ')}>`;
}

console.log(solution(n, k));
