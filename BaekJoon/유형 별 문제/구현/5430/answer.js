/**
 * AC
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=ebeea99dc3f04f01adfb4ac3930c0737&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const _input = fs.readFileSync(filePath).toString().trim().split("\n");

let _t = Number(_input.shift());

function solution(t, input) {
  while (t--) {
    const functions = input.shift().split("");
    input.shift();
    const _input = input.shift();

    // 입력받은 문자열에 대해 []이라면 빈 배열을 아니라면 입력받은 숫자들을 파싱하여 숫자 배열을 생성한다.
    const numbers =
      _input === "[]" ? [] : _input.match(/[0-9]{1,6}/g).map(Number);

    // error에 대한 상태인 flag와 문자를 뒤집었다는 것을 표현하기 위한 reversed를 false로 초기화 한다.
    let [flag, reversed] = [false, false];
    // start와 end index를 설정한다.
    let [startIdx, endIdx] = [0, numbers.length - 1];

    // 함수들을 실행한다.
    for (const func of functions) {
      // 함수가 만약 뒤집기(R)인 경우
      if (func === "R") {
        // 뒤집었다는 것을 표현한다.
        // (reverse()를 사용할 수 있지만 reverse 함수 자체가 모든 배열을 탐색하는 O(n)을 가지기 때문에
        // 최악의 경우 O(n^2) 연산이 되어 시간초과가 발생한다.)
        reversed = !reversed;
      }

      // 함수가 만약 버리기(D)인데 숫자 배열에 값이 존재하지 않는 경우 -> startIdx가 endIdx보다 큰 상황 이라면
      if (func === "D" && startIdx > endIdx) {
        // flag 값을 변화 시키고 종료 한다.
        flag = true;
        break;
      }

      // 만약 D인데 뒤집어져 있다면 endIdx를 줄이며, 뒤집어져 있지 않다면 startIdx를 줄인다.
      if (func === "D" && reversed) {
        endIdx--;
      }
      if (func === "D" && !reversed) {
        startIdx++;
      }
    }

    // flag가 true라면 error를 반환한다.
    if (flag) {
      console.log("error");
      continue;
    }

    // 그게 아니라면 reversed의 상태에 따라 변화된 startIdx ~ endIdx 범위의 숫자들을 새롭게 채운다.
    const result = [];
    if (!flag && reversed) {
      for (let i = endIdx; i >= startIdx; i--) {
        result.push(numbers[i]);
      }
    }
    if (!flag && !reversed) {
      for (let i = startIdx; i <= endIdx; i++) {
        result.push(numbers[i]);
      }
    }
    // 새로운 숫자 배열을 문자열 형태로 반환 한다.
    console.log("[" + result.join(",") + "]");
  }
}

solution(_t, _input);
