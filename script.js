// Get the hamburger icon and nav menu elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

// Toggle the visibility of the nav menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});
