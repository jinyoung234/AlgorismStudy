let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .trim()
  .split("\n")
  .slice(1)
  .join(" ")
  .split(" ");

let xArr = [];
let yArr = [];

for (let i = 0; i < 5; i++) xArr.push(input[2 * i]);
for (let i = 1; i < 6; i++) yArr.push(input[2 * i - 1]);

xArr.sort((a, b) => a - b);
yArr.sort((a, b) => a - b);

let str = "";

for (let i = 0; i < xArr.length; i++) {
  str += xArr[i] + " " + yArr[i] + "\n";
}

console.log(str);
