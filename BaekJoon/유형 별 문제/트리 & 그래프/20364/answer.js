/**
 * 부동산 다툼
 * (https://www.notion.so/4c981aca336a49af885eb68a88a02a3d?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

// 각각 총 노드 갯수, 각 노드의 방문 유무, 정답에 대한 변수
const [N] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N + 1 }, () => false);
const answer = [];

// 오리들이 점유하고 싶은 땅의 번호들
const wantNodeValues = input.slice(1);

// 점유하고 싶은 땅의 번호들을 순회
wantNodeValues.forEach((wantNodeValue) => {
  // findParent를 통해 다른 오리에 의해 점유된 땅을 확인 후 점유된 땅 있다면 해당 땅 번호를 answer에 추가
  answer.push(findParent(wantNodeValue, wantNodeValue, 0)[2]);
});

function findParent(currentNodeValue, wantedNodeValue, encounteredNodeValue) {
  // 만약 현재 노드 번호가 0이라면 루트 노드까지 도달 한 것이므로, [0, 0, encounteredNodeValue]를 반환
  if (currentNodeValue === 0) return [0, 0, encounteredNodeValue];

  // 만약 현재 노드가 이미 점유 되었다면
  if (visited[currentNodeValue] === true)
    // 재귀 호출 하여 encounteredNodeValue에 currentNodeValue를 할당
    return findParent(Math.floor(currentNodeValue / 2), wantedNodeValue, currentNodeValue);

  // 만약 현재 노드가 원하는 땅과 같다면 이 땅을 점유로 표시
  if (currentNodeValue === wantedNodeValue) visited[currentNodeValue] = true;

  // 현재 노드에서 부모 노드로 이동하여 검사를 진행
  return findParent(Math.floor(currentNodeValue / 2), wantedNodeValue, encounteredNodeValue);
}

console.log(answer.join('\n'));
