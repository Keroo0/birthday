const audio = document.querySelector('audio');
const body = document.querySelector ('body');

audio.addEventListener('play', () => {
  body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});
setInterval(() => {
  confetti({
    particleCount: 50,
    spread: 100,
    origin: { y: 0 },
    colors: ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F'],
  });
}, 2000);

