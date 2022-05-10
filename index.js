const mobileMenuOpen = document.querySelector('.mobile-hamburger-btn');
const mobileMenuClose = document.querySelector('.mobile-close-btn');

mobileMenuOpen.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'none';
  document.querySelector('.mobile-menu-btn').style.display = 'none';
  document.querySelector('.desktop-nav').style.display = 'flex';
});

mobileMenuClose.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
});

const menuListItems = document.querySelector('.animate');

menuListItems.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
  window.location.reload();
});
