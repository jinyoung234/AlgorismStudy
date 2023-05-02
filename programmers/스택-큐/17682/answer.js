/**
 * 다트 게임
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=5529519df8164c54a33848a3fa3e92b3&pm=s)
 */
function solution(dartResult) {
  let answer = 0;
  let score = 0;
  let stack = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === "S") {
      stack.push(score);
    } else if (dartResult[i] === "D") {
      stack.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      stack.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      stack[stack.length - 2] = stack[stack.length - 2] * 2;
      stack[stack.length - 1] = stack[stack.length - 1] * 2;
    } else if (dartResult[i] === "#") {
      stack[stack.length - 1] = -1 * stack[stack.length - 1];
    }
  }
  answer = stack.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
