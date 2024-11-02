export const printLifes = (divElements) => {
  const divLifes = document.createElement('div')
  divLifes.className = 'lifes'
  for (let i = 1; i < 4; i++) {
    const life = document.createElement('img')
    life.src = './public/assets/JuegoPerro/life.png'
    life.className = 'life'
    divLifes.append(life)
  }
  divElements.append(divLifes)
}

export const checkLifes = () => {
  const lifes = document.querySelectorAll('.life')
  return lifes.length
}
