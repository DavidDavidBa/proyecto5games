import { printGames } from './SectionGames.js'

export const printMain = () => {
  const divApp = document.querySelector('#app')
  const main = document.createElement('main')

  divApp.append(main)
}

export const printButtonExplore = () => {
  const main = document.querySelector('main')
  const button = document.createElement('button')
  button.innerText = 'Explorar juegos'
  button.className = 'buttonExplore'
  main.append(button)
  button.addEventListener('click', () => {
    button.remove()
    console.log('print juegos')
    printGames()
  })
}
