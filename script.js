// script.js
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker color on scroll
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = '#333'; // Original color
        navbar.style.boxShadow = 'none';
    }
});
