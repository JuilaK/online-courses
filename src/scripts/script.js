'use strict';
import './dropdown.js';
import './pagination.js';
import './swiper.js';
import './tabs.js';
import 'svgxuse/svgxuse.js';

document.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.js-header-burger');
    const menu = document.querySelector('.js-header-burger-menu');
    const menuLinks = menu.querySelectorAll('.js-header-burger-link');

    function closeMenu(){
        menuBtn.classList.remove('show');
        menu.classList.remove('show');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('show');
        menu.classList.toggle('show');
        document.body.style.overflow = menuBtn.classList.contains('show') ? 'hidden' : '';    
    })

    menuLinks.forEach(link => link.addEventListener('click', closeMenu));   

    const switchBtns = document.querySelectorAll('.js-our-events-switch .btn');
    const eventsList = document.querySelector('.js-our-events-list');
    switchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnClicked = e.currentTarget;
            if (!btnClicked.classList.contains("active")) {
                btnClicked.classList.add("active");
            }

            if (btnClicked == switchBtns[1]) {
                eventsList.classList.add("grid");
                switchBtns[0].classList.remove("active");                
            } else {
                eventsList.classList.remove("grid");
                switchBtns[1].classList.remove("active"); 
            }
        })
    })
})
