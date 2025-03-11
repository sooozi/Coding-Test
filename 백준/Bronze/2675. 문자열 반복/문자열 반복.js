const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

for(let i = 1; i <= T; i++) {
    let [R, S] = input[i].split(' ');
    R = parseInt(R);
	  let P = ''; 
    
	  for (let char of S) {
	    P += char.repeat(R);
	  }

	  console.log(P);
}