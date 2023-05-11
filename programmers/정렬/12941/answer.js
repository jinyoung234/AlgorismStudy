/**
 * 최솟값 만들기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=b569e099d8674e5181bd8ab1b8992c74&pm=s)
 */
function solution(A, B) {
  let answer = 0;
  // 둘 중 하나는 내림 차순, 오름 차순으로 각각 정렬(A,B 순서 바꿔도 상관 X)
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  // a,b 순회하며 a*b를 answer에 추가
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
