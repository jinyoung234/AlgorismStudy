/**
 * 문자열 압축
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=9f105c80aa944069b1050841412bf147&pm=s)
 */

const getPrefixParternLength = (str, n) => {
  const arr = [];
  let stack = [];
  while (str.length) {
    const partern = str.splice(0, n).join("");
    if (stack.length === 0 || stack.at(-1) === partern) {
      stack.push(partern);
      continue;
    } else {
      arr.push(
        stack.length === 0
          ? partern
          : stack.length === 1
          ? stack[0]
          : stack.length + stack[0]
      );
      stack = [];
      stack.push(partern);
    }
  }
  arr.push(stack.length === 1 ? stack[0] : stack.length + stack[0]);
  return arr.join("").length;
};

function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;
  if (s.length === 1) return 1;
  for (let i = 1; i < s.length; i++) {
    const str = [...s];
    const len = getPrefixParternLength(str, i);
    answer = Math.min(answer, len);
  }
  return answer;
}
