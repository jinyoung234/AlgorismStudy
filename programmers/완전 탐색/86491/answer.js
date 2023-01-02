/* [최소 직사각형] */

/** 고려 사항
 * 1. 모든 명함을 수납 할 수 있는 최소 크기여야 한다.
 * 2. 명함을 회전 시킬 수 있다.
 */

/** 알고리즘
 *  1. 명함들을 순회하며 만약 세로가 더 큰 명함이라면 가로가 크도록 스위칭
 *  2. 가로, 세로를 정렬
 *  3. 가로 중에서 가장 큰 값, 세로 중에서 가장 큰 값을 곱하여 리턴
 */

function solution(card) {
  // 명함들 순회하며 만약 세로가 더 큰 명함이라면 가로가 크도록 스위칭
  for (let i = 0; i < card.length; i++) {
    if (card[i][0] < card[i][1]) {
      [card[i][0], card[i][1]] = [card[i][1], card[i][0]];
    }
  }
  // 각각 가로, 세로 내림 차순으로 정렬 후 각각 최대값 저장
  let x = card.sort((a, b) => {
    return b[0] - a[0];
  })[0][0];
  let y = card.sort((a, b) => {
    return b[1] - a[1];
  })[0][1];
  return x * y;
}

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
