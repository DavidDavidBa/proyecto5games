export const posXrandom = (arrayPosActive) => {
  console.log(arrayPosActive)
  const divGame = document.querySelector('#catching')

  let margen
  if (divGame.offsetWidth < 360) {
    margen = 35
  } else {
    margen = 60
  }

  const limitX = divGame.offsetWidth - 100

  if (arrayPosActive.length === 0) {
    let randomX = Math.floor(Math.random() * limitX)
    return randomX
  } else {
    let possiblePrint = false
    let randomX
    while (possiblePrint === false) {
      randomX = Math.floor(Math.random() * limitX)

      possiblePrint = arrayPosActive.every(
        (pos) => Math.abs(pos - randomX) >= margen
      )
    }
    return randomX
  }
}

export const assignPosX = (element, randomX) => {
  element.style.left = randomX + 'px'
  element.style.top = '-60px'
}
