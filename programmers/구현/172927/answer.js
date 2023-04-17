/**
 * 광물 캐기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=ff47424fae5c4fc5b5c22f66b15aa00c&pm=s)
 */
function solution(picks, minerals) {
  let answer = 0;
  // 곡갱이들의 총 개수
  const picksSum = picks.reduce((acc, cur) => acc + cur, 0);
  // 0 ~ 곡갱이 총 개수 * 5까지의 광물 배열(한 곡갱이당 광물 5개씩 캘 수 있기 때문)
  const slicedMinerals = minerals.slice(0, picksSum * 5);
  // 배열마다 5개씩 배열로 묶어 2차원 배열 형태로 반환. (배열 내 요소는 순서대로 다이아, 철, 돌의 개수)
  const countedMinerals = slicedMinerals.reduce((acc, cur, idx) => {
    // acc의 index (광물을 5개씩 계산 하여 넣기 때문에 idx / 5를 하는 것)
    const index = Math.floor(idx / 5);
    // 만약 acc index 번째 값이 undefined 라면 [0, 0, 0] 배열 추가(각각 다이아, 철, 돌)
    if (!acc[index]) acc[index] = [0, 0, 0];
    // 현재 값이 다이아, 철, 돌 인지에 따라 acc에 count
    if (cur === "diamond") acc[index][0]++;
    else if (cur === "iron") acc[index][1]++;
    else if (cur === "stone") acc[index][2]++;
    return acc;
  }, []);
  // 다이아가 많은 순으로 배열들을 재 정렬
  const sortedMinerals = countedMinerals.sort((a, b) => {
    // 다이아가 없다면 철이 많은 순서로 정렬
    if (b[0] === a[0]) return b[1] - a[1];
    return b[0] - a[0];
  });
  // 각 sortedMinerals 들을 순회
  for (const [dia, iron, stone] of sortedMinerals) {
    // 만약 다이아 곡갱이가 있을 경우
    if (picks[0] > 0) {
      // answer에 다이아 * 1, 철 * 1, 돌의 갯수 * 1을 더하기
      answer += dia + iron + stone;
      // 다이아 곡갱이 갯수 -1
      picks[0]--;
      // 만약 다이아 곡갱이가 없고 철 곡갱이가 있을 경우
    } else if (picks[1] > 0) {
      // answer에 다이아 * 5, 철 * 1, 돌의 갯수 * 1을 더하기
      answer += dia * 5 + iron + stone;
      // 철 곡갱이 갯수 -1
      picks[1]--;
      // 만약 돌 곡갱이만 있을 경우
    } else if (picks[2] > 0) {
      // answer에 다이아 * 25, 철 * 5, 돌의 갯수 * 1을 더하기
      answer += dia * 25 + iron * 5 + stone;
      // 돌 곡갱이 갯수 -1
      picks[2]--;
    }
  }
  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    ["stone", "stone", "stone", "stone", "iron", "iron", "iron", "stone"]
  )
);
