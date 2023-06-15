/**
 * 2개 이하로 다른 비트 만들기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=933da53d6b2e47a79137e2976a93e669&pm=s)
 */
function solution(numbers) {
  function f(x) {
    // x가 짝수 일 경우(맨 마지막 자리가 0일 경우) 가장 마지막 비트 0을 1로 변경
    if (x % 2 === 0) return x + 1;
    // x가 홀수 일 경우
    const bit = "0" + x.toString(2);
    // 비트 0인 위치(idx)를 찾는다.
    const idx = bit.lastIndexOf("0");
    // idx ~ idx + 1의 비트의 값을 반전 시킨 2진수를 10진수로 변경하여 반환
    // ex) 011 -> 101 -> 5
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, "2");
  }
  return numbers.map((number) => f(number));
}
