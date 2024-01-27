// 각각 남녀 인원 차이의 최댓값, 성별 순서
const [num, gender] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(N, clubLines) {
  const counts = {
    W: 0, // 여성 카운트
    M: 0, // 남성 카운트
  };

  for (let i = 0; i < clubLines.length; ) {
    // gender = 줄에 서있는 사람의 성별
    const gender = clubLines[i];

    // 현재 인덱스 성별이 여성이면서, 여성을 입장시키고 남녀 차이가 N 이하인 경우
    if (gender === 'W' && Math.abs(counts.W + 1 - counts.M) <= N) {
      // 여성 카운트 증가 후 다음 사람으로 이동하기 위해 i 1 증가 및 continue
      counts.W += 1;
      i += 1;
      continue;
    }
    // 현재 인덱스 성별이 남성이면서, 남성을 입장시키고 남녀 차이가 N 이하인 경우
    else if (gender === 'M' && Math.abs(counts.M + 1 - counts.W) <= N) {
      // 남성 카운트 증가 후 다음 사람으로 이동하기 위해 i 1 증가 및 continue
      counts.M += 1;
      i += 1;
      continue;
    }

    // 남녀 차이가 N 이상이면서, 현재와 다음 성별이 같거나 마지막 인덱스에 도달한 경우 루프 종료
    if (clubLines[i] === clubLines[i + 1] || i === clubLines.length - 1) break;
    // 남녀 차이가 N 이상이지만, 현재와 다음 성별이 다른 경우, 순서 swap
    else if (clubLines[i] !== clubLines[i + 1])
      [clubLines[i], clubLines[i + 1]] = [clubLines[i + 1], clubLines[i]];
  }

  // 최종적으로 클럽에 입장한 남성과 여성의 총 수 반환
  return counts.W + counts.M;
}

console.log(solution(Number(num), gender.split('')));
