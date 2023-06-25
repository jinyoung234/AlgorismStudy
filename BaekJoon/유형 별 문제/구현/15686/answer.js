/**
 * 치킨 배달
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=e5c5f270e92a416dacee35644392bdf8&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [_n, _m] = input.shift().split(" ").map(Number);
const _city = input.map((s) => s.split(" ").map(Number));

// 치킨집 가는 조합을 배열 형태로 생성하는 함수
const getChichenComb = (chickenInfo, r) => {
  const arr = [];
  const temp = [];
  function dfs(l, s) {
    if (l === r) {
      arr.push(temp.slice());
      return;
    }
    for (let i = s; i < chickenInfo.length; i++) {
      let [y, x] = chickenInfo[i];
      temp.push([y, x]);
      dfs(l + 1, i + 1);
      temp.pop();
    }
  }
  dfs(0, 0);
  return arr;
};

// 치킨집과 집의 x, y좌표를 이용하여 치킨 거리를 구하는 함수
const getDistance = ([cy, cx], [hy, hx]) => {
  return Math.abs(cy - hy) + Math.abs(cx - hx);
};

function solution(info, city) {
  const [n, m] = info;
  const [chickenInfo, houseInfo] = [[], []];
  // 완전 탐색을 하며 치킨집과 각각의 집의 x, y 좌표를 저장한다.
  /**
   * [TestCase 2번 예시]
   * - chickenInfo = [[0, 1], [3, 0], [4, 0], [4, 1], [4, 4]]
   * - houseInfo = [[0, 3], [1, 0], [1, 2], [3, 3], [3, 4], [4, 3]]
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (city[i][j] === 1) houseInfo.push([i, j]);
      if (city[i][j] === 2) chickenInfo.push([i, j]);
    }
  }
  // 치킨집 정보와 m을 이용하여 폐업시키지 않을 치킨집들에 대한 조합을 배열 형태로 생성
  const chicken_comb = getChichenComb(chickenInfo, m);
  let min_city_chicken_distance = Number.MAX_SAFE_INTEGER;
  // 조합들에 대해 순회하며 최소 도시 치킨 거리 구함
  for (const comb of chicken_comb) {
    // 각 조합 별 도시 치킨 거리 변수
    let city_chicken_distance = 0;
    // 각각의 집들에 대해서 순회
    for (const [hy, hx] of houseInfo) {
      let min_chicken_distance = Number.MAX_SAFE_INTEGER;
      // 특정 조합의 대한 치킨집 들을 순회
      for (const [cy, cx] of comb) {
        // 치킨집과 집의 x, y좌표를 통해 치킨 거리를 계산
        const distance = getDistance([cy, cx], [hy, hx]);
        // 치킨 거리 최솟값 비교
        min_chicken_distance = Math.min(min_chicken_distance, distance);
      }
      // 각 도시의 최소 치킨 거리를 도시 치킨 거리에 더해줌
      city_chicken_distance += min_chicken_distance;
    }
    // 이전 도시 치킨 거리와 현재 도시 치킨 거리를 비교 하여 최소 도시 치킨 거리를 구함
    min_city_chicken_distance = Math.min(
      min_city_chicken_distance,
      city_chicken_distance
    );
  }
  // 최소 도시 치킨 거리 반환
  console.log(min_city_chicken_distance);
}

solution([_n, _m], _city);
