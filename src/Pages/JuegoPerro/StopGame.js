import { initCatch } from '../JuegoPerro/JuegoPerro.js'

export const createButtonStop = () => {
  const buttonStop = document.createElement('button')
  buttonStop.innerHTML =
    '<img src="./public/assets/JuegoPerro/stop.png" alt="stop" />'
  buttonStop.className = 'stop'

  buttonStop.addEventListener('click', () => {
    stopGame()
  })

  return buttonStop
}

const stopGame = () => {
  const music = document.querySelector('audio')
  music.pause()
  initCatch()
}
