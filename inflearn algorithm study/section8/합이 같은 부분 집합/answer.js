/**
 * 알고리즘
 * 1. 처음 sum과 answer를 각각 arr의 합과 NO, flag를 0으로 설정
 * 2. DFS 함수에 인자를 각각 0, 0으로 호출 (각각 L, sum)
 * 3. DFS 내에서 L이 arr.length과 같고 입력 배열의 합 - DFS 인자의 합 = DFS 인자의 합 이라면 YES로 변경
 * 4. flag를 1로 변경
 * 5. 그게 아니라면 (L+1, sum + arr[L])과 (L+1, sum)으로 재귀 호출
 * 6. answer 리턴
 */

function solution(arr) {
  let sum,
    answer = "NO";
  let flag = 0;
  sum = arr.reduce((a, b) => a + b, 0);
  function DFS(L, S) {
    if (flag === 1) return;
    if (L === arr.length) {
      if (sum - S === S) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, S + arr[L]);
      DFS(L + 1, S);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
