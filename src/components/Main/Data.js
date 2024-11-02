import { initCatch } from '../../Pages/JuegoPerro/JuegoPerro.js'
import { initPuzzle } from '../../Pages/Puzzle/Puzzle.js'
import { initTres } from '../../Pages/TresEnRaya/TresEnRaya.js'

export let arrayButtonGames = [
  {
    nombre: 'Perrete',
    description: 'Recoge todas las pelotas que puedas',
    BgImageHome:
      'https://res.cloudinary.com/dbg2lmgxi/image/upload/v1730066328/inicioperro_wjttn5.jpg',
    game: initCatch
  },
  {
    nombre: 'Puzzle',

    description: 'Completa el puzzle lo más rápido posible',
    BgImageHome:
      'https://res.cloudinary.com/dbg2lmgxi/image/upload/v1730488075/puzzlehome_nsvjmr.jpg',
    game: initPuzzle
  },
  {
    nombre: 'Tres en raya',
    description: 'El clásico Tres en raya',
    BgImageHome:
      'https://res.cloudinary.com/dbg2lmgxi/image/upload/c_crop,w_290,h_274/v1730488780/trishome_louksd.jpg',
    game: initTres
  }
]
