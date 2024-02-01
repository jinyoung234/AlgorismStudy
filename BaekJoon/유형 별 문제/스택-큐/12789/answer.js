/**
 * 도키도키 간식드리미
 * (https://www.notion.so/4b44118513844519ac8309606c8584b7?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(studentsCount, students) {
  const stack = [];
  let current = 1; // 현재 순서를 나타내는 변수

  for (let i = 0; i < studentsCount; i++) {
    // 대기열에 학생을 추가
    stack.push(students[i]);

    // 스택의 맨 위 학생이 현재 순서와 일치하는 경우 스택에서 제거
    while (stack.length > 0 && stack[stack.length - 1] === current) {
      stack.pop();
      current++; // 다음 순서로 업데이트
    }
  }

  // 모든 학생이 올바른 순서로 간식을 받을 수 있다면 스택은 비어 있어야 함
  return stack.length === 0 ? 'Nice' : 'Sad';
}

console.log(solution(Number(input[0]), input[1].split(' ').map(Number)));
