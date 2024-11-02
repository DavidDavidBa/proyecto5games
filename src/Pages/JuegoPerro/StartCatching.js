import { createButtonStop } from './StopGame.js'
import { printPelota } from './Elements/Pelotas.js'
import { printGato } from './Elements/Gato.js'
import { printPerrete } from './Perrete/Perrete.js'
import { printScoreAndLife } from './Score&Lifes/Score&Life.js'

export const startCathing = () => {
  const divGame = document.querySelector('#catching')
  printPerrete()
  printScoreAndLife()

  let pelotaInterval
  pelotaInterval = setInterval(() => {
    const lifes = document.querySelectorAll('.life')

    console.log(lifes)

    if (lifes.length > 0) {
      console.log('pinto pelota')
      printPelota()
    } else if (lifes.length === 0) {
      clearInterval(pelotaInterval)
    }
  }, 3000)

  let gatoInterval
  gatoInterval = setInterval(() => {
    const lifes = document.querySelectorAll('.life')

    if (lifes.length > 0) {
      printGato()
    } else if (lifes.length === 0) {
      clearInterval(gatoInterval)
    }
  }, 4000)

  const buttonStop = createButtonStop()

  divGame.append(buttonStop)
}
