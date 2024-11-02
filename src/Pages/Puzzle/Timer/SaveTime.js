import { sortTime } from '../Timer/SortTimes.js'

export const saveTime = () => {
  let timesArray = JSON.parse(localStorage.getItem('times')) || []

  const pTime = document.querySelector('.timer')
  const splitTextTime = pTime.innerHTML.split(' - ')

  const time = splitTextTime[1]
  timesArray.push(time)

  timesArray = sortTime(timesArray)

  console.log(timesArray)

  if (timesArray.length > 3) {
    timesArray.pop()
  }

  localStorage.setItem('times', JSON.stringify(timesArray))
  return timesArray
}
