import { arrayPosActive } from './Data.js'
import { moveElement } from './MoveElement.js'
import { assignPosX, posXrandom } from './posXrandom.js'

const createGato = () => {
  const gato = document.createElement('img')
  gato.src = './public/assets/JuegoPerro/gato.png'
  gato.className = 'element'

  let randomX = posXrandom(arrayPosActive)
  console.log(`randomX valido es: ${randomX}`)
  arrayPosActive.push(randomX)
  console.log(arrayPosActive)

  if (arrayPosActive.length > 5) {
    arrayPosActive.shift()
  }

  assignPosX(gato, randomX)
  return gato
}

export const printGato = () => {
  const gato = createGato()
  const divGame = document.querySelector('#catching')
  divGame.append(gato)

  const type = 'bad'
  moveElement(gato, type)
}
