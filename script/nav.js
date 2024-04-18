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
    const tossInfo = document.querySelector('.toss-info');

    downBtn.addEventListener('click', function() {
        const currentScrollY = window.scrollY; 
        const tossInfoTop = tossInfo.getBoundingClientRect().top; 

        window.scrollTo({
            top: tossInfoTop + currentScrollY, 
            behavior: 'smooth' 
        });
    });
});