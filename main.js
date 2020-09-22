window.addEventListener('load', () => {
  particlesJS.load('banner', 'particles-banner.json');

  particlesJS.load('overview', 'particles.json');
  particlesJS.load('server', 'particles.json');
  particlesJS.load('server-details', 'particles.json');
  particlesJS.load('footer', 'particles-footer.json');

  playIntroSequence();

  window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-button');
    pageYOffset > 300
      ? (scrollButton.style.opacity = 0)
      : (scrollButton.style.opacity = 1);
  });
});

const playIntroSequence = () => {
  const titleHeading = document.querySelector('.title-heading');
  const headerButtons = document.querySelectorAll('.primary-button');
  const banner = document.querySelector('#banner');
  const bannerNavbar = document.querySelector('.banner-navbar');

  console.log(bannerNavbar);

  titleHeading.style.opacity = 1;
  titleHeading.style.transform = 'translateY(0)';
  titleHeading.style.textShadow = '0 0 10px rgb(237, 210, 140)';

  headerButtons.forEach((button) => {
    button.style.opacity = 1;
  });

  banner.style.boxShadow = 'inset 0 -300px 300px black';
  bannerNavbar.style.opacity = 1;
};
