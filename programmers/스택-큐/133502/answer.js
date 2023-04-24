/**
 * 햄버거 만들기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=35f7055885ef46d69f2358c281b7de70&pm=s)
 */
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join("") == "1231") {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}
