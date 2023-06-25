// <내 풀이>
// let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('')

// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// let string = [];
// for(let i = 0; i < arr.length; i++) {
//     if(input.includes(arr[i])) {
//         string += input.indexOf(arr[i]) + " ";
//     } else {
//         string += -1 + " ";
//     }
// }
// console.log(string);

// <다른 풀이>
let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();

// 1. 문자열 담기 위한 answerArr
let answerArr = [];

// 2. a~z(아스키코드 : 97~122)
for(let i = 97; i<= 122; i++) {
    // 2-1. 아스키 코드 -> 문자 변환
    let alphabet = String.fromCharCode(i);
    // 2-2. 문자 변환 한 값을 input에 대입하여 몇번째 인덱스에 있는지 구함
    let answer = input.indexOf(alphabet);
    // 2-3. 해당 인덱스 값을 answerArr에 추가
    answerArr += answer + " ";
}

// 3. 출력
console.log(answerArr)