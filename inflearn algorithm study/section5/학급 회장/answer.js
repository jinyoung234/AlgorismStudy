let allVote = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join()
  .split("");

// 후보(key), 투표수(value)에 대한 테이블 생성
let voteTable = new Map();

// 학생들이 투표한 용지들 모두 순회하며 뽑은 후보자 테이블에 존재하면 후보 득표수 1 증가
// 아니면 후보 추가 후 1로 초기화
for (let i = 0; i < allVote.length; i++) {
  if (voteTable.has(allVote[i]))
    voteTable.set(allVote[i], voteTable.get(allVote[i]) + 1);
  else voteTable.set(allVote[i], 1);
}

let answer = "";

// Math.max로 최다 득표 수 찾음
const maxValue = Math.max(...voteTable.values());

// for of를 통해 Map 순회하며 최다 득표인 후보 찾아서 answer에 저장
for (let [k, v] of voteTable) {
  if (v === maxValue) answer = k;
}

// 답 리턴
console.log(answer);
