let [i, j] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(" ").map(i => Number(i));

/* 유클리드 호제법 : gcd(A,B) = gcd(B, r) (단, A>B, A!=B, A=qB+r, 0<=r<B) */

// 1-1. 입력 받은 값 1
let a = i;
// 1-2. 입력 받은 값 2
let b = j;

// 2. 유클리드 호제법이 성립하기 위해 a>b 조건 성립 시킴
if(a < b) {
     emp = a;
     a = b;
     b = emp;
}

// 3. a를 b로 나눈 나머지 r
let r;

// 4. 유클리드 호제법 적용 (gcd(A,B) = gcd(B, r))
while(true) {
     r = a % b;
     a = b;
     b = r;
     if(b === 0) {
          break;
     }
}

// 5. 최대공약수와 최소공배수 구한 후 출력
let GCD = a;
let LCM = ( i / GCD ) * ( j / GCD ) * GCD 

console.log(GCD);
console.log(LCM);