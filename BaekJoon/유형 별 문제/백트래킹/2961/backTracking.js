const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const ingredients = input.map((s) => s.split(" ").map(Number));

let min = Number.MAX_SAFE_INTEGER;

const getDiff = (n, r, ingredients) => {
  let [sourTaste, bitterTaste] = [1, 0];
  // 백트래킹으로 각 재료 조합을 구해서 특정 조합에 대한 신맛 쓴맛의 차이를 기존 값과 비교하여 최솟값을 구한다.
  const dfs = (l, s) => {
    if (l === r) {
      min = Math.min(min, sourTaste > bitterTaste ? sourTaste - bitterTaste : bitterTaste - sourTaste);
      return;
    } else {
      for (let i = s; i < n; i++) {
        sourTaste *= ingredients[i][0];
        bitterTaste += ingredients[i][1];
        dfs(l + 1, i + 1);
        sourTaste /= ingredients[i][0];
        bitterTaste -= ingredients[i][1];
      }
    }
  };
  // 백트래킹 시작
  dfs(0, 0);
};

// 재료를 1 ~ n개 뽑았을 때 신맛과 쓴 맛의 차이를 구한다.
for (let i = 1; i <= n; i++) {
  getDiff(n, i, ingredients);
}

// 최솟값 출력
console.log(min);
