/**
 * 쿼드압축 후 개수 세기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=e00d06d4277c40169b448de7689089e2&pm=s)
 */
function solution(arr) {
  const divide = (sy, sx, n) => {
    const node = arr[sy][sx];
    const half = Math.floor(n / 2);
    for (let i = sy; i < sy + n; i++) {
      for (let j = sx; j < sx + n; j++) {
        // 만약 나눌 수 있다면 1 -> 2 -> 3 -> 4분면 순으로 쪼개기 시작
        if (arr[i][j] !== node) {
          // 1사분면
          divide(sy, sx + half, half);
          // 2사분면
          divide(sy, sx, half);
          // 3사분면
          divide(sy + half, sx, half);
          // 4사분면
          divide(sy + half, sx + half, half);
          // 모두 나누었다면 return
          return;
        }
      }
    }
    answer[node]++;
  };
  const answer = [0, 0];
  const n = arr.length;
  divide(0, 0, n);
  return answer;
}
