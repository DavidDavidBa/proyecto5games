export const printCell = () => {
  const main = document.querySelector('main')
  const divGame = document.createElement('div')
  divGame.id = 'tres'

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.className = 'celda'
    divGame.append(div)
  }

  main.append(divGame)
}
