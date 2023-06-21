/**
 * 배열 돌리기 1
 * (https://www.notion.so/1-30ddcc288b2543ba98cced7968755423)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, r] = input.shift().split(" ").map(Number);

const board = input.map((s) => s.split(" ").map(Number));

// rotateSqaureNum = 각각 회전 할 수 있는 사각형의 갯수,
// limit = 회전하는 사각형이 변경될 때마다
// col -> 0, m - 1, row -> 0, n - 1번째 값 없이 회전시키기 위한 변수
let [rotateSqaureNum, limit] = [Math.min(n, m) / 2, 0];

function rotate(num, limit) {
  // row와 col의 각 start, end 값을 초기화 한다.
  let [startRow, endRow] = [num, n - 1 - limit];
  let [startCol, endCol] = [num, m - 1 - limit];
  // 테두리의 첫번째 값을 임시로 저장한다.
  let tmp = board[startRow][startCol];
  // 맨 윗줄 라인을 서쪽 방향으로 옮긴다.
  for (let i = startCol; i < endCol; i++) {
    board[startRow][i] = board[startRow][i + 1];
  }
  // 맨 동쪽 라인을 북쪽 방향으로 옮긴다
  for (let i = startRow; i < endRow; i++) {
    board[i][endCol] = board[i + 1][endCol];
  }
  // 맨 아래쪽 라인을 동쪽 방향으로 옮긴다
  for (let i = endCol; i > startCol; i--) {
    board[endRow][i] = board[endRow][i - 1];
  }
  // 맨 서쪽 라인을 아래 방향으로 옮긴다
  for (let i = endRow; i > startRow; i--) {
    board[i][startCol] = board[i - 1][startCol];
  }
  // 테두리의 첫번째 값이 가장 마지막에 들어간다.
  board[num + 1][num] = tmp;
}

// i = 회전 횟수 만큼 순회
for (let i = 0; i < r; i++) {
  // j = 회전 할 수 있는 사각형의 수 만큼 순회
  for (let j = 0; j < rotateSqaureNum; j++) {
    let startIdx = j;
    // rotate 함수를 통해 사각형의 각 테두리 들을 회전
    rotate(startIdx, limit);
    // j가 증가할 때 limit도 함께 증가
    limit++;
  }
  // r이 증가할 땐 limit을 0으로 초기화하여 다시 가장 바깥 테두리 부터 돌도록 하기
  limit = 0;
}

// 회전이 끝난 board를 문자열로 출력 하는 함수
function draw() {
  let answer = "";
  board.forEach((arr) => (answer += arr.join(" ") + "\n"));
  console.log(answer.trim());
}

draw();
