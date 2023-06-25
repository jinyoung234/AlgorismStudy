let input = Number(require('fs').readFileSync(__dirname+'/input.txt').toString().trim());

// 0. 조건
if(input > 100000) {
    process.exit();
}

// 1. 빈 문자열
let answer = '';

// 2. answer에 i값 + 개행 문자 추가 (시간 초과 나는 경우 반드시 빈 문자열에 개행문자 넣어서 출력!!)
for(let i = 1; i <= input; i++) {
    answer += i +'\n';
}

// 3. 출력
console.log(answer);