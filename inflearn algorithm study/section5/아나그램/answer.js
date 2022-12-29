let [stringA, stringB] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

// 두 문자열에 대한 해시 테이블 생성
const aTable = new Map();
const bTable = new Map();

// 입력 받은 문자열들 순회 하며 알파벳들을 해시 테이블에 추가
for (let string of stringA) {
  if (aTable.has(string)) aTable.set(string, aTable.get(string) + 1);
  else {
    aTable.set(string, 1);
  }
}
for (let string of stringB) {
  if (bTable.has(string)) bTable.set(string, bTable.get(string) + 1);
  else {
    bTable.set(string, 1);
  }
}
console.log(aTable, bTable);

// 초기 답은 false로 설정
let answer = "NO";

// aTable의 key들을 순회하며 a키가 b테이블에 존재하고 각 테이블의 키에 대한 값이 일치하면 true
// 아니면 false
for (let aKey of aTable.keys()) {
  if (bTable.has(aKey) && bTable.get(aKey) === aTable.get(aKey)) answer = "YES";
  else {
    answer = "NO";
  }
}

console.log(answer);
