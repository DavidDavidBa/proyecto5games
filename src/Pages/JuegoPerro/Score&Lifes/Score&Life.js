import { printLifes } from './Lifes.js'
import { printScore } from './Score.js'

export const printScoreAndLife = () => {
  const divGame = document.querySelector('#catching')
  const divElements = document.createElement('div')

  divElements.className = 'scoreAndLife'
  printScore(divElements)
  printLifes(divElements)

  divGame.append(divElements)
}
