/**
 * 트럭
 * -> 프로그래머스의 다리를 지나는 트럭과 동일
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_n, _w, _L] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);
const _truckWeights = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);

function solution(n, w, L, truckWeights) {
  let [answer, bridgeWeight] = [0, 0];
  const bridge = Array.from({ length: w }, () => 0);
  while (truckWeights.length) {
    // 트럭이 다리에서 나온 후 outTruck 무게 만큼 bridgeWeight 감소 시킨다.
    const outTruck = bridge.shift();
    bridgeWeight -= outTruck;
    // truckWeights에 있는 트럭 꺼낸다.
    const truck = truckWeights.shift();
    // 만약 다리 무게 + 현재 트럭의 무게가 L보다 크다면 다리만 움직인다.
    if (bridgeWeight + truck > L) {
      bridge.push(0);
      truckWeights.unshift(truck);
      // 현재 트럭이 다리를 지날 수 있다면 bridge에 truck을 push 후
      // 트럭 무게 만큼 bridgeWeight에 더한다.
    } else {
      bridge.push(truck);
      bridgeWeight += truck;
    }
    // 다리 건넜으니 answer 1증가 시킨다.
    answer++;
  }
  // while이 끝나면 마지막 트럭이 올라오고 끝날 것이므로 answer에 bridge 길이 만큼 더하여 반환
  return answer + bridge.length;
}

console.log(solution(_n, _w, _L, _truckWeights));
