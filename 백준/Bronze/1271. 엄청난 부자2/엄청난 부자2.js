const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().split(' ');
const money = BigInt(num[0]);
const People = BigInt(num[1]);

console.log((money / People).toString());
console.log((money % People).toString());