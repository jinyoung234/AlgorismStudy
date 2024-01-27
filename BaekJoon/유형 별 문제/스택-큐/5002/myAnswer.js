/**
 * 도어맨
 * (https://www.notion.so/9375c5ce9889410db4d22656ebd8db09?pvs=4)
 */

let lines = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(rememberedMaxDifference, clubLine) {
  let max = 0;

  const clubPeoples = { M: 0, W: 0 };

  while (clubLine.length !== 0) {
    // 최댓 값 1 증가
    max += 1;

    // 가장 줄 앞에 있는 사람을 꺼낸다.
    const clubPeople = clubLine.shift();
    // clubPeoples(해시 테이블) 내 해당하는 속성 값 1 증가
    clubPeoples[clubPeople] += 1;
    // 남자 여자 차이 값을 구한다.
    let difference = Math.abs(clubPeoples.M - clubPeoples.W);

    // 만약 기억할 수 있는 최대 값보다 현재 차이 값이 큰 경우
    if (difference > rememberedMaxDifference) {
      // 다음 사람도 꺼내서 clubPeoples(해시 테이블) 내 해당하는 속성 값 1 증가
      const nextPeople = clubLine.shift();
      clubPeoples[nextPeople] += 1;
      // 다시 차이 값 구한다.
      difference = Math.abs(clubPeoples.M - clubPeoples.W);

      // 지금의 차이도 기억할 수 있는 최대 값보다 큰 경우 max 1 낮추고 종료
      if (difference > rememberedMaxDifference) {
        max -= 1;
        break;
      }

      // 그렇지 않다면 다음 사람 까지 포함하기 위해 max에 1 증가
      max += 1;
    }
  }

  // max 반환
  return max;
}

console.log(solution(Number(lines[0]), lines[1].split('')));
