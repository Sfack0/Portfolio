let sunButtons = document.querySelectorAll("#light-dark-mode");
let lightMode = JSON.parse(localStorage.getItem('theme') === 'light-mode') ;

if(lightMode == true)
    document.body.classList.toggle('light-mode');


sunButtons.forEach((btn) => {
    btn.addEventListener( 'click', () => {
        document.body.classList.toggle('light-mode');
        if(lightMode === true){
            lightMode = false;
            localStorage.removeItem('theme');
        }else{
            lightMode = true;
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


