/**
 * 거리두기 확인하기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=a492705040b743e285fd18080bd8ff6f&pm=s)
 */
const getPersonsArr = (place) => {
  const persons = [];
  for (let row = 0; row <= 4; row++) {
    for (let col = 0; col <= 4; col++) {
      if (place[row][col] === "P") {
        persons.push([row, col]);
      }
    }
  }
  return persons;
};

const isCorrect = (place) => {
  const [dy, dx] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  const persons = getPersonsArr(place);
  while (persons.length) {
    const [y, x] = persons.shift();
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (place[ny][nx] === "X") continue;
      if (place[ny][nx] === "P") return 0;
      for (let j = 0; j < 4; j++) {
        const [_ny, _nx] = [ny + dy[j], nx + dx[j]];
        if (_nx < 0 || _nx >= 5 || _ny < 0 || _ny >= 5) continue;
        if (_nx === x && _ny === y) continue;
        if (place[_ny][_nx] === "P") return 0;
      }
    }
  }
  return 1;
};

function solution(places) {
  return places.map((place) => {
    return isCorrect(place.map((p) => p.split("")));
  });
}
