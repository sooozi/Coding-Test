const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(num[0]);
const b = parseInt(num[1]);

if(a == b) {
	console.log('==')
} else if(a > b) {
	console.log('>')
} else {
	console.log('<')
};