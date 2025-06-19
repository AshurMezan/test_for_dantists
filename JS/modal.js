  const modal = document.getElementById('modal');
  const openBtns = document.querySelectorAll('.header__callback-button, .main__section--three__info--button');
  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');
  const body = document.body;

  function openModal() {
    modal.classList.remove('modal--hidden');
    modal.classList.add('modal--active');
    body.classList.add('body--no-scroll');
  }

  function closeModal() {
    modal.classList.remove('modal--active');
    modal.classList.add('modal--hidden');
    body.classList.remove('body--no-scroll');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });