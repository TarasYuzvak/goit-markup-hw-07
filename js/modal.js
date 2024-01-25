// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openMobileMenuBtn: document.querySelector('[data-open-mobile-menu]'),
    closeMobileMenuBtn: document.querySelector('[data-close-mobile-menu]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openMobileMenuBtn.addEventListener('click', openMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function closeMobileMenu() {
    refs.mobileMenu.classList.add('is-hidden');
  }

  function openMobileMenu() {
    refs.mobileMenu.classList.remove('is-hidden');
  }
})();