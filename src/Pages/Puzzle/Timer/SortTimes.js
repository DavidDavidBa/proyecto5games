export const sortTime = (arrayTime) => {
  const checkTotSeconds = (time) => {
    let minutes = Number(time.split(':')[0])

    let seconds = Number(time.split(':')[1])

    minutes = minutes * 60
    let totSeconds = minutes + seconds
    return totSeconds
  }

  arrayTime.sort((a, b) => {
    let totSecA = checkTotSeconds(a)
    let totSecB = checkTotSeconds(b)
    return totSecA - totSecB
  })

  return arrayTime
}
