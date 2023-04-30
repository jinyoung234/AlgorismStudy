/**
 * 로또의 최고 순위와 최저 순위
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=6f5a4ab8729f46ffbff881e97bee752c&pm=s)
 */
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const deleteLotto = lottos.filter((n) => {
    return n === 0;
  }).length;
  const correct = lottos.filter((n) => {
    return win_nums.includes(n);
  }).length;
  let [min, max] = [correct, correct + deleteLotto];
  return [rank[max], rank[min]];
}
