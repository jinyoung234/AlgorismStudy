function solution(clothes) {
  // 빈 Map 객체 생성
  const clothTable = new Map();
  // answer에 초기 값 1 설정
  let answer = 1;

  //
  for (let [cloth, clothType] of clothes.values()) {
    // clothType이 clothTable에 존재하면 clothType 개수 1 증가
    if (clothTable.has(clothType))
      clothTable.set(clothType, clothTable.get(clothType) + 1);
    // 존재하지 않을 경우 1로 설정
    else clothTable.set(clothType, 1);
  }
  // answer = answer * clothType + 1 -> 모든 clothType에서 그 옷을 입지 않는 경우도 있기 때문이다.
  // ex) headgear -> yellow_hat, green_turban, x(3) / eyewear -> blue_sunglasses, X(2)
  // headgear * eyewear => 3 * 2 = 6
  for (let clothType of clothTable.values()) answer *= clothType + 1;
  // 전체가 다 되는 경우는 제외(yellow_hat, green_turban, blue_sunglasses) => answer - 1
  return answer - 1;
}

// 풀이 정답

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
