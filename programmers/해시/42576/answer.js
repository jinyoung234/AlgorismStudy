// participant = 마라톤에 참여한 선수들의 이름이 담긴 배열을 리턴
// completion = 완주한 선수들의 이름이 담긴 배열을 리턴
// solution = 완주 못한 선수들의 이름이 담긴 배열을 리턴

/** 1번째 시도
function solution(participant, completion) {
  let allPlayers = participant;
  let completePlayers = completion;
  let coincide = [];
  for (let i = 0; i < allPlayers.length; i++) {
    let count = 0;
    for (let j = 0; j < completePlayers.length; j++) {
      if (allPlayers[i] === completePlayers[j]) {
        count = 1;
        completePlayers.splice(j, 1);
      }
    }
    if (count === 0) {
      coincide.push(allPlayers[i]);
    }
  }
  return coincide.join();
}
*/

/** 2번째 시도
function solution(participant, completion) {
  let allPlayers = participant;
  let answer = "";
  let completePlayers = completion.join("");
  for (let i = 0; i < allPlayers.length; i++) {
    if (completePlayers.includes(allPlayers[i])) {
      completePlayers = completePlayers.replace(allPlayers[i], "");
    } else {
      answer = allPlayers[i];
    }
  }
  return answer;
}
*/

// 정답

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
