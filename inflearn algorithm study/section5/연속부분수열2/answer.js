function solution(m, arr) {
  let lt = (answer = sum = 0);
  for (let rt = 0; rt < arr.length; rt++) {
    // 만약 sum이 m보다 작거나 같을 경우 sum에 rt - lt + 1만큼 추가
    sum += arr[rt];
    if (sum <= m) answer += rt - lt + 1;
    // 만약 sum이 m보다 클 경우
    else {
      // sum이 m보다 작거나 같아질 때 까지 while문 순회
      // sum에 arr의 lt번째 값 만큼 빼준 후 lt 1 증가
      while (sum > m) sum -= arr[lt++];
      // lt 위치를 옮기고 나서도 다시 수열 값 answer에 추가하는 거 잊지 말기
      // (옮기고 나서도 lt ~ rt 사이의 있는 값들도 수열에 포함되기 때문)
      answer += rt - lt + 1;
    }
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
