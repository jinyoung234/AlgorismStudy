/**
 * 피보나치 수
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=3284ac3d74234d4daa591dcb39a7d602&pm=s)
 */
function solution(n) {
  let dynamicArray = Array.from({ length: n }, () => 0);
  dynamicArray[0] = 0;
  dynamicArray[1] = 1;
  let l = 2;
  while (l !== n + 1) {
    dynamicArray[l] = (dynamicArray[l - 2] + dynamicArray[l - 1]) % 1234567;
    l++;
  }
  return dynamicArray[dynamicArray.length - 1];
}
