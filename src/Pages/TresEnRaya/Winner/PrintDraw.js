import { reloadTris } from '../../../../src/components/Utils/buttonReload.js'
import { initTres } from '../../../Pages/TresEnRaya/TresEnRaya.js'

export const printDraw = (arrayCeldas) => {
  const divGame = document.querySelector('#tres')
  const divDraw = document.createElement('div')
  const h3Draw = document.createElement('h3')
  h3Draw.textContent = `¡EMPATE!`
  divDraw.classList.add('draw', 'animWin')

  const buttonReload = reloadTris()
  buttonReload.className = 'reloadTris'

  buttonReload.addEventListener('click', () => {
    for (let i = 0; i < arrayCeldas.length; i++) {
      arrayCeldas[i] = ''
      initTres()
    }
  })

  divDraw.append(h3Draw)
  divDraw.append(buttonReload)
  divGame.append(divDraw)
}
