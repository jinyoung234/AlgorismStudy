let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().toLowerCase()

// 1. a~z까지의 count를 위한 배열 생성
let countArr = [];
// 2. a~z까지 순회
for(let i = 0; i < 26; i++) {
    // 2-1. a~z번째 인덱스는 number값이 들어오도록 0으로 초기화
    countArr[i] = 0;
    // 2-2. 입력받은 문자열 순회
    for(let j = 0; j < input.length; j++) {
        // 2-3. 각 문자열이 아스키코드에 해당되면 문자열에 해당되는 인덱스의 카운트 증가
        if(input[j] === String.fromCharCode(i+97)) {
            ++countArr[i]
        }
    }
}

// 3. 중복되는 값들을 담는 배열 생성
let duplicationArr = countArr.filter(i => i === Math.max(...countArr))

// 4. 중복되는 배열이 존재하는 건 가장 큰 값들이 여러 개 존재하는 거니까 ? 출력
// 5. 그게 아니면 가장 큰 값의 문자를 대문자로 출력
duplicationArr.length > 1 ? console.log("?") : console.log(String.fromCharCode(countArr.indexOf(Math.max(...countArr))+97).toUpperCase())
