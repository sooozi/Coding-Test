function solution(a, d, included) {
    var answer = 0;
    for (let i = 0; i < included.length; i++) {
        let term = a + (i * d);
        
        if(included[i]) {
            answer += term;
        }
    }
    return answer;
}