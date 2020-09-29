window.addEventListener('load', () => {
  particlesJS.load('banner', 'particles-banner.json');

  particlesJS.load('deco-01', 'particles-banner.json');
  particlesJS.load('deco-02', 'particles-banner.json');

  particlesJS.load('overview', 'particles.json');
  particlesJS.load('server', 'particles.json');
  particlesJS.load('server-details', 'particles.json');

  playIntroSequence();
  initServerStatusMessage();

  setTimeout(() => {
    window.addEventListener('scroll', () => {
      const scrollButton = document.querySelector('.scroll-button');
      pageYOffset > 300
        ? (scrollButton.style.opacity = 0)
        : (scrollButton.style.opacity = 1);
    });
  }, 5000);
});

const initServerStatusMessage = () => {
  const serverStatusMessage = document.querySelector('.server-status');
  const serverStatusDot = document.querySelector('.server-status-dot');

  if (serverStatusMessage.classList.contains('offline')) {
    const text = document.createTextNode('Offline');
    serverStatusMessage.querySelector('p > abbr').append(text);
    serverStatusDot.classList.add('server-status-dot-offline');
  } else if (serverStatusMessage.classList.contains('live')) {
    const text = document.createTextNode('Live');
    serverStatusMessage.querySelector('p > abbr').append(text);
    serverStatusDot.classList.add('server-status-dot-live');
  }
};

const playIntroSequence = () => {
  const navbar = document.querySelector('.navbar');
  const titleHeading = document.querySelector('.title-heading');
  const headerButtons = document.querySelectorAll('.primary-button');
  const banner = document.querySelector('#banner');
  const scrollButton = document.querySelector('.scroll-button');

  navbar.style.top = '-83px';
  navbar.style.opacity = 0;
  navbar.style.transform = 'rotateX(180deg)';

  setTimeout(() => {
    navbar.style.top = 0;
    navbar.style.opacity = 1;
    navbar.style.transform = 'rotateX(0)';
  }, 3500);

  titleHeading.style.opacity = 1;
  titleHeading.style.transform = 'translateY(0)';
  titleHeading.style.textShadow = '0 0 10px rgb(237, 210, 140)';

  headerButtons.forEach((button) => {
    button.style.opacity = 1;
  });

  // setTimeout(() => {
  //   opening.style.opacity = 1;
  // }, 4000);
  banner.style.boxShadow = 'inset 0 -300px 300px black';

  setTimeout(() => {
    scrollButton.style.opacity = 1;
  }, 4500);
};
