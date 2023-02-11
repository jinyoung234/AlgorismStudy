/**
 * [나의 정답과 차이점]
 *
 * 문제 접근은 동일하게 했던 거 같다. 하지만 dfs 함수에서 인자에 추가하여 누적합
 * 을 더하는 방법을 생각하지 못했고 누적합을 temp 배열의 reduce 함수로 연산했기
 * 때문에 정답에 비해 시간이 오래 걸린 것을 확인할 수 있었다.
 * 또한, temp 배열을 사용하면서, splice, push 등의 함수를 사용했기 때문에
 * 알고리즘 자체가 복잡해졌던 거 같다.
 */
function solution(numbers, target) {
  let answer = 0;
  function DFS(l, sum) {
    if (l > numbers.length) return;
    if (l === numbers.length) {
      if (sum === target) answer++;
    } else {
      DFS(l + 1, sum + numbers[l]);
      DFS(l + 1, sum - numbers[l]);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 5));
