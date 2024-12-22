"use strict";

let body = document.querySelector('body');
let theme;
let button_theme = document.querySelectorAll('.cursor');

if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
    if(theme === "ligth"){
        body.className = 'ligth';
        for (let i = 0; i < button_theme.length; i++) {
            button_theme[i].style.left = "1px";
            button_theme[i].children[0].className = "fa-solid fa-moon";
        }
    }if(theme === "dark"){
        body.className = 'dark';
        for (let i = 0; i < button_theme.length; i++) {
            button_theme[i].style.left = "23px";
            button_theme[i].children[0].className = "fa-solid fa-sun";
        }
    }
}else{
    localStorage.setItem("theme", "dark");
    body.className = 'dark';
        for (let i = 0; i < button_theme.length; i++) {
            button_theme[i].style.left = "23px";
            button_theme[i].children[0].className = "fa-solid fa-sun";
        }
};

for (let i = 0; i < button_theme.length; i++) {
   button_theme[i].addEventListener('click', ()=> changeTheme(button_theme[i]));
};

function changeTheme(data){
    let icon_button = data.children[0].className;
    let button = data;
    if(icon_button === "fa-solid fa-sun"){
        data.children[0].className = "fa-solid fa-moon";
        data.style.left = "1px";
        localStorage.setItem("theme", "ligth");
        body.className = 'ligth';
    }else{
        data.children[0].className = "fa-solid fa-sun";
        button.style.left = "23px";
        localStorage.setItem("theme", "dark");
        body.className = 'dark';
    }
};

//Hamburguer menu
let burguer_b = document.getElementById('burguer_button');
let hamburguer_menu = document.getElementById('hamburguer-menu');

burguer_b.addEventListener('click', show_menu);

function show_menu(){
    if(!hamburguer_menu.className || hamburguer_menu.classList.contains('show')){
        hamburguer_menu.className = 'banisher';
        burguer_b.children[0].classList.value = "fa-solid fa-bars";
    }else if(hamburguer_menu.className &&           hamburguer_menu.classList.contains('banisher')){
        hamburguer_menu.classList.remove('banisher');
        hamburguer_menu.className = 'show';
        burguer_b.children[0].classList.value = "fa-solid fa-xmark";
    }
    
};
//Elemenst of hamburguer menu
let menu_lists = document.querySelectorAll('.menu_list');

for (let i = 0; i < menu_lists.length; i++) {
    menu_lists[i].addEventListener("click", show_menu);
};

//Redirect sections with the menu
let list_menu = document.querySelectorAll('.menu_list');
const SectionHome = document.getElementById('home');
const SectionAbout = document.getElementById('about');
const SectionResume = document.getElementById('resume');
const SectionPortfolio = document.getElementById('portfolio');

for (let y = 0; y < list_menu.length; y++) {
    
    list_menu[y].addEventListener('click', ()=>{
        switch (list_menu[y].className) {
            case 'menu_list home':
                SectionHome.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
                case 'menu_list about':
                    SectionAbout.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
                case 'menu_list resume':
                    SectionResume.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
                case 'menu_list portfolio':
                    SectionPortfolio.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
            default:
                break;
        };
    });
};


