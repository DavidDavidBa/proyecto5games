export const createTimer = () => {
  const main = document.querySelector('main')
  const divGame = document.querySelector('#puzzle')
  const divTimer = document.createElement('div')
  divTimer.className = 'divTimer'
  const pTime = document.createElement('p')
  pTime.innerText = 'Tiempo - 00:00'
  pTime.className = 'timer'
  divTimer.append(pTime)
  main.insertBefore(divTimer, divGame)
}

const updateTimer = () => {
  let minutes = 0
  let seconds = 0

  let udpateTime = setInterval(() => {
    let time = document.querySelector('.timer')
    seconds++

    if (seconds < 10) {
      time.innerText = `Timer - 0${minutes}:0${seconds}`
    } else {
      time.innerText = `Timer - 0${minutes}:${seconds}`
    }

    if (seconds === 60) {
      seconds = 0
      minutes++
      time.innerText = `Timer - 0${minutes}:0${seconds}`
    }

    const win = document.querySelector('.win')
    if (win) {
      console.log('HAI FINITO IL GIOCO')
      clearInterval(udpateTime)
    }
  }, 1000)
}

export const printTimer = () => {
  createTimer()
  updateTimer()
}
