import { reloadCatching } from '../../../components/Utils/buttonReload.js'
import { createMusicCatching } from '../../../components/Utils/Music.js'

import { printHighScore } from '../Score&Lifes/Highscore.js'
import { updateScore } from '../Score&Lifes/UpdateScore.js'
import { startCathing } from '../StartCatching.js'

export const printGameOver = () => {
  const music = document.querySelector('audio')
  music.pause()
  music.currentTime = 0

  const divGame = document.querySelector('#catching')

  const divButtons = document.createElement('div')
  const h2 = document.createElement('h2')
  h2.innerText = 'GAME OVER'
  h2.className = 'gameover'

  const highScoreButt = document.createElement('button')
  highScoreButt.innerHTML =
    "<img alt='highscore' src='./public/assets/JuegoPerro/trofeo.png'/> "
  const reloadButt = reloadCatching()

  divButtons.className = 'buttGameOver'

  let arrayScore = updateScore()
  console.log(arrayScore)

  highScoreButt.addEventListener('click', () => {
    printHighScore(arrayScore)
    h2.remove()
    divButtons.remove()
  })

  reloadButt.addEventListener('click', () => {
    divGame.innerHTML = ''
    const music = createMusicCatching()
    divGame.append(music)
    music.play()
    startCathing()
  })

  divGame.append(h2)
  divButtons.append(highScoreButt)
  divButtons.append(reloadButt)
  divGame.append(divButtons)
}
