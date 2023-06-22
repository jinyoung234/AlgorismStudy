/**
 * 혼자 놀기의 달인
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=b8daba3b04834936914641d488c00c1c&pm=s)
 */
function solution(cards) {
  const openBoxes = (startIdx, opened) => {
    // 상자를 열기 위한 시작 인덱스를 idx로, 연 상자의 개수인 count는 0으로 초기화
    let [idx, count] = [startIdx, 0];
    // 만약 idx번째가 이미 열려 있는 상태라면 종료
    while (!opened[idx]) {
      // 열려있지 않으면 idx 번째 상자를 열린 상태로 변경
      opened[idx] = true;
      // 확인한 카드에 적힌 번호에 해당하는 상자를 열기 위해 다음 idx를 다음과 같이 재 할당
      idx = cards[idx] - 1;
      // 상자의 개수 1 증가
      count++;
    }
    // count를 반환
    return count;
  };
  // 최대 스코어를 설정한다.
  let maxScore = 0;
  // 임의의 상자를 선택하기 위해 forEach로 각 상자를 선택하도록 함
  cards.forEach((card, i) => {
    // 선택한 상자 마다 visited 같은 배열 생성 하여 같은 상자 선택하는지 체크
    const opened = Array(cards.length).fill(false);
    // openBoxes 함수를 통해 firstBox의 갯수를 파악
    const firstBox = openBoxes(i, opened) === cards.length ? 0 : openBoxes(i, opened);
    // secondBox도 임의의 상자를 선택하기 위해 O(n)만큼 탐색
    for (let j = 0; j < cards.length; j++) {
      // 만약 j번째 상자가 이미 열려있다면 continue를 통해 다음 상자로 이동한다.
      if (opened[j]) continue;
      // 시작 인덱스를 j로 해서 openBoxes 함수를 통해 secondBox도 얻어낸다.
      const secondBox = openBoxes(j, opened);
      // 첫번째 상자와 두번째 상자의 갯수를 구하면, maxScore와 비교하여 최대 점수를 갱신한다.
      maxScore = Math.max(maxScore, firstBox * secondBox);
    }
  });
  // 최대 점수를 반환한다.
  return maxScore;
}
