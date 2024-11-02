let wins = JSON.parse(sessionStorage.getItem('winX')) || [
  { name: 'X', score: 0 },
  { name: 'O', score: 0 }
]

export const printWins = () => {
  const main = document.querySelector('main')
  const divWins = document.createElement('div')

  const h3WinX = document.createElement('h3')
  h3WinX.id = 'X'
  const h3WinO = document.createElement('h3')
  h3WinO.id = 'O'

  h3WinX.innerHTML = `VICTORIAS X: ${wins[0].score} `
  h3WinO.innerHTML = `VICTORIAS O: ${wins[1].score}`

  divWins.className = 'totWins'

  divWins.append(h3WinX)
  divWins.append(h3WinO)

  main.append(divWins)
}

export const updateWins = (winner) => {
  const X = document.getElementById('X')
  const O = document.getElementById('O')
  for (const player of wins) {
    if (player.name === winner) {
      player.score++
    }
  }
  sessionStorage.setItem('wins', JSON.stringify(wins))
  X.innerText = `VICTORIAS X: ${wins[0].score} `
  O.innerText = `VICTORIAS O: ${wins[1].score} `
}
