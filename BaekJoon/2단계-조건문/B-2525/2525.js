// <문제-2525>
// KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 
// 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다.
// 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다. 
// 또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다. 

// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때,
// 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 입력 받은 값을 공백 처리 후 배열로 다시 만들기
input = [input[0] + " " + input[1]];

// split을 통해 입력 받은 값을 배열의 각 요소에 number값으로 들어가도록 하기
inputArr = input[0].split(' ').map(i => Number(i));

// 시
let si = inputArr[0];
// 분
let bun = inputArr[1] + inputArr[2];

// while문을 통해 만약 현재 분 값이 60이 넘어갈 때 마다 시를 1 증가시킨 후 현재 분에서 - 60
// 60보다 작아 질 때 까지 반복
while(bun > 59) {
    ++si
    bun = bun - 60;
}

// 만약 시가 24시가 넘어가면 시는 초기화
if(si > 23) {
    si = si - 24; // 왜 si = 0은 안되는 걸까.. ㅜ
}

// 현재 시간 콘솔에 출력
console.log(si + " " + bun);
