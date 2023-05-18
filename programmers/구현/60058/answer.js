/**
 * 괄호 변환
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=999a6ac6b4334abb9524ff88d31e61a1&pm=s)
 */
const getIsCorrectString = (str) => {
  let [stack, _str] = [[], str.split("")];
  for (let s of _str) {
    if (!stack.length && s === ")") return false;
    if (s === "(") stack.push(s);
    if (stack.at(-1) === "(" && s === ")") stack.pop();
  }
  return stack.length === 0 ? true : false;
};

const divideBalancedBracket = (str) => {
  if (str.length === 0) return "";
  let [u, v] = ["", ""];
  let [leftBracket, rightBracket] = [0, 0];
  for (let s of str) {
    if (s === "(") leftBracket++;
    if (s === ")") rightBracket++;
    if (leftBracket > 0 && rightBracket > 0 && leftBracket === rightBracket) {
      u = str.slice(0, leftBracket + rightBracket).join("");
      v = str.slice(leftBracket + rightBracket).join("");
      return [u, v];
    }
  }
  return [u, v];
};

const makeCorrectBracket = (str) => {
  if (!str.length) return "";
  let [u, v] = divideBalancedBracket(str.split(""));
  let result = "";
  if (getIsCorrectString(u)) {
    return u + makeCorrectBracket(v);
  }
  if (!getIsCorrectString(u)) {
    v = makeCorrectBracket(v);
    result = "(" + v + ")";
    result += u.slice(1, u.length - 1).replace(/\(|\)/g, (s) => {
      if (s === "(") return ")";
      if (s === ")") return "(";
    });
    return result;
  }
};

function solution(p) {
  return makeCorrectBracket(p);
}
