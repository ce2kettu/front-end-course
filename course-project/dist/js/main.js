const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const backdrop = document.querySelector('.mobile-backdrop');

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

let isNavOpen = false;
menuBtn.addEventListener('click', (e) => {
  document.body.classList.add('nav-open');
  isNavOpen = true;
});

backdrop.addEventListener('click', (e) => {
  document.body.classList.remove('nav-open');
  isNavOpen = false;
});
