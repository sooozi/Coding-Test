const S = require('fs').readFileSync('/dev/stdin').toString().trim()

const alphabet = Array(26).fill(-1);

for (let i = 0; i < S.length; i++) {
    const char = S[i];
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (alphabet[charIndex] === -1) { 
        alphabet[charIndex] = i; 
    }
}

console.log(alphabet.join(' '));