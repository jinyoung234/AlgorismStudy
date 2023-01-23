/**
 * [차이점]
 * 1. 접근 방식에 차이가 존재했다. 강사님은 2에 대해 4, 8, 12가 오는 경우를 for문을 이용하셔서 해결했고
 * 나는 2 -> 4(2, 4) -> 4 pop -> 8(2, 8) -> 8 pop -> 12(2, 12)의 과정으로 해결했다.
 *
 * 2. 내 방식의 문제점은 강사님의 방식에 비해 많은 배열을 사용하는 것도 문제 이며, 그로 인해 forEach,
 * reduce 함수를 사용하게 되는 것 자체도 많은 시간 복잡도를 야기하기 때문에 강사님의 코드에 비해 좋지 않은
 * 코드라는 것을 느끼게 되었다.
 */

function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(l, s, sum) {
    if (l === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(l + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
}
console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
