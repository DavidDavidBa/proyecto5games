export const printHeader = () => {
  const divApp = document.querySelector('#app')
  const header = document.createElement('header')
  const divTitle = document.createElement('div')
  const h1 = document.createElement('h1')
  const imgmando = document.createElement('img')

  h1.innerText = 'Juegos De Perros'
  imgmando.src = './public/assets/mando.png'
  imgmando.alt = 'mando'

  divTitle.className = 'title'

  divTitle.append(h1)
  divTitle.append(imgmando)
  header.append(divTitle)

  divApp.append(header)
}
