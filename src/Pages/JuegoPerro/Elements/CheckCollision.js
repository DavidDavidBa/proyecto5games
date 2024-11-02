export const checkCollision = (element) => {
  let isCollision = false

  const perrete = document.querySelector('.perrete')
  let perreteColRect = perrete.getBoundingClientRect()
  let elementColRect = element.getBoundingClientRect()

  if (
    elementColRect.left < perreteColRect.right &&
    elementColRect.right > perreteColRect.left &&
    elementColRect.bottom > perreteColRect.top
  ) {
    console.log('colision!!!!')

    isCollision = true
  }
  return isCollision
}
