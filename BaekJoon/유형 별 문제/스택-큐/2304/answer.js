/**
 * 창고 다각형
 * (https://www.notion.so/b020f3e8c15b4e828ba5ca4e4dc9005e?pvs=4)
 */

let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

function solution(boxes) {
  // 기둥들을 x축 위치에 따라 오름차순으로 정렬
  boxes = boxes.sort((b1, b2) => b1[0] - b2[0]);

  // 최대 높이와 최대 높이 기둥의 인덱스 찾음
  const maxHeight = Math.max(...boxes.map((box) => box[1]));
  const mhIdx = boxes.findIndex((box) => box[1] === maxHeight);

  // 최대 높이 기둥을 중심으로 두 부분으로 나눔
  const [area1, area2] = [boxes.slice(0, mhIdx + 1), boxes.slice(mhIdx)];

  // 최대 높이를 초기 면적에 추가
  let sum = maxHeight;

  // 왼쪽 부분의 면적을 계산
  sum += area1.reduce((acc, currentBox, currentIndex, area) => {
    if (currentIndex === area.length - 1) return acc; // 마지막 기둥은 처리하지 않음

    const x = area[currentIndex + 1][0] - currentBox[0]; // 현재 기둥과 다음 기둥 사이의 거리(x축).
    const y = Math.max(...area.slice(0, currentIndex + 1).map((b) => b[1])); // 현재 기둥까지의 최대 높이.

    return acc + x * y; // 거리와 최대 높이를 곱하여 면적에 더함
  }, 0);

  // 오른쪽 부분의 면적을 계산
  sum += area2.reduceRight((acc, currentBox, currentIndex, area) => {
    if (currentIndex === 0) return acc; // 첫 번째 기둥은 처리하지 않는다.

    const x = currentBox[0] - area[currentIndex - 1][0]; // 현재 기둥과 이전 기둥 사이의 거리(x축).
    const y = Math.max(...area.slice(currentIndex).map((b) => b[1])); // 현재 기둥부터 마지막 기둥까지의 최대 높이.

    return acc + x * y; // 거리와 최대 높이를 곱하여 면적에 더함
  }, 0);

  return sum; // 총 면적을 반환
}

console.log(solution(input.slice(1)));
