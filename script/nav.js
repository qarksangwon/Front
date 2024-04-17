window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY === 0) {
        navbar.style.borderBottom = 'none'; 
        navbar.style.backgroundColor = '';
    } else {
        navbar.style.borderBottom = '1px solid rgb(230, 228, 228)';
        navbar.style.backgroundColor = 'white';  
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const downBtn = document.querySelector('.downbtn');

    downBtn.addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight, 
            behavior: 'smooth' 
        });
    });
});