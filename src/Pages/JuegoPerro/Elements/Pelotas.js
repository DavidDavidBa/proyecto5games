import { arrayPosActive } from './Data.js'
import { moveElement } from './MoveElement.js'
import { assignPosX, posXrandom } from './posXrandom.js'

const createPelota = () => {
  const pelota = document.createElement('img')
  pelota.src = './public/assets/JuegoPerro/pelota.png'
  pelota.className = 'element'

  let randomX = posXrandom(arrayPosActive)
  console.log(`randomX valido es: ${randomX}`)

  arrayPosActive.push(randomX)

  const divGame = document.querySelector('#catching')
  let divGameWidth = divGame.offsetWidth
  if (divGameWidth < 360) {
  }
  if (arrayPosActive.length > 5) {
    arrayPosActive.shift()
  }

  assignPosX(pelota, randomX)

  return pelota
}

export const printPelota = () => {
  const pelota = createPelota()
  const divGame = document.querySelector('#catching')
  divGame.append(pelota)
  const type = 'good'

  moveElement(pelota, type)
}
