/**
 * 괄호 회전하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=5aab1f3dc947410b8ec108c6812598a5&pm=s)
 */

function handleIsCorrect(strArr) {
  let stack = [];
  for (const str of strArr) {
    if (stack.length === 0 && (str === "]" || str === ")" || str === "}"))
      return false;
    if (str === ")" && stack[stack.length - 1] === "(") stack.pop();
    else if (str === "]" && stack[stack.length - 1] === "[") stack.pop();
    else if (str === "}" && stack[stack.length - 1] === "{") stack.pop();
    else stack.push(str);
  }
  if (stack.length === 0) return true;
  else return false;
}

function solution(s) {
  s = s.split("");
  let answer = 0;
  let count = 0;
  if (handleIsCorrect(s)) answer++;
  while (count != s.length - 1) {
    count++;
    s.push(s.shift());
    console.log(s);
    if (handleIsCorrect(s)) answer++;
  }
  return answer;
}
