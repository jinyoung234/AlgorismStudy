function solution(n, k) {
  // 왕자들 시계 방향으로 앉힘
  let queue = Array.from({ length: n }, (_, i) => i + 1);
  // 왕자가 한명남을 때 까지 순회
  while (queue.length !== 1) {
    // 1 ~ k - 1까지 queue의 가장 마지막으로 이동
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    // k번째 숫자를 외치면 그 왕자 queue에서 제거
    queue.shift();
  }
  // 가장 마지막 까지 남아 있는 왕자 리턴
  return queue[0];
}

console.log(solution(8, 3));
