let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join(" ")
  .split(" ")
  .map((i) => Number(i));

// 전체 회의 배열
let entireMeeting = [];
// 할 수 있는 최대한의 회의 횟수
let answer = 0;
// 배열 안에 있는 회의의 끝나는 시간
let endTime = 0;

// 전체 회의 배열 생성
for (let i = 0; i < input.length / 2; i++) {
  if (i === 0) {
    entireMeeting.push([input[0], input[1]]);
  } else {
    entireMeeting.push([input[2 * i], input[2 * i + 1]]);
  }
}

// 전체 회의 배열 정렬 => 회의의 끝나는 시간이 모두 같을 경우 시작 시간을 정렬, 아닐 경우 끝나는 시간을 정렬
entireMeeting.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

// 전체 회의 배열을 순회
for (let partMeeting of entireMeeting) {
  // 만약 회의의 시작시간이 끝나는 시간보다 클 경우
  if (partMeeting[0] >= endTime) {
    // 회의 횟수 1 증가
    answer++;
    // 끝나는 시간을 그 회의의 끝나는 시간으로 설정
    endTime = partMeeting[1];
  }
}

console.log(answer);
