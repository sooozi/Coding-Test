const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
const changeList = input.slice(1).map(Number);
const coinList = [25, 10, 5, 1];
let result = "";

changeList.forEach(change => {
    const countNums = []; // 현재 거스름돈 change를 각 동전 단위별로 나눈 개수를 저장할 배열

    coinList.forEach(coin => {
        countNums.push(Math.floor(change / coin));
        change %= coin;
    });

    result += countNums.join(" ") + "\n";
});

console.log(result.trim());