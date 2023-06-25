let input = (require('fs').readFileSync(__dirname+'/input.txt').toString());

// 1. 과목수와 각 과목의 점수를 split을 통해 분리
num = input.split('\n');

// 2. 만약 과목 수가 1000이 넘어가면 프로그램 종료
if( Number(num[0]) > 1000 ) {
    process.exit();
}

// 3. 과목수는 변수에 저장
let lecture  = Number(num[0]);


// 4. 점수는 배열에 저장
let score = num[1].split(" ").map(i => Number(i))

// 5. 만약 점수 중 100점이 넘어가거나 최대값과 최소값이 0인 경우 프로그램 종료
if(Math.max(...score) > 100 || (Math.max(...score) === 0 && Math.min(...score) === 0)){
    process.exit();
}

// 6. 점수 중 가장 높은 점수는 max에 저장
let max = Math.max(...score);

// 7. 세준이만의 점수로 재 정의
let newScore = score.map(i => i/max*100);

// 8. 점수 세기 위한 변수 정의 후 새로운 점수들을 더하여 count에 저장
let count = 0;

for(i = 0; i < newScore.length; i++) {
    count += newScore[i];
}

// 9. 새로운 점수에 대한 새로운 평균을 정의
let newAverage = count / lecture;

// 10. 답 출력
console.log(newAverage);