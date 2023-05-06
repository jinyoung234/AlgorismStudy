/**
 * 실패율
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=1bb7beb986e04bd483c1d7729746d7c7&pm=s)
 */
function solution(N, stages) {
  var answer = [];
  let entireStage = stages.length;
  for (let i = 1; i <= N; i++) {
    let fail = 0;
    for (let j = 0; j < stages.length; j++) if (i === stages[j]) fail++;
    answer.push([i, fail / entireStage]);
    entireStage -= cnt;
  }
  return answer
    .sort((a, b) => b[1] - a[1])
    .map(([stageNum, _]) => {
      return stageNum;
    });
}
