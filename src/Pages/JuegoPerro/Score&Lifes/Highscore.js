import { backCatching } from '../../../components/Utils/backButton.js'
import { printGameOver } from '../Gameover/Gameover.js'

export const printHighScore = (arrayScore) => {
  const divGame = document.querySelector('#catching')

  const divScore = document.createElement('div')
  const h2 = document.createElement('h2')

  divScore.append(h2)

  for (let i = 0; i < 3; i++) {
    const divPos = document.createElement('div')
    const h3Pos = document.createElement('h3')
    h3Pos.innerText = `${i + 1} `

    const h4Score = document.createElement('h4')
    h4Score.innerText = `${arrayScore[i]}  puntos `

    divPos.append(h3Pos)
    divPos.append(h4Score)
    divScore.append(divPos)
  }

  const backButton = backCatching()
  backButton.addEventListener('click', () => {
    printGameOver()
    divScore.remove()
  })

  h2.innerText = 'MEJORES PUNTOS'

  divScore.className = 'highScore'

  divScore.append(backButton)

  divGame.append(divScore)
}
