function solution(a, b, c) {
    // 모든 숫자가 다른 경우
    if (a !== b && b !== c && a !== c) {
        return a + b + c;
    }
    
    // 두 숫자가 같고 나머지 하나가 다른 경우
    if (a === b && b !== c || a === c && b !== c || b === c && a !== b) {
        return (a + b + c) * (a * a + b * b + c * c);
    }
    
    // 모든 숫자가 같은 경우
    if (a === b && b === c) {
        return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
    }
}