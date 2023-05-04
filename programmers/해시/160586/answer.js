/**
 * 대충 만든 자판
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=81a4d1dbaea6488b925c610658b75ca3&pm=s)
 */
function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }

  for (const target of targets) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      count += map.get(target[i]);
    }
    answer.push(count || -1);
  }

  return answer;
}
