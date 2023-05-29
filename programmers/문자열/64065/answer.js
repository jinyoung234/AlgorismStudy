/**
 * 튜플
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=523d243b6f594d7092f8c11b7165be95&pm=s)
 */
function solution(s) {
  const answer = [];
  const tuples = s
    .match(/([0-9,]+)/g)
    .filter((s) => s !== ",")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length);
  tuples.forEach((tuple) => {
    answer.push(tuple.find((e) => !answer.includes(e)));
  });
  return answer.map((e) => Number(e));
}
