let cacheList = [0, 0, 0, 0, 0];

let workList = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join()
  .split(" ")
  .map((i) => Number(i));

workList.forEach((element) => {
  let pos = -1;
  let cacheSize = cacheList.length - 1;
  // workList element가 cache에 있는지 확인 => 있다면 pos = 0 아니면 pos = -1
  if (cacheList.includes(element)) pos = 0;
  // cache miss
  if (pos === -1) {
    cacheList.unshift(element);
    cacheList.pop();
    // cache hit
  } else {
    for (let i = cacheSize; i >= 1; i--) {
      cacheList[i] = cacheList[i - 1];
    }
    cacheList[0] = element;
  }
});

console.log(cacheList);
