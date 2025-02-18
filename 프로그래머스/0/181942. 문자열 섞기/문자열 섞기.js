function solution(str1, str2) {
    const answer = [...str1].map((s, i) => s + str2[i]).join('');
    return answer;
}