let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(" ");

// 0. 두 수는 무조건 3자리 숫자 => 아닐 경우 프로그램 종료
input.forEach(
    i => (i.length > 3 || i.includes('0'))&& process.exit()
)

// 1. 입력 받은 문자열 배열을 각 요소마다 split한 후 split된 또 다른 문자열 배열을
// reverse()를 통해 문자열 반전
const reverseStrArr = input.map(i => i.split('').reverse());

// 2. 다시 넣기 위한 arr 추가
const answerArr = [];

// 3. reverseStrArr에 있는 각 요소 순회
for(str of reverseStrArr) {
    // 3-1 배열을 flat해서 join => 반전된 문자열 완성!
    // 3-2 이 반전된 문자열을 answerArr에 추가
    answerArr.push(str.flat().join(''));
}

// 4. answerArr에 있는 값 중 가장 큰 값 출력
console.log(Math.max(...answerArr))