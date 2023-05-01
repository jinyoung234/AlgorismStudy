/**
 * 신규 아이디 추천
 * (https://www.notion.so/8d50bb0cb6d648f98e1fdf8bed24ec90)
 */
function solution(new_id) {
  let answer = new_id;
  // 1단계
  answer = answer.toLowerCase();
  // 2단계
  answer = answer.replace(/[^a-z0-9-_.]/g, "");
  // 3단계
  answer = answer.replace(/\.+/g, "."); // 정규 표현식 중 ".+" 는 .가 1개 이상인 것들을 의미
  // 4단계
  // ^는 시작을 의미, $는 끝을 의미, |는 or를 의미
  answer = answer.replace(/^\.|\.$/g, "");
  // 5단계
  if (answer === "") answer = "a";
  // 6단계
  if (answer.length >= 16) answer = answer.slice(0, 15);
  answer = answer.replace(/\.$/g, "");
  // 7단계
  while (answer.length <= 2) answer += answer[answer.length - 1];
  return answer;
}

solution("abcdefghijklmn.p");
