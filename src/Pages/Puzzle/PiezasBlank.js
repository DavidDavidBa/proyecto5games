export const printBlank = () => {
  const divGame = document.querySelector('#puzzle')
  for (let i = 0; i < 12; i++) {
    const divBlank = document.createElement('div')
    divBlank.className = 'blank'
    divGame.append(divBlank)
  }
}
