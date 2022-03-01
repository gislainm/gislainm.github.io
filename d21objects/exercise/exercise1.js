const student1 = {
    studentId: 's101',
    quizAnswers: [1, 1, 2, 4],

};
const student2 = {
    studentId: 's102',
    quizAnswers: [2, 1, 2, 2],
};
const student3 = {
    studentId: 's103',
    quizAnswers: [3, 1, 3, 4],
};

let quiz = [];
quiz.push(student1, student2, student3);


function gradeQuiz(quizArr, correctAnswers) {
    let grades = [];
    for (let student of quizArr) {
        const studentScore = computeScore(student.quizAnswers, correctAnswers);
        grades.push(studentScore);
    }
    return grades;
}

function computeScore(ansArr, correctArr) {
    let score = 0;
    for (let i = 0; i < ansArr.length; i++) {
        if (ansArr[i] === correctArr[i]) {
            score++;
        }
    }
    return score;
}

console.log("expect [3, 2, 3]", gradeQuiz(quiz, [3, 1, 2, 4]));

let titles = ['a', 'c', 'f', 'e', 'b', 'd'];
titles = titles.sort();
const titleString = titles.join("\n");
console.log(titleString);