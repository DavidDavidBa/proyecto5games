export const printPlayerturn = (playerX) => {
  const main = document.querySelector('main')
  const divTurn = document.createElement('div')
  divTurn.className = 'turn'

  if (playerX === true) {
    divTurn.innerHTML =
      '<p> Turno jugador:  </p> <p class= "turnPlayer"> X </p>'
  } else {
    divTurn.innerHTML = '<p> Turno jugador: </p> <p class= "turnPlayer"> O </p>'
  }

  main.append(divTurn)
}
