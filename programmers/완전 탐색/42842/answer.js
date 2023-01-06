/** 알고리즘
 * 1. 최소 높이를 3이라고 가정
 * 2. 높이 값을 증가 시키며 그에 따른 x값을 구한 후 x - 2 * y - 2가 yellow인지 확인
 * 3. 맞다면 그 x, y값이 각각 넓이 - 높이 이기 때문에 배열에 추가
 */

/** 고려 사항
 * 1. 항상 가로 >= 세로이다.
 * 2. 카펫의 최소 높이는 3이 되어야한다. (테두리(갈색) - 중앙(노란색) - 테두리(갈색))
 * 3. (가로 - 2) * (높이 - 2) = 노란색 격자의 수
 */

function solution(brown, yellow) {
  // 넓이 - 높이를 담기 위한 배열
  let answer = [];
  // brown과 yellow의 합
  const total = brown + yellow;
  // 최소 높이를 3이라고 가정 하고 y가 total보다 작을 때 까지 높이 값을 증가
  for (let y = 3; y <= total; y++) {
    // y값을 통해 x값을 구함
    const x = total / y;
    // 만약 넓이가 정수 값이면서 높이 값보다 크고 넓이 - 2 * 높이 - 2가 yellow와 같다면
    // 그것이 넓이 - 높이 값 이기 때문에 answer에 추가
    if (Number.isInteger(x) && x >= y && (x - 2) * (y - 2) === yellow) {
      answer.push(x);
      answer.push(y);
      break;
    }
  }
  // answer 리턴
  return answer;
}

console.log(solution(10, 2));
