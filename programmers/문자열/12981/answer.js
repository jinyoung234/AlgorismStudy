/**
 * 영어 끝말잇기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=9a446dbb4b9140f3bac3dcd7fbf06440&pm=s)
 */
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const curWord = words[i];
    const isWord = words.indexOf(curWord) !== i;
    if (isWord) return [(i % n) + 1, Math.floor(i / n) + 1];
    const lastLetterBeforeWord = words[i - 1].slice(-1);
    const firstLetterCurWord = curWord.charAt(0);
    if (lastLetterBeforeWord !== firstLetterCurWord)
      return [(i % n) + 1, Math.floor(i / n) + 1];
  }

  return [0, 0];
}
