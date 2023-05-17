/**
 * 택배상자
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=ee260c86db324c1eb02f12f918b379b4&pm=s)
 */
function solution(order) {
  let [item, answer] = [1, 0];
  const sub_container_belt = [];
  for (let i = 0; i < order.length; i++) {
    if (order[i] === item) {
      item++;
      answer++;
      continue;
    }
    if (order[i] > item) {
      for (let j = item; j < order[i]; j++) sub_container_belt.push(j);
      item = order[i] + 1;
      answer++;
      continue;
    }
    if (sub_container_belt.pop() === order[i]) answer++;
    else break;
  }
  return answer;
}
