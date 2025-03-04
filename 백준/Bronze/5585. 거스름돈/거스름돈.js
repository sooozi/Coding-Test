const prodPrice = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let change = 1000 - prodPrice; // 잔돈 계산
const coins = [500, 100, 50, 10, 5, 1]; // JOI잡화점의 잔돈을 배열에 넣기
let count = 0;

for (let i = 0; i < coins.length; i++) {
    count += Math.floor(change / coins[i]);
    change -= coins[i] * Math.floor(change / coins[i]);
}

console.log(count);