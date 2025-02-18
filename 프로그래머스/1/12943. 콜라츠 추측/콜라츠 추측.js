function solution(num, arr = [], count = 0) {
    if (num === 1) {
        return count === 0 ? 0 : arr.length;
    }
    if (count >= 500) {
        return -1;
    }
    arr.push(num);     
    if (num % 2 === 0) {
        return solution(num / 2, arr, count + 1);
    }
    return solution(3 * num + 1, arr, count + 1);
}