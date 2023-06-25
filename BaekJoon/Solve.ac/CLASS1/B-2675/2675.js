let test = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n'
)
// testcase 추출
let testcase = test[0];

// testcase가 1보다 작고 1000보다 크면 종료
if(testcase < 1 || testcase > 1000) {
  process.exit();
}

// 입력 받은 배열
let input = test.slice(1);

// 딕셔너리 생성
let arr = {};

// 반복횟수 초기화
let repeatNum = 0;
let arr4;
// 입력 받은 배열 순회
for(let i = 0; i < input.length; i++) {
  // 딕셔너리의 프로퍼티의 대한 값 (배열) 설정
  arr4 = input[i].split(' ');
  arr[i+""] = input[i].split(' ');

  // 반복횟수는 프로퍼티 값의 배열 0번째 요소
  repeatNum = Number(arr[i+""][0]);

  // 반복 횟수가 0이거나 8보다 크면 종료
  if(repeatNum === 0 || repeatNum > 8 ) {
    process.exit();
  }
  // 문자열 길이가 1보다 작고 20보다 크면 종료
  if(arr[i+""][1].length < 1 || arr[i+""][1].length > 20) {
    process.exit();
  }

  // 문자열을 다시 스플릿 해서 배열로 생성
  let arr2 = arr[i+""][1].split('');

  // 빈 문자열 생성
  let string= '';

  // 문자열 배열을 순회하며 각 문자열을 반복횟수 만큼 반복해 string에 저장
  for(let a = 0; a < arr2.length; a++) {
    string += arr2[a].repeat(repeatNum);
  }
  
  // String 출력
  console.log(string);
}


