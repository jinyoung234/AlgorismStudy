function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let answer = "";
  let n = A.length;
  let m = B.length;
  while (true) {
    if (A[p1] === B[p2]) {
      answer += `${A[p1]} `;
      p2++;
      p1++;
    } else if (A[p1] < B[p2]) p1++;
    else p2++;
    if (p1 === n - 1 || p2 === m - 1) break;
  }
  return answer.trim();
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
