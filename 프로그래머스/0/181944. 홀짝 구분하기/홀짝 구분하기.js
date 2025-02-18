const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = (Number(input[0])% 2 === 1 ? `${Number(input[0])} is odd`: `${Number(input[0])} is even`);
    console.log(n);
});