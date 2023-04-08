/**
 * A -> B
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(A, B) {
  function getLastPositionNumber(number) {
    return Number(
      String(number).split("")[String(number).split("").length - 1]
    );
  }
  function removeOneOfLastPosition(number) {
    const splited = String(number).split("");
    splited.pop();
    return Number(splited.join(""));
  }
  let answer = 0;
  while (A !== B) {
    if (A > B) return -1;
    else if (getLastPositionNumber(B) === 1) {
      B = removeOneOfLastPosition(B);
      answer++;
    } else if (getLastPositionNumber(B) !== 1) {
      B /= 2;
      answer += 1;
    }
  }
  return answer + 1;
}

console.log(solution(a, b));
