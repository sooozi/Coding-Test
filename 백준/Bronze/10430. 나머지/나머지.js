const num = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(num[0]);
const B = parseInt(num[1]);
const C = parseInt(num[2]);
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);