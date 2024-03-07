const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

// Toggling navbar menu on mobile
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Closing navbar menu on mobile
navLink.forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Theme toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
}

// Save user preference on load
const currentTheme = localStorage.getItem('theme') ?? null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}