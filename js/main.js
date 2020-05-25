// меню

const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие/закрытие меню

hamburger.addEventListener('click',()=>{
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.body.addEventListener('click', event =>{
    if(!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click', event =>{
    const target = event.target;
    const dropdown = target.closest('.dropdown');

    if(dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});

// end меню

//смена картинок при наведении
const tvCards = document.querySelectorAll('.tv-card__img');
const changePicture = event =>{
    const src = event.target.getAttribute('data-backdrop');
        event.target.setAttribute('data-backdrop',event.target.src);
        event.target.src = src;
}
    for(let i = 0; i<tvCards.length; i++){
        tvCards[i].addEventListener('mouseover', event =>{
            changePicture(event);

        });
        tvCards[i].addEventListener('mouseout', event =>{
            changePicture(event);
        });
}   

//end смена картинок при наведении 



