import { cleanMain } from '../../components/Utils/CleanMain.js'
import { printCell } from '../TresEnRaya/Cell.js'
import { printWins } from '../TresEnRaya/Winner/TotWins.js'
import { printPlayerturn } from '../TresEnRaya/Turn.js'
import { checkWinner } from '../TresEnRaya/Winner/CheckWinner.js'
import { printBackToHome } from '../../components/Main/BackTohome.js'

let playerX = true

let arrayCeldas = ['', '', '', '', '', '', '', '', '']

export const initTres = () => {
  cleanMain()
  printPlayerturn(playerX)
  printCell()
  printWins()

  const celdasAll = document.querySelectorAll('.celda')

  celdasAll.forEach((celda, index) => {
    celda.addEventListener('click', () => {
      play(celda, index)
    })
  })

  printBackToHome()
}

const play = (celda, index) => {
  if (playerX === true) {
    if (celda.innerHTML === '') {
      celda.innerHTML = "<img src='./public/assets/Tris/X.png' alt='judagor X'>"
      playerX = false
      arrayCeldas[index] = 'X'
      console.log(arrayCeldas)
    }
  } else {
    if (celda.innerHTML === '') {
      celda.innerHTML =
        "<img src='./public/assets/Tris/circle.png' alt='judagor circle'>"
      playerX = true
      arrayCeldas[index] = 'O'
      console.log(arrayCeldas)
    }
  }
  checkWinner(arrayCeldas)
}
