import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay.js'
import { printBlank } from '../Puzzle/PiezasBlank.js'
import { createPiezas, printPiezas } from './PrintPiezas.js'
import { startGame } from './StartGame.js'
import { cleanMain } from '../../components/Utils/CleanMain.js'
import { printTimer } from './Timer/Timer.js'
import { createRulesPuzzle } from '../../components/Utils/RulesGame.js'
import { printBackToHome } from '../../components/Main/BackTohome.js'

let listPiezas = []

export const initPuzzle = () => {
  cleanMain()
  const main = document.querySelector('main')
  listPiezas = []
  const divGame = document.createElement('div')
  const buttonPlay = createButtonPlay()
  const divPiezas = document.createElement('div')

  divGame.id = 'puzzle'
  divPiezas.className = 'piezas'

  const rulesGame = createRulesPuzzle()

  divGame.append(rulesGame)
  divGame.append(buttonPlay)
  main.append(divGame)

  printBackToHome()

  const buttonBack = document.querySelector('.backToHome')

  buttonPlay.addEventListener('click', () => {
    buttonPlayEvent(buttonPlay)

    divGame.style.backgroundImage = 'none'

    printTimer()

    main.insertBefore(divPiezas, buttonBack)

    createPiezas(listPiezas)

    printPiezas(listPiezas, divPiezas)

    printBlank()

    rulesGame.remove()

    startGame()
  })
}
