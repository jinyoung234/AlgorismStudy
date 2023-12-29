let lines = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, _, k, c] = lines[0].split(' ').map(Number);

let max = 0;

const s = lines.slice(1).map(Number);

// 사진과 동일하게 스시 벨트 생성
const sushiBelt = [...s, ...s.slice(0, k - 1)];

// 만약 쿠폰에 해당하는 초밥이 스시 벨트에 없다면 해당 초밥을 새롭게 스시 벨트에 추가
// "만약 이 번호에 적혀진 초밥이 현재 벨트 위에 없을 경우, 요리사가 새로 만들어 손님에게 제공한다." 요구사항 반영
if (!sushiBelt.includes(c)) sushiBelt.push(c);

// 스시 집합의 모든 경우의 수 확인을 위한 for loop
for (let i = 0; i < n; i += 1) {
  // 슬라이딩 윈도우 적용을 위한 스시 윈도우 생성
  const sushiWindow = sushiBelt.slice(i, i + k);

  // 중복 확인을 위한 스시 set 생성
  const uniqueSushi = new Set(sushiWindow);

  // 중복되지 않는 스시 갯수 초기화
  // (초기 값을 unique value로 잡는 이유는 모든 for문을 순회하면 중복이 없는 윈도우가 무조건 1개 이상 존재하기 때문)
  let uniqueSushiCount = uniqueSushi.size;

  // 쿠폰 초밥이 윈도우에 포함되지 않았다면 1 추가
  if (!uniqueSushi.has(c)) uniqueSushiCount += 1;

  // 최댓값 비교
  max = Math.max(uniqueSushiCount, max);
}

// 최댓값 반환
console.log(max);
