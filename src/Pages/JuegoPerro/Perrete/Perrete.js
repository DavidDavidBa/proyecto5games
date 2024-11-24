export const printPerrete = () => {
  const divGame = document.querySelector('#catching')
  const imgPerrete = document.createElement('img')
  imgPerrete.src = './public/assets/JuegoPerro/perro.png'
  imgPerrete.alt = 'perrete character'
  imgPerrete.className = 'perrete'

  document.addEventListener('keydown', (e) => {
    movePerrete(e, imgPerrete)
  })

  divGame.append(imgPerrete)
}

const movePerrete = (e, perrete) => {
  const divGame = document.querySelector('#catching')

  let limitRight
  let limitLeft
  if (divGame.offsetWidth < 360) {
    limitRight = divGame.offsetWidth - 40

    limitLeft = 40
  } else {
    limitRight = divGame.offsetWidth - 60

    limitLeft = 60
  }

  let posX = perrete.offsetLeft

  let speed = 8

  if (e.key === 'ArrowRight') {
    if (posX < limitRight) {
      let posX = perrete.offsetLeft
      perrete.style.left = posX + speed + 'px'
    }
  }

  if (e.key === 'ArrowLeft') {
    if (posX > limitLeft) {
      let posX = perrete.offsetLeft
      posX -= 8
      perrete.style.left = posX + 'px'
    }
  }
}
const leftJoystick = new BABYLON.VirtualJoystick(true);
const rightJoystick = new BABYLON.VirtualJoystick(false);
leftJoystick.deltaPosition.x;
leftJoystick.deltaPosition.y;
