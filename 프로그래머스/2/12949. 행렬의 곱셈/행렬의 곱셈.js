function solution(arr1, arr2) {
    let row = arr1.length; // arr1의 행 개수 (A)
    let col = arr2[0].length; // arr2의 열 개수 (C)
    let common = arr1[0].length; // arr1의 열 개수 == arr2의 행 개수 (B)

    // 결과 행렬 초기화 (A × C 크기)
    let result = Array.from({ length: row }, () => Array(col).fill(0));

    for (let i = 0; i < row; i++) { // arr1의 행 반복
        for (let j = 0; j < col; j++) { // arr2의 열 반복
            for (let k = 0; k < common; k++) { // 공통 크기 반복
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}