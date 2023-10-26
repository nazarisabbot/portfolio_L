const burgerMenuHandler = (btn, menu) => {
  let prevent = false;
  let preventScroll;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');

    if (!prevent) {
      preventScroll = (e) => {
        e.preventDefault();
      };
      document.body.addEventListener('wheel', preventScroll, {passive: false});
      prevent = true;
    } else {
      document.body.removeEventListener('wheel', preventScroll, {
        passive: false,
      });
      prevent = false;
    }
  });
};

export default burgerMenuHandler;
