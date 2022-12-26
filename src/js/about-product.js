(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-product-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-product-close]'),
    modal: document.querySelector('[data-modal-about-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
