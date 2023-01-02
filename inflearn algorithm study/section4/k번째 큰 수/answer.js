/**
 * [고려 사항]
 * 1. 같은 숫자 카드가 여러 장 있을 수 있다.
 * 2. 카드 3장을 뽑아서 더해야 한다.
 * 3. K번째 큰 수를 출력해야 한다.
 */

/**
 * [알고리즘]
 * 1. 3장을 뽑은 숫자 중 가장 작은 값 ~ 가장 큰 값까지의 모든 경우의 수를 생각해서 나열
 * 2. 중복된 값 방지를 위한 중복 제거
 * 3. 오름 차순으로 정렬
 * 4. k번째 큰 수를 출력
 */

function solution(k, arr) {
  const numArr = arr;
  // 더한 값들을 추가하다 보면 중복된 값들이 있을 것이기 때문에 set을 통해 제거
  let temp = new Set();
  // 모든 경우의 수를 생각하여 3장을 뽑은 후 모두 더 하여 set에 추가
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      for (let k = j + 1; k < numArr.length; k++) {
        temp.add(numArr[i] + numArr[j] + numArr[k]);
      }
    }
  }
  // 오름 차순으로 재 정렬
  const result = Array.from(temp).sort((a, b) => {
    return b - a;
  });

  // k번째 수를 리턴
  return result[k - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
