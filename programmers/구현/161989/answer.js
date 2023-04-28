/**
 * 덧칠하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20)
 */
function solution(n, m, section) {
  let answer = 0;
  let part = 0;
  section.forEach((n) => {
    if (n > part) {
      part = n + m - 1;
      answer++;
    }
  });
  return answer;
}

solution(8, 4, [2, 3, 6]);
