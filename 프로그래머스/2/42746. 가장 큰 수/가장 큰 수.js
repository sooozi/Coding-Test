function solution(numbers) {
    return numbers
        .map(String) // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b)) // 조합한 값 비교하여 정렬
        .join('') // 문자열로 합침
        .replace(/^0+/, '0'); // '000' 같은 경우 '0'으로 변환
}
