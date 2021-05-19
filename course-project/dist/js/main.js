const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');

let headerScrolled = false;
document.addEventListener('scroll', (e) => {
  var scrollY = window.scrollY;

  if (scrollY > 0 && !headerScrolled) {
    header.classList.add('header-scrolled');
    headerScrolled = true;
  } else if (scrollY == 0 && headerScrolled) {
    header.classList.remove('header-scrolled');
    headerScrolled = false;
  }
});

menuBtn.addEventListener('click', (e) => {
  let isMenuShown = !menuBtn.classList.contains('close');

  if (isMenuShown) {
    menuBtn.classList.add('close');
  } else {
    menuBtn.classList.remove('close');
  }
});
