function solution(arr, queries) {
    // 각 쿼리마다 주어진 인덱스의 값을 교환
    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    
    return arr; // 교환된 배열 반환
}