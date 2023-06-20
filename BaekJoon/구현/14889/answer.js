/**
 * 스타트와 링크
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=ff18d8d688bc47648661270ca1a1c607&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const s = input.map((n) => n.split(" ").map(Number));

// 0 ~ n - 1까지의 player들을 1차원 배열에 생성
const players = Array.from({ length: n }, (_, i) => i);

// startTeam의 멤버 조합을 위한 함수
function getCombination(n, r) {
  const result = [];
  const tmp = [];
  function dfs(l, s) {
    if (l === r) {
      result.push(tmp.slice());
      return;
    } else {
      for (let i = s; i < n; i++) {
        tmp.push(players[i]);
        dfs(l + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 0);
  return result;
}

// 각 Team 내에서 능력치를 구성할 선수 2명을 조합 하기 위한 함수
function getTeamCombination(arr, r) {
  const result = [];
  const tmp = [];
  function dfs(l, s) {
    if (l === r) {
      result.push(tmp.slice());
      return;
    } else {
      for (let i = s; i < arr.length; i++) {
        tmp.push(arr[i]);
        dfs(l + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 0);
  return result;
}

// 각 팀 마다 능력치 차이를 구하기 위한 함수
function getScoreDiff(startTeam, linkTeam) {
  // 각 팀에서 2명의 선수로 능력치를 짤 수 있는 모든 조합들을 각 combi 배열에 담는다.
  const startTeamCom = getTeamCombination(startTeam, 2);
  const linkTeamCom = getTeamCombination(linkTeam, 2);
  // 각 팀의 점수를 0점으로 초기화
  let [startTeamScore, linkTeamScore] = [0, 0];
  // startTeamCom을 순회하며 선수 2명의 능력치를 s에서 찾아서 startTeamScore에 추가
  for (let [a, b] of startTeamCom) {
    startTeamScore += s[a][b];
    startTeamScore += s[b][a];
  }
  // linkTeamCom을 순회하며 선수 2명의 능력치를 s에서 찾아서 linkTeamScore에 추가
  for (let [a, b] of linkTeamCom) {
    linkTeamScore += s[a][b];
    linkTeamScore += s[b][a];
  }
  // 두 팀의 능력치 차이를 계산하여 반환
  return Math.abs(startTeamScore - linkTeamScore);
}

// start 팀의 멤버 조합을 getCombination 함수를 통해 구한다.
const startCombination = getCombination(n, n / 2);

// 최소 능력치 차이를 담기 위한 minimumDiff
let minimumDiff = Number.MAX_SAFE_INTEGER;

// startTeam의 조합들을 순회
for (let startTeam of startCombination) {
  // 모든 선수들에서 startTeam에 속한 선수들을 제외시킨다.
  const allPlayers = [...players];
  for (let player of startTeam) {
    allPlayers.splice(allPlayers.indexOf(player), 1);
  }
  // 모든 플레이어에서 startTeam에 있는 선수들을 제외한 나머지 선수들 = linkTeam
  const linkTeam = [...allPlayers];
  // startTeam과 linkTeam으로 능력치의 차이를 구한다.
  const diff = getScoreDiff(startTeam, linkTeam);
  // 기존 최소 능력치 차이와 비교하여 더 작으면 minimumDiff에 재할당
  minimumDiff = Math.min(minimumDiff, diff);
}

// 최소 능력치 차이의 miminumDiff를 반환
console.log(minimumDiff);
