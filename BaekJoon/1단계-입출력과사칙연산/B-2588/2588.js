// 1000번과 동일
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 위에 있는 세 자리수는 숫자로 만들어 변수에 저장
let firstNum = Number(input[0]);

// 2. 밑에 있는 세 자리수는 문자열로 저장
let SecondNum = input[1];

// 3. 저장된 문자열을 split을 통해 각 자리수의 배열로 만든 후 map을 통해 숫자로 변환한 배열로 만듬
SecondNum = SecondNum.split('').map(i => Number(i));

// 4. (3)에 들어가는 값
// 첫 번째 세 자리수 * 두 번째 세 자리수 중 1의 자리
console.log(firstNum * SecondNum[2]); 

// 5. (4)에 들어가는 값
// 첫 번째 세 자리수 * 두 번째 세자리수 중 10의 자리
// SecondNum[1]에서 * 10을 해야 10의 자리가 됨
// 37760이 나오기때문에 10으로 나눠줌
console.log(firstNum * (SecondNum[1]*10)/10);

// 6. (5)에 들어가는 값 
// 첫 번째 세 자리수 * 두 번째 세자리수 중 100의 자리
// SecondNum[1]에서 * 100을 해야 100의 자리가 됨
// 141600이 나오기 때문에 100으로 나눠줌
console.log(firstNum * (SecondNum[0]*100)/100);

// 7. (6)에 들어가는 값
// 4, 5(10으로 나눴던 값 생략), 6(100으로 나눴던 값 생략)을 모두 더하기
console.log(
    firstNum * SecondNum[2] + firstNum * (SecondNum[1]*10) + firstNum * (SecondNum[0]*100)
);