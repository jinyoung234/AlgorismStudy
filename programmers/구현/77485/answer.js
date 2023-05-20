/**
 * 행렬 테두리 회전하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=698f6859d183481894be5bdfca8f3204&pm=s)
 */
function solution(rows, columns, queries) {
  var answer = [];
  const graph = Array.from(Array(rows), (_, row) =>
    Array.from({ length: columns }, (_, col) => row * columns + (col + 1))
  );
  queries.forEach((query) => {
    let [x1, y1, x2, y2] = query.map((n) => n - 1);
    let partial = [];
    // 회전 할 값 partial에 추가
    for (let i = y1; i < y2; i++) partial.push(graph[x1][i]);
    for (let i = x1; i < x2; i++) partial.push(graph[i][y2]);
    for (let i = y2; i > y1; i--) partial.push(graph[x2][i]);
    for (let i = x2; i > x1; i--) partial.push(graph[i][y1]);
    // 회전
    partial.unshift(partial.pop());
    // 회전 한 것 중 가장 최솟값 partial에 추가
    const min = Math.min(...partial);
    answer.push(min);
    // 회전 된 값들을 다시 graph에 재 할당
    for (let i = y1; i < y2; i++) graph[x1][i] = partial.shift();
    for (let i = x1; i < x2; i++) graph[i][y2] = partial.shift();
    for (let i = y2; i > y1; i--) graph[x2][i] = partial.shift();
    for (let i = x2; i > x1; i--) graph[i][y1] = partial.shift();
  });
  return answer;
}

solution(6, 6, [[2, 2, 5, 4]]);
