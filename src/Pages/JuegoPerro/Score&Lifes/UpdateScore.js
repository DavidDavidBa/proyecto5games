export const updateScore = () => {
  let scoresArray = JSON.parse(localStorage.getItem('scores')) || [0, 0, 0]
  const scoreh4 = document.querySelector('.scoreNum')
  const score = scoreh4.innerText

  scoresArray.push(score)
  scoresArray.sort((a, b) => b - a)
  scoresArray.pop()
  console.log(scoresArray)
  localStorage.setItem('scores', JSON.stringify(scoresArray))
  return scoresArray
}
