const container = document.querySelector('.container1');
const szeeks = document.querySelectorAll('.sor .szeek:not(.foglalt)');

// szeek click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('szeek') &&
    !e.target.classList.contains('foglalt')
  ) {
    e.target.classList.toggle('kivalasztott');

    updatekivalasztottCount();
  }
});
