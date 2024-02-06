/**
 * 화학식량
 * (https://www.acmicpc.net/problem/2257)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

function solution(expression) {
  const stack = [];

  expression = [...expression];

  const molecularWeightTable = {
    C: 12,
    H: 1,
    O: 16,
  };

  let char = '';

  while (expression.length !== 0) {
    char = expression.shift();

    // 문자가 ) 라면 stack을 pop 하며 분자량의 합을 구한 후 stack에 추가
    if (char === ')') {
      let molecularWeightSum = 0;

      while (true) {
        const molecularWeight = stack.pop();

        if (molecularWeight === '(') break;

        molecularWeightSum += molecularWeight;
      }

      stack.push(molecularWeightSum);
      // 만약 문자가 숫자라면 (분자량 * 숫자) 값을 stack에 추가
    } else if (!Number.isNaN(Number(char))) {
      const molecularWeight = stack.pop();

      stack.push(molecularWeight * Number(char));
      // 만약 문자가 (라면 stack에 추가
    } else if (char === '(') {
      stack.push(char);
      // 문자가 C, H, O 중 하나라면 분자량을 구하여 stack에 추가
    } else {
      stack.push(molecularWeightTable[char]);
    }
  }

  // stack에 있는 분자 들의 합을 구한 후 반환
  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
