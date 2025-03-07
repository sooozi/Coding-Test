const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

let uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

console.log(uniqueSortedNumbers.join(' '));