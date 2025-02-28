function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let scores = [0, 0, 0]; 

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === first[i % first.length]) scores[0]++;
        if (answers[i] === second[i % second.length]) scores[1]++;
        if (answers[i] === third[i % third.length]) scores[2]++;
    }

    const maxScore = Math.max(...scores);

    let result = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) result.push(i + 1); 
    }

    return result;
}