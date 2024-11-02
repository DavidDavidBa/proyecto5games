import { checkWin } from '../Puzzle/CheckWin/Checkwin.js'

export const startGame = () => {
  const piezasAll = document.querySelectorAll('.pieza')

  const divBlankAll = document.querySelectorAll('.blank')

  const divPiezas = document.querySelector('.piezas')

  piezasAll.forEach((pieza) => {
    pieza.addEventListener('dragstart', () => {
      console.log('moviendo')
      pieza.classList.add('moving')
    })

    pieza.addEventListener('dragend', () => {
      pieza.classList.remove('moving')
      console.log('dejada la pieza')
      checkWin()
    })
  })

  divBlankAll.forEach((divBlank) => {
    divBlank.addEventListener('dragover', (e) => {
      console.log('deja aparcada la pieza')
      e.preventDefault()
      const movingPieza = document.querySelector('.moving')
      if (divBlank.innerHTML === '') {
        divBlank.append(movingPieza)
        movingPieza.classList.add('inserted')
      }
    })

    divPiezas.addEventListener('dragover', (e) => {
      console.log('devuelve la pieza')
      e.preventDefault()
      const movingPieza = document.querySelector('.moving')
      divPiezas.append(movingPieza)
    })
  })
}
