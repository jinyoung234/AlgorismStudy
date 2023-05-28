/**
 * 조이스틱
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=9ff728c08c864d1e8fe862b727e7d773&pm=s)
 */
function solution(name) {
  let [answer, len] = [0, name.length];
  let min_move = len - 1;
  [...name].forEach((target, i) => {
    answer += Math.min(
      name[i].charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - name[i].charCodeAt() + 1
    );
    let nextIdx = i + 1; // 다음 인덱스
    // A가 연속적으로 나올때 까지 nextIdx 증가 (즉, name의 nextIdx는 A가 아닌 알파벳 요소)
    while (nextIdx < len && name[nextIdx] === "A") nextIdx++;
    // 각각 순서대로 가는 방법, 뒤로 돌아가는 방법, 뒷 부분을 먼저 입력하는 방법
    min_move = Math.min(min_move, i * 2 + len - nextIdx);
  });
  return answer + min_move;
}
