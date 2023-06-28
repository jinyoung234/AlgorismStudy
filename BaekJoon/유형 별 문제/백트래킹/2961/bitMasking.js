const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const ingredients = input.map((s) => s.split(" ").map(Number));

let min = Number.MAX_SAFE_INTEGER;

// n 번째 비트가 1인지 0인지 판별하는 함수
const isNthBit = (target, n) => {
  return target & (1 << n) ? true : false;
};

// 비트 마스킹을 사용한 getDiff 함수
const getDiffBitMasking = (n, ingredients) => {
  const max = 1 << n;
  // for 문을 돌며 부분 집합을 구한다.
  // ex) 01 -> A 선택 X B 선택, 10 -> A 선택 B 선택 X. 11 -> A 선택 B 선택
  // 바깥 for문의 범위가 1 ~ max인 이유는 부분 집합의 총 갯수가 2^n - 1이기 때문이다.
  // 또한, set을 2진수로 변환하면 선택한 집합의 종류가 된다.
  for (let set = 1; set < max; set++) {
    let [sourTaste, bitterTaste] = [1, 0];
    // 각 부분 집합에 포함된 요소들을 순회 한다.
    for (let i = 0; i < n; i++) {
      // 만약 i번째 비트(부분 집합 내 요소)가 1인 경우 sourTaste와 bitterTaste를 추가
      if (isNthBit(set, i)) {
        sourTaste *= ingredients[i][0];
        bitterTaste += ingredients[i][1];
      }
    }
    // diff = 신맛 - 쓴맛의 차이
    const diff = Math.abs(sourTaste - bitterTaste);
    // min과 diff중 최소 값을 비교
    min = Math.min(min, diff);
  }
};

// 비트 마스킹을 통해 최솟 값을 구한다.
getDiffBitMasking(n, ingredients);

// 최솟 값 출력
console.log(min);
