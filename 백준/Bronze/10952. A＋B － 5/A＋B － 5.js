const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    if (A === 0 && B === 0) {
        break;
    }
    console.log(A + B);
}