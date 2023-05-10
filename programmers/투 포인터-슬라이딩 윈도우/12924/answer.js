/**
 * 숫자의 표현
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=062a575130054b1d9a3535532d2f51a6&pm=s)
 */
function solution(n) {
  let lt = 0;
  let sum = 0;
  let answer = 0;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === n) answer++;
    while (true) {
      if (sum < n) break;
      sum -= arr[lt++];
      if (sum === n) answer++;
    }
  }
  return answer;
}
