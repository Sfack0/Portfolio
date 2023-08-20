let bars = document.querySelector('.header__bars');
let mobileNav = document.querySelector('.header__mobile__menu');
let mobileLinks = document.querySelectorAll('.header__mobile__menu');

let mobileNavIsVisible = false;

function barsClicked(){
    mobileNavIsVisible = !mobileNavIsVisible;

    if(mobileNavIsVisible){
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }else{
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            mobileNavIsVisible = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
}
