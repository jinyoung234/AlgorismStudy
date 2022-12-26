let answer = new Array();

let changeSort = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join()
  .split(" ")
  .map((i) => Number(i));

let initialSort = [...changeSort].sort();

for (let i = 0; i < changeSort.length; i++) {
  if (changeSort[i] !== initialSort[i]) {
    answer.push(i + 1);
  }
}
console.log(answer);
