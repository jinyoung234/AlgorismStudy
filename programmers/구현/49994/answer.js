/**
 * 방문 길이
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=ad4d129ee37249289d97c30e22da4401&pm=s)
 */
const direction = Object.freeze({
  U: [0, -1],
  D: [0, 1],
  L: [-1, 0],
  R: [1, 0],
});

const getMoveCoordinate = (prevCoorindate, dirType) => {
  const [x, y] = prevCoorindate;
  switch (dirType) {
    case "U": {
      return [x + direction["U"][0], y + direction["U"][1]];
    }
    case "D": {
      return [x + direction["D"][0], y + direction["D"][1]];
    }
    case "L": {
      return [x + direction["L"][0], y + direction["L"][1]];
    }
    case "R": {
      return [x + direction["R"][0], y + direction["R"][1]];
    }
    default:
      return [];
  }
};

const getIsFirstWay = (curCoor, visited) => {
  const [xCoor, yCoor] = curCoor;
  const sameWay = visited.filter(([prevXCoor, prevYCoor]) => {
    return (
      prevXCoor[0] === xCoor[0] &&
      prevXCoor[1] === xCoor[1] &&
      prevYCoor[0] === yCoor[0] &&
      prevYCoor[1] === yCoor[1]
    );
  });
  return sameWay.length === 0;
};

function solution(dirs) {
  var answer = 0;
  const visited = [];
  let [x, y] = [5, 5];
  [...dirs].forEach((dir) => {
    let [nx, ny] = getMoveCoordinate([x, y], dir);
    const xCoor = [x, nx].sort((a, b) => a - b);
    const yCoor = [y, ny].sort((a, b) => a - b);
    if (nx >= 0 && nx <= 10 && ny >= 0 && ny <= 10) {
      if (getIsFirstWay([xCoor, yCoor], visited)) {
        answer++;
        visited.push([xCoor, yCoor]);
      }
      [x, y] = [nx, ny];
    }
  });
  return answer;
}
