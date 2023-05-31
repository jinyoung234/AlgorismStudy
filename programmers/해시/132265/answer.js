/**
 * 롤케이크 자르기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=be084e484e5b4c43b6e84b075af9a6c0&pm=s)
 */
function solution(topping) {
  let answer = 0;
  const [sisterTopping, brotherTopping] = [new Map(), new Set()];
  topping.forEach((_topping) => {
    sisterTopping.set(_topping, sisterTopping.get(_topping) + 1 || 1);
  });
  topping.forEach((_topping) => {
    sisterTopping.set(_topping, sisterTopping.get(_topping) - 1);
    brotherTopping.add(_topping);
    if (!sisterTopping.get(_topping)) sisterTopping.delete(_topping);
    if (brotherTopping.size === sisterTopping.size) answer++;
  });
  return answer;
}
