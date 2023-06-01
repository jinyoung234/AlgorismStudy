/**
 * 삼각 달팽이
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=b65b6fffd7844c248e8967ec652cca6a&pm=s)
 */

function solution(n) {
  const answer = Array(n)
    .fill()
    .map((_, i) => Array(i + 1));
  let [count, row, col] = [0, -1, 0];
  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++row][col] = ++count;
    for (let i = 0; i < n - 1; i++) answer[row][++col] = ++count;
    for (let i = 0; i < n - 2; i++) answer[--row][--col] = ++count;
    n -= 3;
  }
  return answer.flatMap((e) => e);
}
