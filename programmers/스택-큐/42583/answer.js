/**
 * 다리를 지나는 트럭
 */
function solution(bridge_length, weight, truck_weights) {
  // 다리 추가
  let bridge = Array.from({ length: bridge_length }, () => 0);
  // 초기 다리 무게 0으로 초기화
  let bridge_weight = 0;
  // 시간 0으로 초기화
  let time = 0;
  // 트럭이 모두 다리로 갈 때 까지 순회
  while (truck_weights.length) {
    // 시간 1 증가
    time++;
    // 다리에서 꺼낸 값을 다리 무게에서 뺌
    bridge_weight -= bridge.shift();
    // 현재 다리 무게 + 들어올 트럭 무게가 다리가 버틸 최대 무게 보다 크다면
    if (bridge_weight + truck_weights[0] > weight) {
      // bridge에 0추가 => 다리에 아무것도 추가 안한다는 뜻
      bridge.push(0);
      // 그게 아니라면 트럭은 다리 위로 올라가고 올라가는 트럭 무게 만큼 현재 다리의 무게에 더해줌
    } else {
      const curTruck = truck_weights.shift();
      bridge.push(curTruck);
      bridge_weight += curTruck;
    }
  }
  // time은 마지막 트럭이 다리 위로 진입한 시간 만큼 담겨 있으므로,
  // 마지막 트럭이 다리 통과하는 시간은 bridge_length만큼 더해줘야 함
  return time + bridge_length;
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
