import { printGameOver } from '../Gameover/Gameover.js'
import { checkLifes } from '../Score&Lifes/Lifes.js'
import { addScore, subTrackScore } from '../Score&Lifes/ChangeScore.js'
import { checkCollision } from './CheckCollision.js'
import { removeLife } from './RemoveLife.js'

export const moveElement = (element, type) => {
  const divGame = document.querySelector('#catching')
  let isCollision = checkCollision(element)

  let speed

  let currentLifes = checkLifes()
  if (currentLifes === 0) {
    const gameover = document.querySelector('.gameover')
    if (!gameover) {
      printGameOver()
    }
    return
  }

  if (type === 'good') {
    speed = 1
    if (isCollision) {
      addScore()
      element.remove()
      return
    }

    if (parseInt(element.style.top) === divGame.offsetHeight - 50) {
      removeLife()
      element.remove()
      return
    }
  }

  if (type === 'bad') {
    speed = 1
    if (isCollision) {
      console.log('has tocado el gato')
      subTrackScore()
      element.remove()
      return
    }

    if (parseInt(element.style.top) === divGame.offsetHeight - 50) {
      element.remove()
      return
    }
  }

  let Y = parseInt(element.style.top)
  element.style.top = Y + speed + 'px'

  requestAnimationFrame(() => {
    moveElement(element, type)
  })
}
