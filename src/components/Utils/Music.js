export const createMusicCatching = () => {
  const music = document.createElement('audio')
  music.src = './public/assets/JuegoPerro/BGMusic.mp3'
  music.volume = '0.3'
  music.loop = true
  return music
}
