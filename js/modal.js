// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

const dropButtons = document.querySelectorAll('.modal-btn-open');
const dropButtonsClose = document.querySelectorAll('.modal-btn-close');
const dropMenus = document.querySelectorAll('.backdrop');
const overlay = document.querySelector('.overlay')

dropButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    dropMenus.forEach(menu => {
      if (menu.classList.contains('is-hidden')) {
        menu.classList.remove('is-hidden');
      }
    });
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

dropButtonsClose.forEach(function (button) {
  button.addEventListener('click', () => {
    dropMenus.forEach(menu => {
      if (!menu.classList.contains('is-hidden')) {
        menu.classList.add('is-hidden');
      }
    });
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
});

overlay.addEventListener('click', () => {
  dropMenus.forEach(menu => {
    menu.classList.add('is-hidden');
  });
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});