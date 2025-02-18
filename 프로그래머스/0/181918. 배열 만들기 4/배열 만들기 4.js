function solution(arr) {
    let stk = [];
    for (let i = 0; i < arr.length; i++) {
        // 스택의 마지막 요소가 현재 요소보다 크거나 같을 때 제거
        while (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        }
        // 현재 요소를 스택에 추가
        stk.push(arr[i]);
    }
    return stk;
}