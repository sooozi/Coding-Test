function solution(array, n) {
    let answer = [];
    array.forEach(char => {
        if(char === n) {
            answer.push(char);
        }
    })
    return answer.length;
}