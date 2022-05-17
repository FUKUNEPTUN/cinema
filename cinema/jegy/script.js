let container = document.querySelector('.container1');
let szeeks = document.querySelectorAll('.sor .szeek:not(.foglalt)');

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('szeek') &&
    !e.target.classList.contains('foglalt')
  ) {
    e.target.classList.toggle('kivalasztott');

  }
});

