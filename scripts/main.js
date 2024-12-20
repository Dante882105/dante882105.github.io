"use strict"

let menu = document.getElementById('navbar');
let burguer = document.getElementById('burguer');
let burguer_button = document.getElementById('burguer_button');


function show_hide(){
    const ScreenStart = window.innerWidth;
    if(ScreenStart <= 500){
        menu.className = 'hide';
        burguer.classList.remove('hide');
        burguer_button.classList.remove('hide');
    }
    if(ScreenStart > 500){
        menu.classList.remove('hide');
        burguer.className = 'hide';
        burguer_button.className = 'hide'
    };
};

show_hide();

window.addEventListener('resize', show_hide);