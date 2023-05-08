/**
 * 압축
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=41fba8a64e2d484b836743e9f6d04dcb&pm=s)
 */
const getDictionary = (dictionary) => {
  for (let i = 1; i <= 26; i++) {
    dictionary[String.fromCharCode(i + 64)] = i;
  }
  return dictionary;
};

function solution(msg) {
  const answer = [];
  let nextWord = "";
  let lastCount = 27;
  const dictionary = getDictionary({});
  const lastString = msg.split("").reduce((w, c) => {
    nextWord = w + c;
    if (!dictionary[nextWord]) {
      dictionary[nextWord] = lastCount++;
      answer.push(dictionary[w]);
      return c;
    }
    if (dictionary[nextWord]) return nextWord;
  });
  answer.push(dictionary[lastString]);
  return answer;
}

solution("KAKAO");
