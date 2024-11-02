import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay.js'

import { startCathing } from './StartCatching.js'
import { cleanMain } from '../../components/Utils/CleanMain.js'
import { createMusicCatching } from '../../components/Utils/Music.js'
import { createRulesCatching } from '../../components/Utils/RulesGame.js'
import { printBackToHome } from '../../components/Main/BackTohome.js'

export const initCatch = () => {
  cleanMain()

  const main = document.querySelector('main')
  const divGame = document.createElement('div')
  divGame.id = 'catching'
  const buttonPlay = createButtonPlay()

  const music = createMusicCatching()

  const rulesGame = createRulesCatching()

  buttonPlay.addEventListener('click', () => {
    music.play()
    buttonPlayEvent(buttonPlay)
    rulesGame.remove()
    startCathing()
  })

  divGame.append(rulesGame)
  divGame.append(buttonPlay)
  divGame.append(music)
  main.append(divGame)

  printBackToHome()
}
