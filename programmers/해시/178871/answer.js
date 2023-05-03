/**
 * 달리기 경주
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=d2277d149d7b4f5fba2327ce2869a38f&pm=s)
 */
function solution(players, callings) {
  const playerMap = new Map();

  players.forEach((name, i) => {
    playerMap.set(name, i);
  });

  callings.forEach((callName) => {
    const targetIdx = playerMap.get(callName);
    const temp = players[targetIdx - 1];

    [players[targetIdx], players[targetIdx - 1]] = [
      players[targetIdx - 1],
      players[targetIdx],
    ];

    playerMap.set(callName, playerMap.get(callName) - 1);
    playerMap.set(temp, playerMap.get(callName) + 1);
  });
  return players;
}
