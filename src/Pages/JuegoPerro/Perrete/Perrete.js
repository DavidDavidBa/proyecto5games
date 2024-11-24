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
window.customElements.define(
  'virtual-joystick',
  class VirtualJoystick extends HTMLElement {
    static #getDir = (degree) => {
      const dirs = ['ne', 'n', 'nw', 'w', 'sw', 's', 'se']
      const acute = 45
      let threshold = 22.5
      for (let dir of dirs) {
        if (degree >= threshold && degree < (threshold += acute)) {
          return dir
        }
      }
      return 'e'
    }
    static #getUniqueDir(a = '', b = '') {
      let dir = ''
      if (a.includes(b[0]) === false) {
        dir = b[0]
      }
      if (b[1] && a.includes(b[1]) === false) {
        dir += b[1]
      }
      return dir
    }
    #setXY(x, y) {
      this.#element.style.setProperty('--x', `${x}px`)
      this.#element.style.setProperty('--y', `${y}px`)
    }
    #calcCrow({ clientX, clientY }) {
      const { lock } = this.dataset
      this.#rect = this.#element.getBoundingClientRect()
      const dx = lock === 'x' ? this.#r : clientX - this.#rect.left
      const dy = lock === 'y' ? this.#r : clientY - this.#rect.top
      const dxr = dx - this.#r
      const dyr = dy - this.#r
      const hypot = Math.hypot(dxr, dyr)
      this.#crow = { dx, dy, dxr, dyr, hypot }
    }
    #log({
      degree = 0,
      force = 0,
      radian = 0,
      distance = 0,
      direction = '',
      hypot = 0,
      capture = '',
      release = '',
      x = this.#rect.width + this.#rect.left,
      y = this.#rect.top + this.#rect.top
    }) {
      Object.assign(this.dataset, {
        degree,
        force,
        radian,
        distance,
        direction,
        hypot,
        capture,
        release,
        x,
        y
      })
    }
    #isInside(event) {
      const { clientX, clientY } = event
      const {
        left: x,
        top: y,
        width: w,
        height: h
      } = this.dataset.mode ? this.getBoundingClientRect() : this.#rect
      const inside =
        clientX >= x && clientX <= x + w && clientY >= y && clientY <= y + h
      return inside
    }
    #r = 0
    #element = null
    #rect = null
    #crow = null
    #pointers = []
    constructor() {
      super()
      let output = {}
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = `
          <style>${VirtualJoystick.#style}</style>
          <slot part="joystick"></slot>
      `
      this.#element = this.shadowRoot.lastElementChild
      if (this.dataset.mode === 'semi' || this.dataset.mode === 'dynamic') {
        this.#element.part.add('dynamic')
        output = { x: 0, y: 0 }
      }
      if (this.dataset.shape) {
        this.#element.part.add('box')
      }
      this.#rect = this.#element.getBoundingClientRect()
      this.#r = this.#rect.width / 2
      this.#log(output)
    }
    connectedCallback() {
      document.addEventListener('pointerdown', this.#start)
      document.addEventListener('pointermove', this.#move)
      document.addEventListener('pointerup', this.#up)
    }
    #start = (event) => {
      const { clientX, clientY } = event
      const attachEvents = () => {
        this.#pointers.push(event.pointerId)
        this.#element.part.add('active')
        this.#bind(event)
        this.dispatchEvent(new CustomEvent('joystickdown'))
      }
      if (this.#pointers.length && this.dataset.mode !== 'fixed') {
        return
      }
      this.#rect = this.#element.getBoundingClientRect()
      if (this.#isInside(event)) {
        if (this.dataset.mode) {
          if (this.dataset.mode !== 'fixed') {
            this.dataset.mode === 'semi' && this.#element.part.remove('dynamic')
            const { top, left } = this.getBoundingClientRect()
            this.#element.style.left = `${clientX - left - this.#r}px`
            this.#element.style.top = `${clientY - top - this.#r}px`
          }
          this.#calcCrow(event)
          return attachEvents()
        }
        this.#calcCrow(event)
        if (this.#crow.hypot <= this.#r || this.dataset.shape) {
          attachEvents()
        }
      }
    }
    #move = (event) => {
      if (this.#pointers.at(-1) === event.pointerId) {
        this.#calcCrow(event)
        this.#bind(event)
        this.dispatchEvent(new CustomEvent('joystickmove'))
      }
    }
    #bind = () => {
      const { dx, dy, dxr, dyr, hypot } = this.#crow
      const r = this.#r
      const angle = Math.atan2(dyr, dxr)
      let degree = (angle * 180) / Math.PI
      let x = dx
      let y = dy
      const force = hypot / r
      if (!this.dataset.shape && hypot > r) {
        x = r * Math.cos(angle) + r
        y = r * Math.sin(angle) + r
      }
      degree = (degree > 0 ? 360 : 0) - degree
      const direction =
        +this.dataset.threshold > force ? '' : VirtualJoystick.#getDir(degree)
      this.#log({
        hypot,
        degree,
        force,
        direction,
        capture: VirtualJoystick.#getUniqueDir(
          this.dataset.direction,
          direction
        ),
        release: VirtualJoystick.#getUniqueDir(
          direction,
          this.dataset.direction
        ),
        x: x + this.#rect.left,
        y: y + this.#rect.top,
        radian: (angle > 0 ? 2 * Math.PI : 0) - angle,
        distance: Math.min(hypot, r)
      })
      this.#setXY(x, y)
    }
    #up = (event) => {
      if (this.#pointers.at(-1) === event.pointerId) {
        this.#pointers.pop()
        this.#element.part.remove('active')
        this.#log({ release: this.dataset.direction })
        this.#setXY(this.#r, this.#r)
        this.dispatchEvent(new CustomEvent('joystickup'))
      }
      const pointerIndex = this.#pointers.indexOf(event.pointerId)
      if (pointerIndex !== -1) {
        this.#pointers.splice(pointerIndex, 1)
      }
    }
  }
)
 
