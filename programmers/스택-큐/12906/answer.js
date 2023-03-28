/**
 * 같은 숫자는 싫어
 */
function solution(arr) {
  // 스택 추가
  let stack = [];
  // 첫번째 요소는 추가
  stack.push(arr[0]);
  // arr 전체 순회
  for (let i = 1; i < arr.length; i++) {
    // 만약 연속 되는 값이 아닐 경우에만 스택에 추가
    if (arr[i - 1] !== arr[i]) stack.push(arr[i]);
  }
  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
