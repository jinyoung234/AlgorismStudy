/**
 * 이모티콘 할인 행사
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=0833aae2790c42c38f73ef57d1fecebd&pm=s)
 */
const getBuyUsersAndPrice = (saleCase, users, emotionPrices) => {
  let [buyEmoticonPlusUsers, buyEmoticonsPrice] = [0, 0];
  for (let user of users) {
    const [buyMinimumPercent, buyMaxinumPrice] = user;
    let buyPrice = 0;
    // 유저가 구매하려는 할인률 조건을 만족하는지 확인 후 이모티콘 가격만큼 구매 금액에 추가
    for (let i = 0; i < saleCase.length; i++) {
      const salePercent = saleCase[i];
      if (buyMinimumPercent > salePercent) continue;
      buyPrice += emotionPrices[i];
    }
    // 만약 구매한 금액이 살 수 있는 가격 이상인 경우
    if (buyMaxinumPrice <= buyPrice) {
      // 이모티콘 플러스 서비스 가입자 1 증가
      buyEmoticonPlusUsers++;
      // 그렇지 않다면 이모티콘 판매액을 구매한 가격만큼 증가
    } else {
      buyEmoticonsPrice += buyPrice;
    }
  }
  return [buyEmoticonPlusUsers, buyEmoticonsPrice];
};

const getAllSaleCaseList = (emolen) => {
  const [temp, saleCases] = [[], []];
  const salePercentList = [10, 20, 30, 40];
  // 중복 순열
  function dfs(l) {
    if (l === emolen) {
      saleCases.push(temp.slice());
      return;
    }
    for (let i = 0; i < 4; i++) {
      temp[l] = salePercentList[i];
      dfs(l + 1);
    }
  }
  dfs(0);
  return saleCases;
};

function solution(users, emoticons) {
  const answer = [];
  const saleCases = getAllSaleCaseList(emoticons.length);
  for (let saleCase of saleCases) {
    const genEmoticonPrice = (emoticonPrice, i) =>
      emoticonPrice - emoticonPrice * (saleCase[i] / 100);
    const emotionPrices = emoticons.slice().map(genEmoticonPrice);
    const [buyEmoticonPlusUsers, buyEmoticonsPrice] = getBuyUsersAndPrice(
      saleCase,
      users,
      emotionPrices
    );
    answer.push([buyEmoticonPlusUsers, buyEmoticonsPrice]);
  }

  // 이모티콘 플러스 서비스 가입자를 최대한 늘리면서, 이모티콘 판매액 또한 최대가 되도록 정렬
  return answer.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return b[0] - a[0];
  })[0];
}
