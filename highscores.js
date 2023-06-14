const highscoreslist = document.querySelector('#highscorelist')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highscoreslist.innerHTML = highScores.map(score => {
    return `<li class='high-score'>${score.name} -- ${score.score}</li>`
}).join('')