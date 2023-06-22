/**
 * 테이블 해시 함수
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=22d41cd90267401b845fee4c1ead3abc&pm=s)
 */
function solution(data, col, row_begin, row_end) {
  // 1. 테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬을 하되,
  // 만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순으로 정렬
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else return a[col - 1] - b[col - 1];
  });
  // 3. 정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
  // 4. row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
  let answer = 0;
  for (let i = row_begin; i <= row_end; i++) {
    answer ^= data[i - 1].map((v) => v % i).reduce((acc, cur) => acc + cur, 0);
  }
  return answer;
}
