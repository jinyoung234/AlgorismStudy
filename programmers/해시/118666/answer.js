/**
 * 성격 유형 검사하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=8202d49c203d484eb444b5e178bfd378&pm=s)
 */

function solution(survey, choices) {
  let answer = "";
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  choices.forEach((choice, i) => {
    const [disagree, agree] = survey[i];
    score[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });
  const { R, T, C, F, J, M, A, N } = score;
  answer =
    (R >= T ? "R" : "T") +
    (C >= F ? "C" : "F") +
    (J >= M ? "J" : "M") +
    (A >= N ? "A" : "N");
  return answer;
}
