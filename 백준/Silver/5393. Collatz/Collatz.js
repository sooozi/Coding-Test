const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const x = parseInt(input[i]);
    let ans = 0;
    if (x % 2 === 0) {
        ans += x / 2;
    } else {
        ans += Math.floor(x / 2) + 1;
    }
  
    if (x % 6 === 0 || x % 6 === 4) {
        ans += Math.floor(x / 3);
    } else {
        ans += Math.floor(x / 3) + 1;
    }
    
    console.log(ans);
}