/**
 * 마법의 엘레베이터
 * (https://www.notion.so/08d20a42419646bfbd9afbc5d6c1fb00)
 */
const getButtons = (len) => {
  const buttonArr = [];
  for (let i = 0; i < len; i++) {
    buttonArr.push([Math.pow(10, i) * -1, Math.pow(10, i)]);
  }
  return buttonArr;
};

const decreaseStorey = (storey, buttons, l) => {
  let cnt = 0;
  while (true) {
    if (storey % Math.pow(10, l + 1) === 0) return [storey, cnt];
    else {
      storey += buttons[l][0];
      cnt++;
    }
  }
};

const increaseStorey = (storey, buttons, l) => {
  let cnt = 0;
  while (true) {
    if (storey % Math.pow(10, l + 1) === 0) return [storey, cnt];
    else {
      storey += buttons[l][1];
      cnt++;
    }
  }
};

function solution(storey) {
  const n = storey.toString().length;
  let answer = 0;
  const buttons = getButtons(n + 1);
  let l = 0;
  while (storey != 0) {
    const [d_storey, d_cnt] = decreaseStorey(storey, buttons, l);
    const [i_storey, i_cnt] = increaseStorey(storey, buttons, l);
    if (d_cnt > i_cnt) {
      answer += i_cnt;
      storey = i_storey;
    } else if (d_cnt === i_cnt) {
      const [_, d__cnt] = decreaseStorey(d_storey, buttons, l + 1);
      const [__, i__cnt] = increaseStorey(i_storey, buttons, l + 1);
      if (d__cnt > i__cnt) {
        answer += i_cnt;
        storey = i_storey;
      } else {
        answer += d_cnt;
        storey = d_storey;
      }
    } else {
      answer += d_cnt;
      storey = d_storey;
    }
    l++;
  }
  return answer;
}
