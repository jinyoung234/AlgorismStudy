function solution(numArr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let num of numArr) {
    let sum = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = num;
    } else if (sum === max) {
      if (num > answer) answer = num;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
