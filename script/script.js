// NAVBAR

// Function to toggle the navbar-scrolled class on scroll
  document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-scroll');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Enable Bootstrap collapse functionality
  document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('#navbarExample01');

    toggler.addEventListener('click', function () {
      collapse.classList.toggle('show');
    });
  });

