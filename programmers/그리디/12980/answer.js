/**
 * 점프와 순간이동
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=4008b2cccf9f4f5297548dcaf2f30098&pm=s)
 */
function solution(n) {
  // 배터리 소모량을 의미하는 answer
  let answer = 0;
  while (n > 0) {
    // 만약 짝수라면 n을 2로 나눠줌(순간 이동)
    if (n % 2 === 0) {
      n /= 2;
      // 만약 n이 홀수라면 n을 감소시키고 answer를 증가(점프)
    } else {
      n--;
      answer++;
    }
  }
  return answer;
}
