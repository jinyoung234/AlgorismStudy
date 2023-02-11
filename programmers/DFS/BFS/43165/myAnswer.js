/**
 * 알고리즘
 * 1. 만약 l이 numbers.length와 같고 누적합이 target과 같다면 answer 1 증가
 * 2. 그게 아니라면 temp 배열 l번째에 numbers[l]의 음의 값으로 할당
 * 3. DFS(l+1) 호출
 * 4. 만약 l이 numbers 길이보다 크다면 return
 * 5. return 되면 splice를 통해 temp 배열 l번째 지운 후 numbers[l]의 양의 값으로 재 할당
 * 6. DFS(l+1) 호출
 * 7. answer 반환
 */
function solution(numbers, target) {
  let temp = [];
  let answer = 0;
  function DFS(l) {
    if (l > numbers.length) return;
    if (l === numbers.length && temp.reduce((a, b) => a + b, 0) !== target)
      return;
    if (l === numbers.length && temp.reduce((a, b) => a + b, 0) === target) {
      answer++;
    } else {
      temp[l] = -numbers[l];
      DFS(l + 1);
      temp.splice(l, 1, numbers[l]);
      DFS(l + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
