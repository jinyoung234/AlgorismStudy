function solution(board, moves) {
  let stack = [];
  let answer = 0;
  // moves 순회
  for (let m of moves) {
    for (let i = 0; i < board.length; i++) {
      // flag가 0일 때만 인형을 가져오기 -> 즉, 인형 1개 가져올 경우 flag를 1로 변경
      // m번째 줄에 만약 인형이 있다면
      if (board[i][m - 1] !== 0) {
        let prev = board[i][m - 1];
        // 인형이 있던 자리에 없는 것으로 변경하기
        board[i][m - 1] = 0;
        // 만약 바구니에 있는 인형과 크레인으로 뽑은 인형이 같을 경우
        if (prev === stack[stack.length - 1]) {
          // 둘다 사라지게 하고 answer에 2 더함
          stack.pop();
          answer += 2;
          // 같지 않다면 바구니에 인형 추가
        } else stack.push(prev);
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
