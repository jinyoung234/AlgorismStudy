/**
 * 주차 요금 계산
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=9babc9f153214e92a5b2d3f8133c38c8&pm=s)
 */
function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  var answer = [];
  // 차량 번호들에 대한 입출차 기록을 담기 위한 dictionary
  const dictionary = {};
  // 공백 단위로 split 하여 2차원 배열 형태로 변경
  records = records.map((record) => record.split(" "));
  // records를 돌며 차량 번호에 대한 입출차 기록이 담긴 dictionary 생성
  records.forEach(([hour, carNum, history]) => {
    if (!dictionary[carNum]) dictionary[carNum] = [];
    dictionary[carNum].push([hour, history]);
  });
  // dictionary 내 차량 번호 순회
  for (const carNum in dictionary) {
    // 시간을 더할 sum, 이전 분인 prevMinute을 0으로 초기화
    let [sum, prevMinute] = [0, 0];
    // 차량 번호에 대한 모든 입 출차 기록 들을 순회
    for (let i = 0; i < dictionary[carNum].length; i++) {
      const [hour, history] = dictionary[carNum][i];
      // 입 출차 시간을 : 로 split 후 현재 시간에 대해 분으로 반환(시간 * 60 + 분)
      const curMinute = hour.split(":").reduce((acc, cur) => +acc * 60 + +cur);
      // 만약 내역이 IN인 경우
      if (history === "IN") {
        // 만약 현재 내역이 IN인데, 마지막인 경우
        if (i === dictionary[carNum].length - 1) {
          // 23:59을 분으로 변환 후 현재 분을 뺀 값을 sum에 추가
          sum += 1439 - curMinute;
        } else {
          // 마지막이 아니면 현재 분을 prevMinute에 할당
          prevMinute = curMinute;
        }
      }
      // 만약 현재 내역이 OUT인 경우
      if (history === "OUT") {
        // 현재 분 - 이전 분이 0보다 작을 경우 sum에 다음과 같은 결과 값 할당
        if (curMinute - prevMinute < 0) {
          sum += prevMinute - curMinute;
          // 0보다 클 경우 sum에 다음과 같은 결과 값 할당
        } else {
          sum += curMinute - prevMinute;
        }
      }
    }
    // answer에 누적 시간 및 차 번호 추가
    answer.push([carNum, sum]);
  }
  // 각 차 번호에 대한 시간을 주차 요금으로 변환
  answer = answer
    .sort((a, b) => a[0] - b[0])
    .map(([_, time]) => {
      if (defaultTime >= time) {
        return defaultFee;
      } else {
        const cost = Math.ceil((time - defaultTime) / unitTime) * unitFee;
        return defaultFee + cost;
      }
    });
  return answer;
}
