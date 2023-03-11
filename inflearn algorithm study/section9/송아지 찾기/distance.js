/**
 * 레퍼런스
 */
function solution(s, e) {
  let answer = 0;
  // 체크 배열과 distance를 위한 배열
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  // 출발 지점 1로 체크
  ch[s] = 1;
  queue.push(s); // 출발 지점 push
  dis[s] = 0; // 현수의 출발 지점을 0레벨로 설정
  while (queue.length) {
    let x = queue.shift();
    // +1, -1, +5칸 이동 (nx는 기존 x에서 +1, -1, +5 이동한 값)
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 목표지점에 도달할 경우 다음 값을 리턴
      if (nx === e) return dis[x] + 1;
      // 목표 지점에 도달하지 못할 경우
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        // 체크 배열 +1 -> 큐에 nx 추가 -> 부모 노드 level에서 + 1 한 값을 자식 노드에 추가
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
