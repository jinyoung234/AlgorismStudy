let input = (require('fs').readFileSync(__dirname+'/input.txt').toString());

let num = input.split("\n");

for(let i = 0; i < num.length-1; i++) {
    let testCase = num[i].split(' ').map(i => Number(i));
    if(testCase[0] > 0 && testCase[1] < 10) {
        console.log(testCase[0] + testCase[1]);
    }
}