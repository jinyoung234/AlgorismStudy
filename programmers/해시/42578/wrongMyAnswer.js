// 처음 작성한 오답
function solution(clothes) {
  let answer = [];
  // 옷 이름 - 옷 종류의 테이블 생성
  const clothTable = new Map(clothes);
  // 옷 조합을 위해 key들 가져오기
  const clothName = [...clothTable.keys()];
  for (let [k, v] of clothTable) {
    // 1 종류의 옷들은 모두 추가
    answer.push(k);
    // 옷 조합을 위한 맵 객체 생성
    let clothCombination = new Map();
    // 전체 옷들 순회
    for (let i = 0; i < clothName.length; i++) {
      // size가 0일 경우 추가
      if (clothCombination.size === 0) {
        clothCombination.set(v, k);
        // size가 1이상이면서 맵에 추가한 옷의 종류와 해당 옷의 종류가 다를 때만 Map에 추가
      } else if (
        clothCombination.size > 0 &&
        !clothCombination.has(clothTable.get(clothName[i]))
      ) {
        clothCombination.set(clothTable.get(clothName[i]), clothName[i]);
      }
    }
    // 다한 옷은 삭제
    clothName.shift();
    // 만약 옷 조합의 size가 1이상이면 answer에 추가
    if (clothCombination.size > 1) answer.push([...clothCombination.values()]);
  }
  // answer 길이 리턴
  return answer.length;
}
