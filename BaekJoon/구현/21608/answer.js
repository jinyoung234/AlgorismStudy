/**
 * 상어 초등학교
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=5dd1380da7c74b438313b6699402263e&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let N = Number(input[0]);
  input = input.slice(1).map((v) => v.split(" ").map(Number));
  let board = Array.from({ length: N }, () => Array(N).fill(0));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let favorites = {};
  let students = [];

  // col들을 순회하며 학생의 번호와 좋아하는 학생의 번호를 각각 students와 favorites로 분리한다.
  for (const x of input) {
    students.push(x[0]);
    favorites[x[0]] = x.slice(1);
  }

  // students를 순회한다.
  for (let student of students) {
    // 우선 순위 수 와 비어있는 칸 수가 key, 좌표가 value가 되는 dictionary 생성
    let candidates = {};

    // board 완전 탐색
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        // 만약 빈 좌석이 아니라면 continue
        if (board[row][col] !== 0) continue;
        // 각각 우선 순위 수, 비어있는 칸 수
        let count = [0, 0];
        // 인접한 거리를 순회
        for (let i = 0; i < 4; i++) {
          // 새로운 row, col 좌표
          const [nRow, nCol] = [row + dx[i], col + dy[i]];
          // 만약 인접한 거리가 board를 벗어나면 continue
          if (nRow < 0 || nRow >= N || nCol < 0 || nCol >= N) continue;
          // 만약 학생이 좋아하는 친구가 인접한 거리에 있다면 우선 순위 수를 증가
          if (favorites[student].includes(board[nRow][nCol])) count[0]++;
          // 만약 비어있는 칸이라면 비어있는 칸수를 증가
          if (!board[nRow][nCol]) count[1]++;
        }
        // 우선 순위 수와 비어있는 칸 수를 candidates의 key, [row, col]이 value가 된다.
        const key = `[${count}]`;
        if (!candidates[key]) candidates[key] = [[row, col]];
        else candidates[key].push([row, col]);
      }
    }

    // 우선 순위 수가 크거나 서로 같다면 비어있는 칸 수가 크도록 정렬
    const sorted = Object.keys(candidates).sort((a, b) => {
      const [a0, a1] = a.match(/[0-9]{1,2}/g).map(Number);
      const [b0, b1] = b.match(/[0-9]{1,2}/g).map(Number);
      if (a0 !== b0) return b0 - a0;
      return b1 - a1;
    });

    // sorted를 통해 x, y좌표 값을 가져온다.
    const [newRow, newCol] = candidates[sorted[0]][0];

    // x, y좌표에 student를 등록한다.
    board[newRow][newCol] = student;
  }

  let answer = 0;
  // 학생들을 돌며 만족도를 카운팅 후 총 합을 구한다.
  for (let student of students) {
    let favCount = 0;
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (board[row][col] === student) {
          for (let i = 0; i < dx.length; i++) {
            const [nRow, nCol] = [row + dx[i], col + dy[i]];
            if (nRow < 0 || nRow >= N || nCol < 0 || nCol >= N) continue;
            if (favorites[student].includes(board[nRow][nCol])) favCount++;
          }
        }
      }
    }
    if (favCount !== 0) {
      answer += Math.pow(10, favCount - 1);
    }
  }

  return answer;
}

console.log(solution(input));
