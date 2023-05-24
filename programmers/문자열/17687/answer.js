/**
 * n진수 게임
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=8c56aa5a82b244e7b37051da103bd5f8&pm=s)
 */
function solution(n, t, m, p) {
  let [allNumber, answer] = ["", ""];
  let [turn, idx] = [1, 0];
  while (answer.length != t) {
    allNumber += idx.toString(n);
    if (turn === p) answer += allNumber[idx];
    if (turn === m) turn = 1;
    else turn++;
    idx++;
  }
  return answer.toUpperCase();
}
