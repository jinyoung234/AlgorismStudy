/**
 * 잃어버린 괄호
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(input) {
  // 초기 answer 0으로 초기화
  let answer = 0;
  // 입력 받은 값을 - 기준으로 나눔
  const arr = input.split("-");
  // arr 순회
  arr.forEach((v, i) => {
    // 한 요소가 +를 포함하고 있다면
    if (v.includes("+")) {
      // +를 기준으로 나눈 후 각 요소를 Number로 변환
      let a = v.split("+").map(Number);
      // 각 요소의 값을 더함
      const b = a.reduce((a, b) => a + b, 0);
      // 기존 자리에 더한 값으로 재 할당
      arr[i] = b;
    } else {
      // 만약 +를 포함하지 않으면 문자열을 숫자로 변환하여 재 할당
      let n = Number(v);
      arr[i] = n;
    }
  });
  // arr의 첫번째 숫자를 answer에 할당 후 순회하며 빼기
  // (arr의 첫 번째 값 제외 모두 빼야하는 값들이기 때문)
  answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer -= arr[i];
  }
  return answer;
}

console.log(solution(input));
