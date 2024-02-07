/**
 * 앵무새
 * (https://www.notion.so/a494f86113c249509f58cf74e547b40a?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((sentence) => sentence.split(' '));

function solution(sentences) {
  const writeSentence = sentences.pop();
  const hashMap = new Map();
  let writeSentenceLength = 0;

  // 단어 위치 매핑을 위한 해시 맵 생성
  sentences.forEach((sentence, sentenceIndex) => {
    sentence.forEach((word, wordIndex) => {
      if (!hashMap.has(word)) {
        hashMap.set(word, { sentenceIndex, wordIndex });
      }
    });
  });

  // 각 앵무새가 말할 차례를 저장하기 위한 배열
  const indexes = sentences.map(() => 0);

  // 받아 적은 문장을 순회하며 가능한지 확인
  for (const writeWord of writeSentence) {
    writeSentenceLength += writeWord.length;

    if (!hashMap.has(writeWord)) return 'Impossible';

    const { sentenceIndex, wordIndex } = hashMap.get(writeWord);

    // 다음 단어가 말해야 할 차례인지 확인
    if (indexes[sentenceIndex] !== wordIndex) return 'Impossible';

    // 해당 단어를 말한 다음 차례로 업데이트
    indexes[sentenceIndex] += 1;
  }

  // 모든 앵무새가 문장을 끝까지 말했는지 확인
  if (indexes.some((index, i) => index !== sentences[i].length)) return 'Impossible';

  return 'Possible';
}

console.log(solution(input.slice(1)));
