/**
 * 크레인 인형뽑기 게임
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=17eead140ee843e5af739d8403ca4eae&pm=s)
 */
function solution(board, moves) {
  let result = 0;
  const stack = [];
  for (const n of moves) {
    const curLocation = n - 1;
    for (const items of board) {
      if (items[curLocation] !== 0) {
        if (stack.at(-1) === items[curLocation]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(items[curLocation]);
        }
        items[curLocation] = 0;
        break;
      } else {
        if (board.at(-1)[curLocation] === 0) break;
        continue;
      }
    }
  }
  return result;
}
