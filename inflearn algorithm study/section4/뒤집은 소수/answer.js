// 1. 배열 요소 돌면서 숫자 뒤집음
// 2. 단, 첫 자리부터의 연속된 0은 무시됨
// 3. 만약 숫자를 뒤집엇을 때 소수라면 배열에 추가
// 4. 배열에 있는 요소들 출력

// 소수 판별 함수
function isPrime(num) {
  // 2 ~ 매개변수로 받은 숫자의 제곱근 까지 순회
  for (let i = 2; i < Math.sqrt(num); i++) {
    // 만약 i로 나눈 나머지가 0이라면 false
    if (num % i === 0) return false;
  }
  // 0이 아니라면 true
  return true;
}

// 입력 값 배열
let inputNumArr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join()
  .split(" ");

// 각 배열에 있는 요소를 reduce로 순회
const result = inputNumArr.reduce((prev, cur) => {
  // 기존 요소에서 값을 뒤집기
  const reverseNum = Number(cur.split("").reverse().join(""));
  // 만약 뒤집은 값이 1이라면 추가 하지 않음
  if (reverseNum === 1) {
    return prev;
  }
  // 만약 뒤집은 값이 소수라면 배열에 추가
  if (isPrime(reverseNum)) prev.push(reverseNum);
  // 배열 반환
  return prev;
}, []);

// 소수만 남겨진 배열을 순회하며 값 리턴
result.forEach((num) => {
  console.log(num);
});
