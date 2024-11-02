import { backPuzzle } from '../../../components/Utils/backButton.js'
import { printWin } from '../CheckWin/PrintWin.js'

export const printBestTime = (arrayTime) => {
  const divGame = document.querySelector('#puzzle')

  const divTimes = document.createElement('div')
  const h2 = document.createElement('h2')

  divTimes.append(h2)

  for (let i = 0; i < 3; i++) {
    const divPos = document.createElement('div')
    const h3Pos = document.createElement('h3')
    h3Pos.innerText = `${i + 1} `

    const h4Time = document.createElement('h4')
    if (arrayTime[i] === undefined) {
      arrayTime[i] = ' '
    }
    h4Time.innerText = `${arrayTime[i]}`

    divPos.append(h3Pos)
    divPos.append(h4Time)
    divTimes.append(divPos)
  }

  const backButton = backPuzzle()

  backButton.addEventListener('click', () => {
    printWin()
    divTimes.remove()
  })

  h2.innerText = '¡MEJORES TIEMPOS!'

  divTimes.className = 'highScore'

  divTimes.append(backButton)

  divGame.append(divTimes)
}
