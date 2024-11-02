import { cleanMain } from '../Utils/CleanMain.js'
import { printGames } from './SectionGames.js'

export const printBackToHome = () => {
  const main = document.querySelector('main')
  const button = document.createElement('button')

  button.innerHTML =
    '<img src="https://res.cloudinary.com/dbg2lmgxi/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730153247/botonvolver_mk87cq.jpg" alt="volver"/>'

  button.className = 'backToHome'

  button.addEventListener('click', () => {
    cleanMain()
    printGames()
  })

  main.append(button)
}
