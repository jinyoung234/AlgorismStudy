/**
 * 로또
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=f8a2b1b013a4410aae30144504c35028&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const printAllCombinationCase = (n, r, numbers) => {
  const result = [];
  const dfs = (l, s) => {
    if (l === r) {
      console.log(result.join(" "));
      return;
    } else {
      for (let i = s; i < n; i++) {
        result.push(numbers[i]);
        dfs(l + 1, i + 1);
        result.pop();
      }
    }
  };
  dfs(0, 0);
};

while (true) {
  const test_case = input.shift();
  // testcase가 0이라면 종료
  if (test_case === "0") break;
  const arr = test_case.split(" ").map(Number);
  const [n, numbers] = [arr[0], arr.slice(1)];
  // n개 중에서 6개를 조합으로 나오는 모든 case를 출력하기 위한 dfs 함수 생성
  printAllCombinationCase(n, 6, numbers);
  // 각 줄마다 공백 추가
  console.log(" ");
}
