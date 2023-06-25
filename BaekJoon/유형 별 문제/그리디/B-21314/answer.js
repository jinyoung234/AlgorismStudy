/**
 * 민겸 수
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(str) {
  function maxNum(s) {
    let maxResult = "";
    let tmp = [];
    // 민겸수들 순회
    for (let i = 0; i < s.length; i++) {
      // 만약 M인 경우
      if (s[i] === "M") {
        // tmp에 추가
        tmp.push(s[i]);
      }
      if (s[i] === "K") {
        // M과 K가 있는 경우
        if (tmp.length) {
          // 우선 5를 추가
          maxResult += "5";
          // m의 개수 만큼 0을 추가
          for (let i = 0; i < tmp.length; i++) {
            maxResult += "0";
          }
          // K만 있는 경우
        } else {
          // 5만 추가
          maxResult += "5";
        }
        // tmp 초기화
        tmp = [];
      }
    }
    // 만약 K가 하나도 없거나, MK가 조합된 값을 추가 후 남는 M값이 있을 경우
    // tmp에 있는 개수 만큼 1 추가
    if (tmp.length) tmp.forEach((_) => (maxResult += "1"));
    return maxResult;
  }

  function minNum(s) {
    let minResult = "";
    let tmp = [];
    // 민겸수들 순회
    for (let i = 0; i < s.length; i++) {
      // 만약 M인 경우
      if (s[i] === "M") {
        // tmp에 추가
        tmp.push(s[i]);
      }
      // 만약 K인 경우
      if (s[i] === "K") {
        // 앞에 M이 없는 경우
        if (tmp.length === 0) {
          // minResult에 5추가
          minResult += "5";
          // 앞에 M이 있는 경우
        } else {
          // 먼저 1 추가 후 tmp에 있는 M의 개수 만큼 0 추가
          minResult += "1";
          for (let i = 0; i < tmp.length - 1; i++) {
            minResult += "0";
          }
          // 그 후 마지막에 K 값인 5 추가
          minResult += 5;
          // tmp 초기화
          tmp = [];
        }
      }
    }
    // 만약 M만 있다면
    if (tmp.length) {
      // 먼저 1 추가 후 M의 개수만큼 0 추가
      minResult += "1";
      for (let i = 0; i < tmp.length - 1; i++) {
        minResult += "0";
      }
    }
    return minResult;
  }

  console.log(maxNum(str));
  console.log(minNum(str));
}
