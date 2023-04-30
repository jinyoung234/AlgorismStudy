/**
 * 키패드 누르기
 * (https://www.notion.so/6e44db24566340c6b8daaede9430ff58?v=4b38ff2c001841828ab3b95f0cd4e3a0&p=4efaae24ea4245a2a00a43c18a595104&pm=s)
 */
function solution(numbers, hand) {
  function getDistance(padNumber, target) {
    const [px, py] = keypad[padNumber];
    const [tx, ty] = keypad[target];
    return Math.abs(px - tx) + Math.abs(py - ty);
  }
  function getDirection(num) {
    const isLeft = num === 1 || num === 4 || num === 7;
    const isRight = num === 3 || num === 6 || num === 9;
    if (isLeft) {
      left = num;
      return "L";
    } else if (isRight) {
      right = num;
      return "R";
    } else {
      if (getDistance(left, num) > getDistance(right, num)) {
        right = num;
        return "R";
      } else if (getDistance(left, num) < getDistance(right, num)) {
        left = num;
        return "L";
      } else if (getDistance(left, num) === getDistance(right, num)) {
        if (hand === "right") {
          right = num;
          return "R";
        } else {
          left = num;
          return "L";
        }
      }
    }
  }
  let answer = "";
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let [left, right] = ["*", "#"];
  numbers.forEach((number) => {
    answer += getDirection(number);
  });
  return answer;
}
