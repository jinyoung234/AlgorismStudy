function solution(n, k) {
  let queue = [];
  // 왕자들 시계 방향으로 앉힘
  for (let i = 1; i <= 8; i++) {
    queue.push(i);
  }
  // 왕자들 숫자 세는 count 추가
  let count = 0;
  // 왕자가 1명 남을 때 까지 계속 순회
  while (queue.length !== 1) {
    // 왕자들 숫자 외침
    count++;
    // 만약 숫자 외쳤을 때 3의 배수 (3, 6, 9 ... ) 일 경우
    if (count % 3 === 0) {
      // 왕자는 공주 구하러 가는데서 제외되고 원 밖으로 나옴
      queue.shift();
      // 만약 아닐 경우
    } else {
      // 가장 마지막 자리로 이동 후 각 왕자들은 한칸씩 이동
      for (let i = 0; i < queue.length - 1; i++) {
        [queue[i], queue[i + 1]] = [queue[i + 1], queue[i]];
      }
    }
  }
  // 가장 마지막 까지 남아 있는 왕자 리턴
  return queue[0];
}

console.log(solution(8, 3));
