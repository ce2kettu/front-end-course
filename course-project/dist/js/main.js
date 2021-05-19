const header = document.querySelector('header');

let headerScrolled = false;
document.addEventListener('scroll', (e) => {
  var scrollY = window.scrollY;

    console.log(scrollY);
  if (scrollY > 0 && !headerScrolled) {
    header.classList.add('header-scrolled');
    headerScrolled = true;
  } else if (scrollY == 0 && headerScrolled) {
    header.classList.remove('header-scrolled');
    headerScrolled = false;
  }
});

