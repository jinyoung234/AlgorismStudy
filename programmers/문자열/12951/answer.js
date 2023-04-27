/**
 * JadenCase 문자열 만들기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=18be998b03e244ec8a0302ba30ec7e98&pm=s)
 */
function solution(s) {
  // 공백 단위로 split
  const strArr = s.split(" ");
  // 각 문자열 순회
  for (let i = 0; i < strArr.length; i++) {
    // 문자열에 대해 소문자로 만든 후 다시 split
    const str = strArr[i].toLowerCase().split("");
    // 만약 str이 빈 문자열이 아니며(연속 공백 방지) 숫자가 아닌 문자일 경우
    if (str.length > 0 && typeof str[0] !== "number") {
      // 첫 문자를 대문자로 만듬
      str[0] = str[0].toUpperCase();
      // strArr의 문자열을 없앤 후 str을 추가
      strArr.splice(i, 1, str.join(""));
    }
  }
  // 각 문자열을 공백 단위로 split 했던 것들을 다시 문자열로 합쳐서 출력
  return strArr.join(" ");
}
