// 컴퓨터를 제조하는 회사인 KOI 전자에서는 제조하는 컴퓨터마다 6자리의 고유번호를 매긴다.
// 고유번호의 처음 5자리에는 00000부터 99999까지의 수 중 하나가 주어지며 6번째 자리에는 검증수가 들어간다.
// 검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지이다.

// 예를 들어 고유번호의 처음 5자리의 숫자들이 04256이면,
// 각 숫자를 제곱한 수들의 합 0+16+4+25+36 = 81 을 10으로 나눈 나머지인 1이 검증수이다.

let input = require('fs').readFileSync(__dirname+'/input.txt').toString();
// 1. 각 자리수를 split 후 map을 통해 각 자리 숫자에 대한 숫자 배열 생성
let num = input.split(" ").map(i => Number(i))

// 반복문을 위한 add 변수
let add = 0;

// 2. 반복문을 통해 각 자리수를 제곱 후 더함
for (let i = 0; i < num.length; i++) {
    add += Math.pow(num[i], 2);
}

// 3. 더한 값에 10을 나눈 나머지가 검증 수
let verification = add % 10

// 4. 검증 수 출력
console.log(verification)