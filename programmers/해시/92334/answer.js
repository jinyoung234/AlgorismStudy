/**
 * 신고 결과 받기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=9290d65a970c481ea5926455533af879&pm=s)
 */
function solution(id_list, report, k) {
  const answer = [];
  const r = report.map((v) => v.split(" "));
  let singoDic = {};
  let singoCount = {};
  for (let id of id_list) {
    singoDic[id] = [];
    singoCount[id] = 0;
  }
  for (let [userId, singoId] of r) {
    if (!singoDic[userId].includes(singoId) && userId !== singoId)
      singoDic[userId].push(singoId);
  }
  let jungzi = [];
  for (let userId in singoDic) {
    singoDic[userId].forEach((s) => {
      singoCount[s] += 1;
    });
  }
  for (let [userId, num] of Object.entries(singoCount)) {
    if (num >= k) jungzi.push(userId);
  }
  for (let userId in singoDic) {
    let count = 0;
    singoDic[userId].forEach((s) => {
      if (jungzi.includes(s)) count++;
    });
    answer.push(count);
  }
  return answer;
}
