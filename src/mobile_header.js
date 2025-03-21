let bars = document.querySelector('.header__bars');
let mobileNav = document.querySelector('.header__mobile__menu');
let mobileLinks = document.querySelectorAll('.header__mobile__link');
let resumeButton = document.querySelector('.header__mobile__resume'); 

let mobileNavIsVisible = false;

bars.addEventListener('click', () => {
    mobileNavIsVisible = !mobileNavIsVisible;
    
    if (mobileNavIsVisible) {
        mobileNav.classList.add('active');
        document.body.style.overflowY = 'hidden';
    } else {
        mobileNav.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavIsVisible = false;
        mobileNav.classList.remove('active');
        document.body.style.overflowY = 'auto';
    });
});

resumeButton.addEventListener('click', () => {
    mobileNavIsVisible = false;
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});