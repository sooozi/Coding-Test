const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
    const numbers = line.split(' ').map(Number);
    
    // 입력의 첫 번째 숫자(N)로부터 연속 중복을 제거
    const N = numbers[0];
    if (N === 0) return; // 종료 조건

    const uniqueNumbers = [];
    for (let i = 1; i <= N; i++) {
        if (uniqueNumbers.length === 0 || uniqueNumbers[uniqueNumbers.length - 1] !== numbers[i]) {
            uniqueNumbers.push(numbers[i]);
        }
    }

    // 결과 출력
    console.log(`${uniqueNumbers.join(' ')} $`);
});