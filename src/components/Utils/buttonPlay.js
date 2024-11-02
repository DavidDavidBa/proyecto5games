export const createButtonPlay = () => {
  const buttonPlay = document.createElement('button')
  buttonPlay.innerHTML =
    '<img src="./public/assets/JuegoPerro/play.png" alt="play" />'

  buttonPlay.className = 'play'

  return buttonPlay
}

export const buttonPlayEvent = (buttonPlay) => {
  buttonPlay.remove()
}
