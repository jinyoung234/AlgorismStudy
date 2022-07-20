let input = 9;
let num = input;

// 2. while을 위한 sum(각 자리수 더한 값), i(사이클 횟수) 세팅
let sum;
let i = 0;

while(true) {
    i++;

    // 3. sum = 기존 값의 왼쪽 자리 수  + 오른쪽 자리 수
    sum = Math.floor(num/10)+num%10;
    // 4. num = 기존 값의 오른쪽 자리 수 *10 + sum의 오른쪽 자리 수
    num = (num%10)*10+sum%10; 

    // 5. 만약 입력 값과 num이 일치한다면
    if(input === num) {
        // 6. 탈출 그게 아니라면 while문 지속
        break;
    }
}
// 7. 사이클의 횟수
console.log(i);