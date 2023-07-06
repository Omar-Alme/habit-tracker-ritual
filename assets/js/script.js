let rituals = document.querySelectorAll('.ritual-btn');

rituals.forEach(ritual => {
  ritual.addEventListener('click', () => {
    ritual.classList.add('done');
  })
});