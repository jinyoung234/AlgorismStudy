/**
 * 하노이의 탑
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=d52cb48acc034fda937ef4e406509e75&pm=s)
 */
function solution(n) {
  const answer = [];
  const hanoi = (n, from, to, other) => {
    if (n === 0) return;
    hanoi(n - 1, from, other, to);
    answer.push([from, to]);
    hanoi(n - 1, other, to, from);
  };
  hanoi(n, 1, 3, 2);
  return answer;
}
