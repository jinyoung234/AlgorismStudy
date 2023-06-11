/**
 * 숫자 문자열과 영단어
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=2e32821a6f7944d889159e52d6d7bcb8&pm=s)
 */
function solution(s) {
  const answer = s
    .replaceAll("zero", 0)
    .replaceAll("one", 1)
    .replaceAll("two", 2)
    .replaceAll("three", 3)
    .replaceAll("four", 4)
    .replaceAll("five", 5)
    .replaceAll("six", 6)
    .replaceAll("seven", 7)
    .replaceAll("eight", 8)
    .replaceAll("nine", 9);
  return Number(answer);
}
