/**
 * 차이점
 * 소요 시간이 더 짧고, 메모리도 더 적게 든다.
 */
const fs = require("fs");

const readFileSyncAddress = "/dev/stdin";

const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
input.shift();
const ropes = input.map((i) => Number(i));

function solution(n, ropes) {
  const sortRopes = ropes.sort((a, b) => a - b);
  const arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(sortRopes[i] * (n - i));
  }
  console.log(Math.max(...arr));
}
solution(N, ropes);
