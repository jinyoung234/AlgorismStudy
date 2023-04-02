/**
 * 거스름돈
 */
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(require("fs").readFileSync(path).toString().trim());
let count = 0;
while (input !== 0) {
  // 거스름돈이 5원이 넘어가는 경우
  if (input >= 5) {
    // 1. 5원을 거슬러줄 수 있는 경우
    if (input % 5 === 0) {
      input -= 5;
      count++;
      // 2. 2원을 거슬러줄 수 있는 경우
    } else if (input % 2 === 0) {
      input -= 2;
      count++;
      // 3. 처음 동전을 거슬러줘야할 경우
    } else {
      input -= 5;
      count++;
    }
  } else {
    // 거스름돈이 5원이 넘지 않는 경우
    // 거슬러줄 수 있다면 2원으로 거슬러줌
    if (input % 2 === 0) {
      input -= 2;
      count++;
      // 거슬러 줄 수 없다면 -1을 넣고 break
    } else {
      count = -1;
      break;
    }
  }
}
console.log(count);
