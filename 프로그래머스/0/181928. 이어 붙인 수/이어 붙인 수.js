function solution(num_list) {
    let evenStr = ''; // 짝수의 문자열을 저장할 변수
    let oddStr = '';  // 홀수의 문자열을 저장할 변수

    // 배열의 각 요소를 순회하면서 짝수와 홀수의 문자열을 생성
    num_list.forEach(num => {
        num % 2 === 0 ? evenStr += num : oddStr += num;
    });

    // 짝수와 홀수를 문자열로 이어붙인 후 숫자로 변환
    const evenNum = evenStr === '' ? 0 : parseInt(evenStr, 10);
    const oddNum = oddStr === '' ? 0 : parseInt(oddStr, 10);

    // 두 숫자의 합을 반환
    return evenNum + oddNum;
}