/**
 * 두 배열 합치기 (https://velog.io/@jinyoung234/Algorithm-JS-%EB%91%90-%EB%B0%B0%EC%97%B4-%ED%95%A9%EC%B9%98%EA%B8%B0)
 */

function solution(A, B) {
  // 두 포인터 변수 p1, p2를 0으로 초기화
  let p1 = 0;
  let p2 = 0;
  let n = A.length;
  let m = B.length;
  let answer = [];
  // 포인터 변수가 각각 n, m 보다 커질 경우 종료
  while (p1 < n && p2 < m) {
    // 만약 A보다 B에 있는 값이 더 클 경우 A에 있는 값을 answer에 추가 후 p1 1증가(후위 증가)
    if (A[p1] <= B[p2]) answer.push(A[p1++]);
    // 만약 A가 더 클 경우 B에 있는 값을 answer에 추가 후 p2 1증가
    else answer.push(B[p2++]);
  }
  // 만약 A에서 answer에 추가 되어야 할 값이 있다면 마저 추가
  while (p1 < n) answer.push(A[p1++]);
  // 만약 B에서 answer에 추가 되어야 할 값이 있다면 마저 추가
  while (p2 < m) answer.push(B[p2++]);
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
