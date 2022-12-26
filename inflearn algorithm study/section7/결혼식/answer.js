let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join(" ")
  .split(" ")
  .map((i) => Number(i));

let allTime = [];
let answer = 0;
let count = 0;

for (let i = 0; i < input.length / 2; i++) {
  allTime.push([input[2 * i], "s"]);
  allTime.push([input[2 * i + 1], "e"]);
}

allTime.sort((a, b) => {
  if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
  else return a[0] - b[0];
});

for (let part of allTime) {
  if (part[1] === "s") count++;
  else count--;
  answer = Math.max(answer, count);
}
console.log(allTime, answer);
