// 새로고침 시 맨위 로딩, 맨 마지막에 넣을거임
// window.onload = function() {
//     window.scrollTo(0, 0);
// };
// window.addEventListener('beforeunload', function() {
//     window.scrollTo(0, 0);
// });

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


document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.querySelector('.section2');
    const title1 = document.querySelector('.section2-title-h1');
    const title2 = document.querySelector('.section2-title-h2');
    const img1 = document.querySelector('.section2-img1');
    const img2 = document.querySelector('.section2-img2');
    const paragraph = document.querySelector('.section2-p');
    let section2Visible = false;

    window.addEventListener('scroll', () => {
        const section2Top = section2.getBoundingClientRect().top * 2;
        const scrollPosition = window.scrollY 

        if (scrollPosition >= section2Top && !section2Visible) { 
            section2Visible = true;
            title1.classList.add('opacity-visible');
            title2.classList.add('opacity-visible');
            setTimeout(() => {
                img2.classList.add('opacity-visible');
            }, 500);
            setTimeout(() => {
                img1.classList.add('opacity-visible');
            }, 1000);
            setTimeout(() => {
                paragraph.classList.add('opacity-visible');
            }, 1500);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const section3 = document.querySelector('.section3');
    const title1 = document.querySelector('.section3-1-h1');
    const title2 = document.querySelector('.section3-1-h2');
    const pElements = document.querySelectorAll('.section3 .section3-2 .section3-2-left p, .section3 .section3-3 .section3-3-right p, .section3 .section3-4 .section3-4-left p');
    const imgElements = document.querySelectorAll('.section3 .section3-2 .section3-2-right img, .section3 .section3-3 .section3-3-left img, .section3 .section3-4 .section3-4-right img');
    
    let section3Visible = false;

    window.addEventListener('scroll', () => {
        const section3Top = section3.getBoundingClientRect().top * 6;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= section3Top && !section3Visible) {
            section3Visible = true;

            setTimeout(() => {
                title1.classList.add('opacity-visible');
                title2.classList.add('opacity-visible');
            }, 200);

            setTimeout(() => {
                pElements.forEach((p) => {
                    p.classList.add('opacity-visible');
                });
            }, 1200);

            setTimeout(() => {
                imgElements.forEach((img) => {
                    img.classList.add('opacity-visible');
                });
            }, 1500);
        }
    });
});
