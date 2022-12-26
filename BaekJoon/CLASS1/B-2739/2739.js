let input = Number(require('fs').readFileSync(__dirname+'/input.txt').toString());

for(let i = 1; i <= 9; i++) {
    console.log(input + " * " + i + " = "  + (input * i));
}
