import { printWin } from '../CheckWin/PrintWin.js'

export const checkWin = () => {
  const divBlankAll = document.querySelectorAll('.blank')

  let checkWin = 0

  for (let i = 0; i < divBlankAll.length; i++) {
    const divBlank = divBlankAll[i]

    let img = divBlank.querySelector('img')

    if (img) {
      let src = img.src
      if (src.includes(`${i + 1}.png`)) {
        console.log('correct')
        checkWin++
      } else {
        console.log('incorrect')
      }
    }
  }

  if (checkWin === 12) {
    printWin()
  }
}
