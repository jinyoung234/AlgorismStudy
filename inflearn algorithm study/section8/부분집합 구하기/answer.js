/**
 * 알고리즘
 * 1. DFS 함수 호출
 * 2. 1부터 부분 집합에 포함되었다고(check[v] = 1) 가정하고 v+1을 재귀 호출
 * 3. 만약 입력 값까지 포함되었을 경우 1 ~ 입력 값까지 check 되었다면 부분 집합에 추가
 * 4. 공집합이 아니라면 subsetArr에 추가
 * 5. 4까지 진행되었다면 복귀 주소로 스택 프레임이 이동할 것이므로 이젠 uncheck(check[v])라고 가정 후 v+1을 재귀 호출
 * 6. 부분집합 배열에 있는 값들을 순회 하면서 출력
 */

/**
 * 고려 할 것
 * 1. 각 숫자마다 부분 집합 내 해당 값의 포함 여부를 모든 경우의 수로 생각해볼 것(포함된다, 포함되지 않는다)
 * 2. 종료 시점은 입력으로 받은 값 까지 숫자마다 경우의 수를 결론 지은 이후 이다.
 * 3. 이 문제도 마찬가지로 이진 트리로 접근해 볼 것(부분집합.png 참고)
 */

function solution(num) {
  const subsetArr = [];
  const check = Array.from({ length: num }, () => 0);
  function DFS(v) {
    // 만약 v + 1이 num과 같다면
    if (v === num + 1) {
      // 부분 집합 생성(초기값은 empty string)
      let subset = "";
      for (let i = 1; i <= num; i++) {
        // 만약 부분 집합 요소라면 추가
        if (check[i] === 1) subset += i + " ";
      }
      // 공집합 제외 모든 부분집합을 answer에 추가
      if (subset.length !== 0) subsetArr.push(subset.trim());
      // 만약 v + 1이 num과 같지 않다면
    } else {
      // 2가지 경우의 수를 모두 생각해 봐야 함(v가 부분 집합에 포함 된다 & 포함되지 않는다)
      // 1. DFS 재귀 호출 -> 이 때, num + 1보다 v가 더 작기 때문에 v번째를 체크(1) 후 v+1로 이동
      check[v] = 1;
      DFS(v + 1);
      // 2. DFS 재귀 호출 -> 위의 DFS(v+1)이 다 순회 후 subset이 arr에 push 되었다는 뜻이므로 체크x(0) 후 v+1로 이동
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return subsetArr.forEach((answer) => console.log(answer));
}

console.log(solution(3));
