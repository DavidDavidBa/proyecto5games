import { reloadPuzzle } from '../../../../src/components/Utils/buttonReload.js'

import { initPuzzle } from '../../Puzzle/Puzzle.js'
import { saveTime } from '../Timer/SaveTime.js'
import { printBestTime } from '../Timer/BestTime.js'

export const printWin = () => {
  const divGame = document.querySelector('#puzzle')
  const divWin = document.createElement('div')
  divWin.className = 'win'

  const h3Win = document.createElement('h3')
  h3Win.innerText = '¡CORRECTO!'

  const divButt = document.createElement('div')
  const buttonReload = reloadPuzzle()

  const bestTimeButt = document.createElement('button')
  bestTimeButt.innerHTML =
    "<img alt='bestTime' src='./public/assets/JuegoPerro/trofeo.png'/> "

  let arrayTime = saveTime()

  buttonReload.addEventListener('click', () => {
    initPuzzle()
  })

  bestTimeButt.addEventListener('click', () => {
    printBestTime(arrayTime)
  })

  divButt.append(bestTimeButt)
  divButt.append(buttonReload)

  divWin.append(h3Win)
  divWin.append(divButt)

  divGame.append(divWin)
}
