let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").slice(1);

// 1. 정렬 -> a와 b의 길이를 비교해서 정렬(a.length - b.legnth) or a와 b를 사전순으로 정렬(a.localeCompare(b))
const sortArr = input.sort((a,b) => {
    return  a.length - b.length || a.localeCompare(b);
})

// 2. 중복되는 문자열 제거하기 위해 Set 객체로 생성
const notDuplicate = new Set(sortArr)

// 3. Set 객체를 다시 array로 변환
const answerArr = Array.from(notDuplicate);

// 4. for of 문을 통해 concole로 출력
for(answer of answerArr) {
    console.log(answer);
}

