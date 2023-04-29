/**
 * 이진변환 반복하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=532922fa01874ad9a634bc4da922ca1f&pm=s)
 */
function solution(s) {
  let answer = [0, 0];
  // s가 1이 아닐 때 까지 순회
  while (Number(s) !== 1) {
    // s를 숫자 배열로 변환
    const filterStr = s.split("").filter((v) => {
      return v === "1";
    });
    answer[0]++;
    answer[1] += s.length - filterStr.length;
    // 0을 제거 하고 남은 str의 length로 2진수 변환 하여 s에 추가
    s = filterStr.length.toString(2);
  }
  return answer;
}
