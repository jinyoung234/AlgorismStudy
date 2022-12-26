let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const nArr = input[1]
  .split(" ")
  .map((i) => Number(i))
  .sort((a, b) => a - b);
const mArr = input[3].split(" ").map((i) => Number(i));

const answer = [];

mArr.forEach((m) => {
  let res = 0;
  let lp = 0;
  let rp = nArr.length - 1;
  while (lp <= rp) {
    let mid = parseInt((lp + rp) / 2);
    if (m === nArr[mid]) {
      res = 1;
      break;
    } else if (m < nArr[mid]) rp = mid - 1;
    else if (m > nArr[mid]) lp = mid + 1;
  }
  answer.push(res);
});

console.log(answer.join("\n"));
