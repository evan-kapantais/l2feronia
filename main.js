window.addEventListener('load', () => {
  particlesJS.load('banner', 'particles-banner.json');

  particlesJS.load('deco-01', 'particles-banner.json');
  particlesJS.load('deco-02', 'particles-banner.json');

  particlesJS.load('overview', 'particles.json');
  particlesJS.load('server', 'particles.json');
  particlesJS.load('server-details', 'particles.json');

  const backToTop = document.querySelector('.back-to-top');

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

  window.addEventListener('scroll', () => {
    if (pageYOffset > 1000) {
      backToTop.style.opacity = 1;
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = 0;
      backToTop.style.pointerEvents = 'none';
    }
  });

  backToTop.addEventListener('click', () => window.scrollTo(0, 0));
});

const initServerStatusMessage = () => {
  const loginserverStatusMessage = document.getElementById(
    'loginserver-status'
  );
  const loginserverStatusDot = document.getElementById(
    'loginserver-status-dot'
  );

  const gameserverStatusMessage = document.getElementById('gameserver-status');
  const gameserverStatusDot = document.getElementById('gameserver-status-dot');

  if (loginserverStatusMessage.classList.contains('offline')) {
    loginserverStatusMessage
      .querySelector('p > abbr')
      .setAttribute('title', 'Status: Offline');
    loginserverStatusDot.classList.add('status-dot-offline');
  } else if (loginserverStatusMessage.classList.contains('live')) {
    loginserverStatusMessage
      .querySelector('p > abbr')
      .setAttribute('title', 'Status: Live');
    loginserverStatusDot.classList.add('status-dot-live');
  }

  if (gameserverStatusMessage.classList.contains('offline')) {
    gameserverStatusMessage
      .querySelector('p > abbr')
      .setAttribute('title', 'Status: Offline');
    gameserverStatusDot.classList.add('status-dot-offline');
  } else if (gameserverStatusMessage.classList.contains('live')) {
    gameserverStatusMessage
      .querySelector('p > abbr')
      .setAttribute('title', 'Status: Live');
    gameserverStatusDot.classList.add('status-dot-live');
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
