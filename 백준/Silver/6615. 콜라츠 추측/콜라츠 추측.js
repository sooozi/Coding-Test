const num = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function collatzSteps(x) {
    const steps = new Map();
    let step = 0;
    while (x !== 1) {
        if (steps.has(x)) break;
        steps.set(x, step++);
        if (x % 2 === 0) x /= 2;
        else x = 3 * x + 1;
    }
    steps.set(1, step++); // Include 1 in the steps.
    return steps;
}

function findMeetingPoint(a, b) {
    const aSteps = collatzSteps(a);
    const bSteps = collatzSteps(b);

    let meetingValue = -1;
    let aStepIndex = 0;
    let bStepIndex = 0;

    for (const [key, value] of aSteps.entries()) {
        if (bSteps.has(key)) {
            meetingValue = key;
            aStepIndex = value;
            bStepIndex = bSteps.get(key);
            break;
        }
    }

    return { aStepIndex, bStepIndex, meetingValue };
}

const results = [];

for (const line of num) {
    const [A, B] = line.split(' ').map(Number);
    if (A === 0 && B === 0) break;
    const { aStepIndex, bStepIndex, meetingValue } = findMeetingPoint(A, B);
    results.push(`${A} needs ${aStepIndex} steps, ${B} needs ${bStepIndex} steps, they meet at ${meetingValue}`);
}

console.log(results.join('\n'));