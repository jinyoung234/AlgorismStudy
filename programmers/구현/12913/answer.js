/**
 * 땅 따먹기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=3e245b999bd64465abc0a6f3c3539536&pm=s)
 */

function solution(land) {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < 4; col++) {
      const prevLow = land[row - 1];
      land[row][col] += Math.max(
        ...prevLow.filter((_, prevCol) => col !== prevCol)
      );
    }
  }
  return Math.max(...land.at(-1));
}
