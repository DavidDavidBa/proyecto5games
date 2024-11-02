export const createPiezas = (listPiezas) => {
  for (let i = 1; i < 13; i++) {
    const imgPieza = document.createElement('img')
    imgPieza.src = `./public/assets/Puzzle/${i}.png`
    imgPieza.className = 'pieza'
    listPiezas.push(imgPieza)
  }

  listPiezas.reverse()

  for (let i = 0; i < listPiezas.length; i++) {
    let randomPos = Math.floor(Math.random() * listPiezas.length)
    let temp = listPiezas[i]
    listPiezas[i] = listPiezas[randomPos]

    listPiezas[randomPos] = temp
  }

  return listPiezas
}

export const printPiezas = (listPiezas, divPiezas) => {
  for (const pieza of listPiezas) {
    divPiezas.append(pieza)
  }
}
