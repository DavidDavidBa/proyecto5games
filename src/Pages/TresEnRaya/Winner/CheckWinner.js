import { updateWins } from '../Winner/TotWins.js'
import { printWinner } from '../Winner/PrintWinner.js'
import { printDraw } from '../Winner/PrintDraw.js'

export const checkWinner = (arrayCeldas) => {
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  let winner = false

  for (let i = 0; i < winCombinations.length; i++) {
    const pos1 = winCombinations[i][0]
    const pos2 = winCombinations[i][1]
    const pos3 = winCombinations[i][2]

    if (arrayCeldas[pos1] != '') {
      if (
        arrayCeldas[pos1] === arrayCeldas[pos2] &&
        arrayCeldas[pos1] === arrayCeldas[pos3]
      ) {
        const player = arrayCeldas[pos1]
        console.log(`ha ganado el player ${player}`)
        printWinner(player, arrayCeldas)
        updateWins(player)
        winner = true
      }
    }
  }

  if (!winner && arrayCeldas.every((celda) => celda !== '')) {
    console.log('empate')
    printDraw(arrayCeldas)
  }
}
