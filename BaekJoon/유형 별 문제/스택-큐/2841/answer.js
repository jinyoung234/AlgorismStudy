/**
 * 외계인의 기타 연주
 * (https://www.notion.so/6cea3eb1a4024cd69ccfcdcddfb49d6d?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

function solution(melodies) {
  // 손가락을 움직인 횟수
  let moves = 0;

  // 각 줄에 대해 현재 누르고 있는 프렛을 추적하는 스택
  const lines = Array.from({ length: 6 }, () => []);

  melodies.forEach(([line, fret]) => {
    // 줄 번호는 1부터 시작하므로 배열 인덱스에 맞추기 위해 1 감소
    line -= 1;

    // 현재 줄에서 누르고 있는 프렛이 현재 프렛보다 높은 경우, 더 낮은 프렛을 누를 때까지 손가락을 뗌
    while (lines[line].length > 0 && lines[line][lines[line].length - 1] > fret) {
      lines[line].pop();
      moves++;
    }

    // 현재 줄에서 아무 프렛도 누르고 있지 않거나, 현재 누르고 있는 프렛이 현재 프렛보다 낮은 경우, 프렛을 누름
    if (lines[line].length === 0 || lines[line][lines[line].length - 1] < fret) {
      lines[line].push(fret);
      moves++;
    }
  });

  return moves;
}

console.log(solution(input.slice(1)));
