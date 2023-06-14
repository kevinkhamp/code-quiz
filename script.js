const playBtn = document.getElementById('play-btn');
const questionContEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-btn');
let score = 0;

let randomQuestion, currentQuestionIndex;

playBtn.addEventListener('click', startGame);

function startGame() {
    console.log('It works!');
    playBtn.classList.add('hide');
    questionContEl = questions.sort(() => Math.random() = .5)
    currentQuestionIndex = 0
    questionContEl.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestion[currentQuestionIndex]);

}

function showQuestion(question) {
    resetState()
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectedAnswer);
        answerBtnEl.appendChild(button);
    })
}

function resetState() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

function selectedAnswer(event) {
    const selectedBtn = event.target;
    const correct = selectedBtn.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerBtnEl.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');

    }
    else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

const questions = [
    {
        question: 'Who was the pilot of the Eva-01?',
        answers: [
            {
                text: 'Shinji',
                correct: true
            }, {
                text: 'Ryuku',
                correct: false
            }, {
                text: 'Asuna',
                correct: false
            }, {
                text: 'Ren',
                correct: false
            },
        ]
    },
    {
        question: 'What does the fox say?',
        answers: [
            {
                text: 'womp womp wompapow',
                correct: false
            }, {
                text: 'ring ding ding ding',
                correct: true
            }, {
                text: 'owowowowow',
                correct: false
            }, {
                text: 'ayayayayay',
                correct: false
            },
        ]
    },
    {
        question: 'What does honk shoo mean?',
        answers: [
            {
                text: 'Dazed',
                correct: false
            }, {
                text: 'Confused',
                correct: false
            }, {
                text: 'Impatient',
                correct: true
            }, {
                text: 'Sleepy',
                correct: false
            },
        ]
    },
    {
        question: 'What should I eat tomorrow?',
        answers: [
            {
                text: 'Sushi',
                correct: true
            }, {
                text: 'Sushi',
                correct: true
            }, {
                text: 'Sushi',
                correct: true
            }, {
                text: 'Sushi',
                correct: true
            },
        ]
    }, {
        question: 'Why are we still here?',
        answers: [
            {
                text: 'Just to suffer',
                correct: true
            }, {
                text: 'Every night',
                correct: false
            }, {
                text: 'I can feel my leg and my arm',
                correct: false
            }, {
                text: 'even my fingers',
                correct: false
            },
        ]
    }
];
