const qaPairs = document.querySelectorAll('.qa-pair');

function clearActive() {
  qaPairs.forEach(pair => pair.classList.remove('active'));
}

qaPairs.forEach(pair => {
  pair.addEventListener('click', () => {
    if (!pair.classList.contains('active')) {
      clearActive();
    }
    pair.classList.toggle('active');
  });
});