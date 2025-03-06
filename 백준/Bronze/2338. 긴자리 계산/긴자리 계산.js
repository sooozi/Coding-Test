const num = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const a = BigInt(num[0]);
const b = BigInt(num[1]);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());