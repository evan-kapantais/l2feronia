window.addEventListener('load', () => {
  particlesJS.load('tabs', 'particles-features.json');
  document.getElementById('rates').classList.add('tab-active');

  document
    .querySelectorAll('.tab-button')[0]
    .classList.add('tab-button-active');
});

const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', () => {
    tabButtons.forEach((button) =>
      button.classList.remove('tab-button-active')
    );
    tabButton.classList.add('tab-button-active');
  });
});

const showTab = (name) => {
  const featuresTabs = document.querySelectorAll('.tab');
  featuresTabs.forEach((tab) => {
    tab.classList.remove('tab-active');
    tab.style.transform = 'translateY(20px)';
    tab.style.opacity = 0;
  });
  document.getElementById(name).classList.add('tab-active');

  setTimeout(() => {
    document.getElementById(name).style.transition = 'all 300ms ease';
    document.getElementById(name).style.transform = 'translateY(0)';
    document.getElementById(name).style.opacity = 1;
  });
};
