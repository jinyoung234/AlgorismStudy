// 다른 풀이

let input = (require('fs').readFileSync(__dirname+'/input.txt').toString());

let arr = input.split("\n")
// 문자열의 길이가 80이 넘어갈 경우 프로그램 종료
if(Number(input[0]) === 0) {
    process.exit();
}

let stringNum = arr.splice(1).reduce((prev,current) => prev+current).length;

if (stringNum >= 80 || stringNum <= 0) {
    process.exit();
}


// 첫 번째 줄
let oxNum = Number(arr[0]);

// 두 번째 줄
let oxArr = input.split("\n");

let oxArr3 = oxArr.splice(1,oxArr.length);
// 딕셔너리 생성
let oxArr2 = {}

// 숫자 추가 위한 count
let count;

// 딕셔너리에 있는 프로퍼티들 순회
for(let a = 1; a <= oxNum; a++) {
    // 딕셔너리 프로퍼티 바뀔 때 마다 카운트 초기화
    answer = 0;
    count = 1;
    let stack = [];
    // 딕셔너리에 있는 문자열을 배열로 만듬
    oxArr2[a+""] = oxArr3[a-1].split('');
    // 딕셔너리에 있는 배열을 순회
    for(let b = 0; b < oxArr2[a+""].length; b++) {
        // 각 요소가 'O'인 경우
        if(oxArr2[a+""][b] === 'O') {
            // b가 0이면 무조건 카운트 1 증가 후 stack에 O 추가
            if(b === 0) {
                answer += 1;
            // 연속해서 O인 경우 카운트 b+1 증가
            } else if (stack[b-1] === 'O') {
                answer += (count+1);
                ++count; 
            // 연속하지 않으면 1 증가 후 카운트 1로 초기화    
            } else {
                answer += 1;
                count = 1;
            }           
            // O인 경우 stack에 O추가
            stack.push('O');
        } else {
            // 아니면 stack에 X추가
            stack.push('X');
        }
    }
    console.log(answer);
}
