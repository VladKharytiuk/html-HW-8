(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuScroll = document.querySelector('[data-no-scroll]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    document.body.classList.add('modal-open'); // коли модалка відкрита
    document.body.classList.remove('modal-open'); // коли модалка закрита
    mobileMenuRef.classList.toggle('is-open');

    mobileMenuScroll.classList.toggle('no-scroll');
  });
})();
