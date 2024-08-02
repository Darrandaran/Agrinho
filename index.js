const buttons = document.querySelectorAll('button');
const overlay = document.getElementById('overlay');
const gif = document.getElementById('gif');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const link = button.querySelector('a');
    const href = link.getAttribute('href');
    const gifSrc = button.getAttribute('data-gif'); // Pega o caminho do GIF do atributo data-gif

    overlay.style.display = 'flex';
    gif.src = gifSrc;

    setTimeout(() => {
      window.location.href = href;
    }, 2000); // 2 segundos
  });
});
