/**
 * 셀프 넘버
 */
const arr = [];
let selfNum = "";
let num = 0;

// 1 ~ 10000까지 순회
for (let i = 1; i <= 10000; i++) {
  // num에 i만큼 더 해줌
  num += i;
  // i의 각 자릿수만큼 순회
  // ex) 100 -> 0 ~ 2(1의 자리, 10의 자리, 100의 자리 )
  for (let j = 0; j < String(i).length; j++) {
    // 각 자리를 num에 더하여 생성자를 만듬
    num += Number(String(i)[j]);
  }
  // 생성자 num에 추가
  arr.push(num);
  // num 0으로 초기화
  num = 0;
}

// 1 ~ 10000까지 다시 순회해서 생성자 아닌 것(셀프 넘버)들을 찾아 selfNum에 할당
for (let k = 1; k <= 10000; k++) {
  if (arr.indexOf(k) === -1) {
    selfNum += k + "\n";
  }
}

console.log(selfNum);
