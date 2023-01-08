function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const [a, b, c] = commands[i];
    const sliceNums = array.slice(a - 1, b);
    sliceNums.sort((a, b) => a - b);
    answer.push(sliceNums[c - 1]);
  }
  return answer;
}
