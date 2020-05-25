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
document.querySelectorAll('.tv-card__img').forEach((element, src)=>{
    element.addEventListener('mouseenter',()=> 
    (src = element.src) && (element.src = element.getAttribute('data-backdrop')));
    element.addEventListener('mouseleave',() => element.src = src);
});

//end смена картинок при наведении 
