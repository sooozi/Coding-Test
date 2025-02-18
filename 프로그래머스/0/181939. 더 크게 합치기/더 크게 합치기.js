function solution(a, b) {
    let concat1 = parseInt(a.toString() + b.toString());
    let concat2 = parseInt(b.toString() + a.toString());
    
    return Math.max(concat1, concat2);
}