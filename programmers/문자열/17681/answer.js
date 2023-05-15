/**
 * 비밀 지도
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=103f500e3894454da0a56b74b3dd88c2&pm=s)
 */
function solution(n, arr1, arr2) {
  // map() 메서드, OR 비트연산, toString 2진법 변환을 사용해 지도의 합본을 만든다
  // 2진법으로 변환한 arr1 - ['01001', '10100', '11100', '10010', '01011']
  // 2진법으로 변환한 arr2 - ['11110', '00001', '10101', '10001', '11100']
  // OR 비트연산 적용 후   - ['11111', '10101', '11101', '10011', '11111']
  return arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
}
