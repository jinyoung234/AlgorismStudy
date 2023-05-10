/**
 * 광물 캐기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=ff47424fae5c4fc5b5c22f66b15aa00c&pm=s)
 */
function solution(picks, minerals) {
  let answer = 0;
  const picksSum = picks.reduce((a, b) => a + b, 0);
  const sliceMinerals = minerals.slice(0, picksSum * 5);
  const countedMinerals = sliceMinerals.reduce((acc, cur, idx) => {
    let index = Math.floor(idx / 5);
    if (!acc[index]) acc[index] = [0, 0, 0];
    if (cur === "diamond") acc[index][0]++;
    else if (cur === "iron") acc[index][1]++;
    else if (cur === "stone") acc[index][2]++;
    return acc;
  }, []);
  const sortedMinerals = countedMinerals.sort((a, b) => {
    if (b[0] === a[0]) return b[1] - a[1];
    return b[0] - a[0];
  });
  for (let [d, i, s] of sortedMinerals) {
    if (picks[0] > 0) {
      answer += d + i + s;
      picks[0]--;
    } else if (picks[1] > 0) {
      answer += d * 5 + i + s;
      picks[1]--;
    } else if (picks[2] > 0) {
      answer += d * 25 + i * 5 + s;
      picks[2]--;
    }
  }
  return answer;
}
