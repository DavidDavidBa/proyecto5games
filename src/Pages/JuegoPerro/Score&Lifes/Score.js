export const printScore = (divElements) => {
  const divScore = document.createElement('div')
  const pScore = document.createElement('p')
  pScore.innerText = 'Puntos'

  const score = document.createElement('h4')
  score.className = 'scoreNum'
  score.innerText = '0'

  divScore.className = 'score'

  divScore.append(pScore)
  divScore.append(score)
  divElements.appendChild(divScore)
}
