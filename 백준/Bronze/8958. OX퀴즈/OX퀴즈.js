const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testLength = Number(input[0]);

for (let i = 1; i <= testLength; i++) {
    let test = input[i];
    let score = 0;
    let currentScore = 0;

    for (let t = 0; t < test.length; t++) {
	    if(test[t] === 'O') {
		    currentScore++;
	    } else {
		    currentScore = 0;
	    }
	    score += currentScore;
    }
    console.log(score);
}