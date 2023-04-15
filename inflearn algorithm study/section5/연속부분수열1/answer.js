function solution(n, m, arr) {
  // 포인터 변수 lt
  let lt = 0;
  // sum과 answer 0 초기화
  let sum = 0;
  let answer = 0;
  // 포인터 rt를 배열 끝까지 순회
  for (let rt = 0; rt < n; rt++) {
    // arr의 rt번째 값을 sum에 추가
    sum += arr[rt];
    // sum이 m보다 커지면
    if (sum > m) {
      // sum이 m보다 작아질 때까지
      while (sum > m) {
        // arr의 lt번째 값을 sum에 빼주고 lt 1 증가
        sum -= arr[lt++];
        // 뺏을 때 m과 같다면 answer 1 증가
        if (sum === m) answer++;
      }
      // 만약 sum이 m과 같으면 answer 1증가
    } else if (sum === m) answer++;
  }
  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
