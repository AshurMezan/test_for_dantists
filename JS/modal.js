const modal = document.getElementById('modal');
const openBtn = document.querySelector('.header__callback-button');
const closeBtn = modal.querySelector('.modal__close');
const overlay = modal.querySelector('.modal__overlay');
const body = document.body;

export function openModal() {
  modal.classList.remove('modal--hidden');
  modal.classList.add('modal--active');
  body.classList.add('body--no-scroll');
}

export function closeModal() {
  modal.classList.remove('modal--active');
  modal.classList.add('modal--hidden');
  body.classList.remove('body--no-scroll');
}

export function initModalEvents() {
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
