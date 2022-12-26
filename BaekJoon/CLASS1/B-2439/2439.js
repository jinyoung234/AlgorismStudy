let input = Number(require('fs').readFileSync(__dirname+'/input.txt').toString().trim())

// 1. 공백과 별을 저장하기 위한 변수
let star = '';

// 2. 별 갯수를 카운트 하기위한 변수 초기값은 1
let count = 1;

// 3. 입력받은 값 순회
for(let i = input; i > 0; i--) {
    // 3-1 공백은 입력받은 값 -1만큼, 별은 count 수 만큼 추가 후 개행문자도 같이 추가하여 star에 더함
    star += ' '.repeat(i-1) + '*'.repeat(count) + "\n"
    // 3-2 count 1 증가
    ++count
}

// 4. star 출력
console.log(star);