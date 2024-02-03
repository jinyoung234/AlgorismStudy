/**
 * 회전하는 큐
 * (https://www.notion.so/3b0f588330b14de9b5e4f081ab92d195?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [n] = input[0].split(' ').map(Number);

const i = input[1].split(' ').map(Number);

class Deque extends Array {
  front() {
    return this[0];
  }

  back() {
    return this[this.length - 1];
  }

  popLeft() {
    return this.shift();
  }

  rotate(index) {
    if (index > 0) {
      while (index !== 0) {
        this.unshift(this.pop());
        index -= 1;
      }
    } else {
      while (index !== 0) {
        this.push(this.shift());
        index += 1;
      }
    }
  }
}

function solution(size, indexes) {
  const deque = new Deque();
  let answer = 0;

  // Deque를 1부터 size까지의 숫자로 초기화
  for (let i = 1; i <= size; i += 1) deque.push(i);

  indexes.forEach((index) => {
    // 뽑아 내려는 수의 index 찾기
    const targetIndex = deque.indexOf(index);
    // 만약 뽑아 내려는 수가 첫 번째 라면 가장 앞 요소 제거
    if (targetIndex === 0) {
      deque.popLeft();
    } else {
      // 뽑아 내려는 수의 index가 deque 크기의 절반보다 작거나 같다면
      if (targetIndex <= Math.floor(deque.length / 2)) {
        // targetIndex 만큼 앞으로 회전 후 그 요소 제거
        deque.rotate(-targetIndex);
        deque.popLeft();
        answer += targetIndex; // 회전 횟수만큼 정답에 추가
        // 뽑아 내려는 수의 index가 deque 크기의 절반보다 크다면
      } else {
        // targetIndex 만큼 뒤로 회전 후 회전 횟수를 정답에 추가 후 제거
        deque.rotate(deque.length - targetIndex); // 뒤로 회전시키고,
        answer += deque.length - targetIndex;
        deque.popLeft();
      }
    }
  });

  return answer; // 총 회전 횟수를 반환
}

console.log(solution(n, i));
