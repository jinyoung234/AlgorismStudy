/**
 * 2xn 타일
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=96b32015d9f049c4ba4bb95d12797169&pm=s)
 */
function solution(n) {
  let dynamicArray = [1, 2];
  for (let i = 2; i < n; i++) {
    dynamicArray[i] = (dynamicArray[i - 2] + dynamicArray[i - 1]) % 1000000007;
  }
  return dynamicArray.at(-1);
}
