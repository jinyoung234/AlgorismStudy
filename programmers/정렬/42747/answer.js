/** 알고리즘
 * 1. 입력 받은 arr를 내림 차순으로 정렬
 * 2. arr에서 가장 큰 숫자를 max 값으로 설정
 * 3. 1 ~ max 까지 입력 받은 배열을 순회하며 i번째 인용한 논문이 총 몇 개인지 카운트
 * 4. 만약 i번째 인용한 논문의 개수(count)가 i보다 작거나 같다면 answer에 값 할당한 후 순회 종료
 * 5. answer 리턴
 */

/** 예시
 * i - count
 * 1 - 4
 * 2 - 3
 * 3 - 3
 */

function solution(citations) {
  const arr = citations;
  let answer = 0;
  // 내림 차순 정렬
  arr.sort((a, b) => b - a);
  // 인용 횟수가 가장 큰 값이 max
  const max = Math.max(...arr);
  // i = 1 ~ max까지 확인
  for (let i = 1; i <= max; i++) {
    let count = 0;
    // 인용 횟수가 담긴 배열을 순회하며 i보다 크거나 같으면 count 증가
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= i) {
        count = count + 1;
      }
    }
    // 만약 i보다 count가 작거나 같다면 count를 answer에 할당 후 종료
    if (i >= count) {
      answer = count;
      break;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
