function solution(l, r) {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        let numStr = i.toString(); // 정수 -> 문자열
        
        // 모든 문자가 '0' 또는 '5'인지 확인
        if (numStr.split('').every(char => char === '0' || char === '5')) {
            answer.push(i);
        }
    }
    
    // 조건을 만족하는 정수가 없으면 [-1] 반환
    if (answer.length === 0) {
        return [-1];
    }
    
    return answer;
}