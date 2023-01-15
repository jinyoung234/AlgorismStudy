/**
 * 고려사항
 * 1. C를 넘지 않으면서 가장 무겁게 태워야한다.
 */

/**
 * 알고리즘
 * 1. 빈 배열 answer 생성
 * 2. DFS에 초기 인자로 각각 0, 0을 넣어 호출(index, sum)
 * 3. 만약 l이 arr.length과 같은데 max가 sum보다 크거나 같다면 sum을 answer에 추가
 * 4. 그게 아니라면 배열에 있는 숫자가 sum에 추가되는 경우와 아닌 경우로 각각 호출
 */

function solution(max, arr) {
  const answer = [];
  function DFS(l, sum) {
    if (l === arr.length) {
      if (max >= sum) answer.push(sum);
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  }
  DFS(0, 0);
  return Math.max(...answer);
}

console.log(solution(259, [81, 58, 42, 33, 61]));
