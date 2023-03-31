/**
 * 구명보트
 */
function solution(people, limit) {
  people.sort((a, b) => b - a); // 무거운 사람 순으로 정렬
  let count = 0; // 구명보트 개수
  let left = 0; // 가장 무거운 사람의 인덱스
  let right = people.length - 1; // 가장 가벼운 사람의 인덱스
  while (left <= right) {
    // 가장 무거운 사람이 가장 가벼운 사람과 작거나 같을 때 까지 순회
    if (people[left] + people[right] <= limit) {
      // 가장 가벼운 사람과 가장 무거운 사람이 함께 탈 수 있을 때
      left++; // 가장 무거운 사람의 인덱스 증가
      right--; // 가장 가벼운 사람의 인덱스 감소
    } else {
      // 함께 탈 수 없을 때
      left++; // 가장 무거운 사람의 인덱스 증가
    }
    count++; // 구명보트 개수 증가
  }
  return count; // 구명보트 개수 반환
}
[80, 70, 50, 50];

console.log(solution([70, 50, 80, 50], 100));
