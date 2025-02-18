const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function(){
    let str = input[0];
    let swappedString = swapCase(str);
    console.log(swappedString);
});

function swapCase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}