/** 알고리즘
 *  1. 가능한 모든 숫자의 조합을 만들어 나열하기(순열을 이용하여 배열에 추가)
 *  2. 만든 배열을 순회하며 소수인 것만 필터링 하기
 */

/** 고려 사항
 *  1. 순열 알고리즘을 따로 사용해야 함
 *  2. 숫자들에 대해 소수인지 판별하기 위해 소수 판별 함수를 따로 만들어야 함
 */

/* 레퍼런스 : https://sumin-k.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-javascript-%EC%99%84%EC%A0%84-%ED%83%90%EC%83%89-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0-1fdcdca4f59b  */

function solution(numbers) {
  let answer = new Set();
  let nums = numbers.split("");

  // 소수 찾는 함수
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 입력 받는 배열에 대해 나올 수 있는 모든 조합의 값을 반환하는 함수
  const getPermutation = (arr, fixed) => {
    // 배열 내 고정되지 않은 요소가 없을 때까지 진행 -> 요소가 없어지면 종료
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        // 기존 고정 값에 arr의 i번째 요소를 추가
        const newFixed = fixed + arr[i];
        // arr를 복사 한 후 i번째 요소 삭제하여 고정되지 않은 요소들로 배열 구성
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        // 만약 newFixed가 set에 없으면서 소수이면 answer에 추가
        if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }
        // 다시 재귀함수를 통해 조합 찾기 진행(복사한 arr와 newFixed를 인수로 추가)
        getPermutation(copyArr, newFixed);
      }
    }
  };
  getPermutation(nums, "");
  return answer.size;
}

console.log(solution("157"));
