const questionEl = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answer-text'));
const scoreText = document.querySelector('#score')

let currentQuestionIndex = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []

const questions = [
    {
        question: 'Who was the pilot of the Eva-01?',
        choice1: 'Shinji',
        choice2: 'Ryuku',
        choice3: 'Asuna',
        choice4: 'Ren',
        answer: 1,
        
    },
    {
        question: 'What does the fox say?',
        choice1: 'womp womp wompapow',
        choice2: 'ring ding ding ding',
        choice3: 'owowowowow',
        choice4: 'ayayayayay',
        answer: 2,
    },
    {
        question: 'What does honk shoo mean?',
        choice1: 'Dazed',
        choice2: 'Confused',
        choice3: 'Impatient',
        choice4: 'Sleepy',
        answer: 4,
    },
    {
        question: 'What should I eat tomorrow?',
        choice1: 'Sushi',
        choice2: 'Pho',
        choice3: 'PBR',
        choice4: 'Rocks',
        answer: 1
    }, {
        question: 'Why are we still here?',
        choice1: 'Just to suffer',
        choice2: 'Every night',
        choice3: 'I can feel my leg and my arm',
        choice4: 'even my fingers',
        answer: 1,
    }
]

const SCORE_POINTS = 25
const MAX_QUESTIONS = 4

startGame = () => {
    questionsCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('recentScore', score)

        return window.location.assign('./end.html')
    }

    questionsCounter++
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestionIndex = availableQuestions[questionsIndex]
    questionEl.innerText = currentQuestionIndex.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestionIndex['choice'+number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestionIndex.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()