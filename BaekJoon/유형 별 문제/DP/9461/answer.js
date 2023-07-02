/**
 * 파도반 수열
 * (https://www.notion.so/7e7caf21b30b4a07b2ea4c14d28b4ef1)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());

while (n--) {
  const len = Number(input.shift());
  const padovan = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
  for (let i = 11; i <= len; i++) {
    padovan[i] = padovan[i - 5] + padovan[i - 1];
  }
  console.log(padovan[len]);
}
