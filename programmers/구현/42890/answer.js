/**
 * 후보키
 * (https://www.notion.so/1f07083f63e14aceae05674c56a3d0f4)
 */
const isMinimality = (combi_subset, uniquelessArr) => {
  // 유일성을 만족하는 부분 집합 들을 순회
  for (let uni_subset of uniquelessArr) {
    // every를 통해 유일성 배열의 부분 집합 내 원소가 조합 내 부분 집합에 하나라도 포함되는지 확인
    const isNotMinimality = uni_subset.every((element) => combi_subset.includes(element));
    // 하나라도 포함된다 -> 최소성 만족 x -> false를 early return
    if (isNotMinimality) return false;
  }
  // 단 하나도 포함되지 않는다 -> 최소성 만족 -> true
  return true;
};

const isUniqueness = (relation, subset) => {
  // // 중복 방지를 위한 set 객체 생성
  const set = relation.reduce((acc, rel) => {
    // 모든 rel에 대해서 부분 집합(조합) 내 idx 번째에 있는 값들로만 구성하여 set에 추가
    // ex) combination => [0, 1], rel => [100, ryan, music, 2] 일 경우
    // 각 relation 에서 0번째, 1번째 값들로 변경 후 join (100,ryan) 하여 set에 추가
    return acc.add(subset.map((idx) => rel[idx]).join(""));
  }, new Set());
  // set의 size와 relation의 length가 같다면 유일성을 만족 -> true
  // set 내 중복되는 값이 있다면 유일성을 만족하지 않음 -> false
  if (set.size === relation.length) return true;
  else return false;
};

const getCombination = (n, r) => {
  const result = [];
  const tmp = [];
  function dfs(l, s) {
    if (l === r) {
      result.push(tmp.slice());
    } else {
      for (let i = s; i < n; i++) {
        tmp.push(i);
        dfs(l + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 0);
  return result;
};

function solution(relation) {
  let answer = 0;
  const combinations = [];
  const n = relation[0].length;
  // relation 에서 가능한 조합의 부분 집합들을 생성
  for (let r = 1; r <= n; r++) {
    combinations.push(...getCombination(n, r));
  }
  // 유일성을 만족하는 부분 집합들의 배열
  const uniquelessArr = [];
  // 부분 집합들을 순회하며 유일성과 최소성을 만족하면 그 부분 집합을 uniquelessArr에 추가 후 answer 1 증가
  combinations.forEach((subset) => {
    if (isUniqueness(relation, subset) && isMinimality(subset, uniquelessArr)) {
      answer++;
      uniquelessArr.push(subset);
    }
  });
  // 유일성과 최소성을 모두 만족하는 키의 갯수 반환
  return answer;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
