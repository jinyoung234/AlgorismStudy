// 문제 풀이

// 알아야 할 사실
// 1. 전체 nums에 있는 폰켓몬들 중에서 nums/2 만큼만 가져갈 수 있다.
// 2. 최대값은 nums / 2지만 가장 많은 종류의 폰켓몬을 가져갈 수 있는 건 nums에서 중복되지 않은 값들을 모조리 가져가는 경우다.

function solution(nums) {
  let answer = [];
  // 중복 값 제거한 숫자 set
  let duplicateNumberArr = new Set(nums);
  // 고를 수 있는 최대 폰켓몬 수
  let max = nums.length / 2;
  // 순회
  for (let i = 0; i < duplicateNumberArr.size; i++) {
    // 만약 고른 폰켓몬 수가 고를 수 있는 최대 폰켓몬 수 보다 작은 경우에만 로직이 돌아가게 함
    if (answer.length < max) {
      // 담은 폰켓몬 개수가 담을 수 있는 최대 폰켓몬 수 보다 작을 때 까지 폰켓몬 추가
      answer.push(duplicateNumberArr[i]);
    }
  }
  // 최대 폰켓몬 종류 개수 반환
  return answer.length;
}

console.log(solution([3, 3, 3, 2, 2, 2]));

// 레퍼런스 : https://mofari.tistory.com/7
